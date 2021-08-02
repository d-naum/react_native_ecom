import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import Theme from '../../../theme/style'
import FormStyle from '../../../theme/form'

const imgSource = require('../../../assets/images/ic_cart_active.png')
const EmptyCardHolder = (props) => (
    <View style={Styles.container}>
        <Image source={imgSource} style={Styles.image} resizeMode={'contain'} />
        <View style={Styles.holder}>
            <Text style={Styles.text}>{'You Have No Items in Your Shopping Cart'}</Text>
        </View>

        <View style={Styles.footer}>
            <TouchableOpacity style={FormStyle.defaultButton} onPress={() => { props.navigation.navigate('HomeScreen') }}>
                <Text style={FormStyle.defaultButtonText}>{'CONTINUE TO SHOPPING'}</Text>
            </TouchableOpacity>
        </View>
    </View>
)
export default EmptyCardHolder

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: 28,
        height: 70,
        marginBottom: 10,
        marginTop: -100
    },
    holder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        lineHeight: 23,
        fontSize: 15,
        fontFamily: Theme.mediumFont,
        fontWeight: '500',
        textAlign: 'center',
        color: Theme.primaryColor,
        letterSpacing: 1,
        paddingHorizontal: 60
    },

    footer: {
        position: 'absolute',
        bottom: 25,
        width: '100%',
        height: 80,
        backgroundColor: Theme.backgroundColor
    },
});