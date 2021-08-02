import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import Theme from '../../../theme/style'
import styles from './style'
import { Dropdown } from 'react-native-material-dropdown';
import * as CartAction from '../../../redux/actions/cart'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProductListItem extends Component {

    constructor(props) {
        super(props)
    }

    quantityChange(quantity) {
        this.props.CartAction.addToCart(this.props.product.product, this.props.product.attributes, quantity === 1 ? 'reset' : quantity)
    }

    render() {

        const { product, navigation } = this.props

        return (

            <View style={styles.productListItem}>

                <TouchableOpacity style={[styles.imageContainer]} onPress={() => { navigation.navigate('ProductScreenInCartScreen', { product: product.product }) }}>
                    <Image resizeMode={'cover'}
                        source={{ uri: product.image }} style={styles.image} />
                </TouchableOpacity>

                <View style={styles.content}>
                    <TouchableOpacity style={styles.nameContainer} onPress={() => { navigation.navigate('ProductScreenInCartScreen', { product: product.product }) }}>
                        <Text style={styles.name}>{product.name}</Text>
                    </TouchableOpacity>
                    <View style={styles.priceContainer}>
                        { //product.product.regular_price > 0 && <Text style={styles.discount}>${product.product.regular_price}</Text>
                        }
                        <Text style={styles.price}>£{product.product.price}</Text>
                        <View style={styles.productFeatures}>
                            {product.attributes.map((a, i) => {
                                if (a !== undefined && a.indexOf(':') != -1) {
                                    return <Text key={'s' + i} style={styles.sizeText}>{a.split(':')[1]}</Text>
                                }
                            })}
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.editButton} onPress={() => { this.props.remove() }}>
                    <Image style={{ width: 16, height: 16 }} resizeMode={'contain'}
                        source={require('../../../assets/images/ic_close.png')} />
                </TouchableOpacity>

                <View style={styles.Dropdown}>
                    <Dropdown
                        renderAccessory={() =>
                            <Image
                                resizeMode={'contain'}
                                style={{ opacity: 0.6, position: 'relative', top: 7, marginLeft: 7 }}
                                source={require('../../../assets/images/ic_down.png')} />
                        }
                        fontSize={14}
                        itemPadding={5}
                        baseColor={'transparent'}
                        onChangeText={(value) => { this.quantityChange(value) }}
                        itemTextStyle={{ fontFamily: Theme.regularFont, }}
                        label={'Quantity'}
                        data={[
                            { name: '01', value: 1 },
                            { name: '02', value: 2 },
                            { name: '03', value: 3 },
                            { name: '04', value: 4 },
                            { name: '05', value: 5 },
                            { name: '06', value: 6 },
                            { name: '07', value: 7 },
                            { name: '08', value: 8 },
                            { name: '09', value: 9 },
                            { name: '10', value: 10 },
                        ]}
                        value={product.quantity}
                    />
                </View>

            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        CartAction: bindActionCreators(CartAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);