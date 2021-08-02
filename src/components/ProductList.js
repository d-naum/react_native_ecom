import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native"

import Loading from "../common/loading";
import Theme from '../theme/style'

class ProductsView extends Component {

    renderProducts() {
        const { navigation, data, whislist, horizontal } = this.props;

        return data.map((product) => {
            product = whislist ? product.product : product
            return (
                <TouchableOpacity style={[Styles.item, !horizontal ? Styles.l2 : {}]} key={product.id} onPress={() => navigation.navigate("ProductScreenInCategoryScreen", { product })} underlayColor="white">

                    <Image style={Styles.image}
                        source={{ uri: product.images[0].src }} resizeMode={'cover'} />

                    <Text numberOfLines={1} style={Styles.name}>{product.name}</Text>

                    {product.regular_price != '' && product.price + '' !== product.regular_price + '' ?
                        <View style={Styles.prices}>
                            <Text style={Styles.price_discounted}>£{product.regular_price}</Text>
                            <Text style={Styles.price}>£{product.price}</Text>
                        </View>
                        : <Text style={Styles.price}>£{product.price}</Text>
                    }

                </TouchableOpacity>
            )
        })
    }

    render() {
        const { data, loading, horizontal } = this.props;
        return (
            <View style={Styles.view}>
                {loading ? <Loading /> : null}
                <ScrollView
                    horizontal={horizontal || false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScroxllIndicator={false}
                    alwaysBounceVertical={false}>
                    <View style={Styles.list}>
                        {data && this.renderProducts()}
                    </View>
                </ScrollView>
            </View>

        )
    }

}

const Styles = StyleSheet.create({
    view: {
        marginBottom: 15
    },
    list: {
        flexDirection: 'row',
        paddingRight: 15
    },
    image: {
        width: 150,
        height: 184,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#E6E8EC'
    },
    item: {
        paddingLeft: 15,
    },
    prices: {
        flexDirection: 'row'
    },
    price: {
        fontFamily: Theme.boldFont,
        fontSize: 14,
        color: Theme.primaryColor,
        letterSpacing: 0.5,
        fontWeight: '600'

    },
    price_discounted: {
        fontFamily: Theme.boldFont,
        fontSize: 13,
        color: Theme.primaryColor,
        paddingRight: 5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        opacity: 1,
        letterSpacing: 0.5,
        display: 'none'
    },
    name: {
        fontFamily: Theme.mediumFont,
        fontSize: 14,
        letterSpacing: 1,
        marginTop: 8,
        marginBottom: 5,
        color: Theme.primaryColor,
        width: 150,
        fontWeight: '500'
    }
})

export default ProductsView