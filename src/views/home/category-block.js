import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import Theme from '../../theme/style'

export default class CategoryBlock extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { item, navigation, index } = this.props

        return (


            <View>
                {
                    index === 1

                        ?

                        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('CategoryProductsScreen', { item }) }}>
                            <View style={styles.content}>
                                <Text style={styles.header} numberOfLines={2}>FOR {item.name.toUpperCase()}</Text>
                                <Text style={styles.count}>{item.count} items</Text>
                            </View>
                            <View style={styles.item}>
                                {item.image ? <Image source={{ uri: item.image.src, }} resizeMode={'cover'} style={styles.image} /> : <Image source={require('../../assets/images/picture.png')} resizeMode={'cover'} style={styles.image2} />}
                            </View>
                        </TouchableOpacity>

                        :

                        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('CategoryProductsScreen', { item }) }}>
                            <View style={styles.item}>
                                {item.image ? <Image source={{ uri: item.image.src, }} resizeMode={'cover'} style={styles.image} /> : <Image source={require('../../assets/images/picture.png')} resizeMode={'cover'} style={styles.image2} />}
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.header} numberOfLines={2}>FOR {item.name.toUpperCase()}</Text>
                                <Text style={styles.count}>{item.count} items</Text>
                            </View>
                        </TouchableOpacity>


                }

            </View>



        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E6E8EC',
        margin: 15,
        height: 160,
        flexDirection: 'row',
        borderRadius: 4,
        marginBottom: 5
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        borderRadius: 4,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        flexDirection: 'column'
    },
    header: {
        fontFamily: Theme.boldFont,
        color: Theme.primaryColor,
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: 1,
        marginBottom: 10,
        paddingHorizontal: 15,
        textAlign: 'center',
        width: 150
    },
    count: {
        fontFamily: Theme.regularFont,
        color: Theme.greyColor,
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 4,
    },
    image2: {
        height: 80,
        width: 80
    }
});