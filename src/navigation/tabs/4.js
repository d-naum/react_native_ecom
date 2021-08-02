import React from 'react'
import { createStackNavigator } from 'react-navigation'
import CartListScreen from '../../views/cart/list'
import CheckoutAddress from '../../views/checkout/address'
import CheckoutPayment from '../../views/checkout/payment'
import PaypalPayment from '../../views/checkout/payment/paypal'
import CheckoutComplete from '../../views/checkout/complete'
import CheckoutAgreement from '../../views/checkout/agreement'
import CartButton from '../../common/CartButton';

import LoginScreen from '../../views/login/home'
import RegisterScreen from '../../views/register/home'

const tabLabel = 'Cart'

import ProductScreenInCartScreen from '../../views/product/home'

const Cart = createStackNavigator({
    CartListScreen,
    CheckoutAddress,
    CheckoutPayment,
    PaypalPayment,
    CheckoutAgreement,
    CheckoutComplete,
    LoginScreen,
    RegisterScreen,
})

const Stacks = createStackNavigator(
    {
        Cart,
        ProductScreenInCartScreen
    },
    {
        headerMode: 'none',
        mode: 'modal',
        cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
        },
        tabBarOptions: {
            tabBarVisible: true
        }
    }
)



export default {
    screen: Stacks,
    navigationOptions: {
        tabBarLabel: tabLabel,
        tabBarIcon: ({ tintColor, focused }) => (
            <CartButton tintColor={tintColor} focused={focused} />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }: any) => {
            navigation.navigate('CartListScreen')
            defaultHandler()
        },
    }
}