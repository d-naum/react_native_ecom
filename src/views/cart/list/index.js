import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";

import Theme from '../../../theme/style'
import MenuButton from '../../../theme/menuButton'
import EmptyCartHolder from './empty'
import Styles from './style'
import ProductListItem from '../partials/product-list-item'
import FormStyle from '../../../theme/form'

import * as CartAction from '../../../redux/actions/cart'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PaymentAction from '../../../redux/actions/payment'
import * as ShippingMethodsAction from '../../../redux/actions/shipping-methods'

class CartScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.CartAction.getCart()
        this.props.PaymentAction.getGateways()
        this.props.ShippingMethodsAction.getList()

    }

    nav(route) {
        const { currentCustomer, navigation } = this.props
        const { customer } = currentCustomer
        if (!customer) {
            navigation.navigate('LoginScreen', { backTo: 'CheckoutAddress' })
        } else {
            navigation.navigate(route)
        }
    }

    getCartTotal() {
        const { cart } = this.props
        let total = 0
        cart.map((item) => {
            total += item.product.price * item.quantity
        })
        return parseFloat(Math.round(total * 100) / 100).toFixed(2);
    }

    render() {

        const { cart, navigation } = this.props

        if (cart === undefined || cart.length == 0)
            return (
                <EmptyCartHolder navigation={navigation} />
            )

        return (

            <View style={Styles.cartContainer}>
                <View style={Styles.cartHeader}>
                    <View style={Styles.cartHeaderLeft}>
                        <View>
                            <Text style={Styles.cartStatusText}>
                                {'YOUR SHOPPING CART'}
                            </Text>
                        </View>
                        <View style={Styles.cartStatusBottom}>
                            <Text style={Styles.cartStatusText2}>
                                {'Review'} {cart.map(item => item.quantity).reduce((prev, next) => prev + next)} {'items'}
                            </Text>
                            <Text style={Styles.cartStatusText3}>
                                {' £' + this.getCartTotal()}
                            </Text>
                        </View>

                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={Styles.cartProducts}>
                        {cart.map((product, index) => (<ProductListItem
                            navigation={this.props.navigation}
                            key={'product' + index}
                            product={product}
                            remove={() => { this.props.CartAction.removeFromCart(product) }} />
                        ))}
                    </View>
                    <View style={FormStyle.pageDoneWithDiscard}>
                        <View style={FormStyle.pageDiscardView}>
                            <TouchableOpacity style={FormStyle.pageDiscardButton} onPress={() => { navigation.navigate('HomeScreen') }}>
                                <Image source={require('../../../assets/images/ic_arrow_left.png')} style={FormStyle.pageDiscardButtonImage} resizeMode={'contain'} />
                                <Text style={FormStyle.pageDiscardButtonText}>Continue Shopping</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={FormStyle.pageDoneView}>
                            <TouchableOpacity style={FormStyle.pageDoneButton} onPress={() => { this.nav('CheckoutAddress') }}>
                                <Text style={FormStyle.pageDoneButtonText}>CHECK OUT</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>


            </View>

        )
    }

}

CartScreen.navigationOptions = ({ navigation }) => ({
    title: 'CART',
    headerLeft: <MenuButton navigation={navigation} />,
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    headerRight: (<View />)
})


function mapStateToProps(state) {
    return {
        cart: state.cart,
        currentCustomer: state.currentCustomer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        PaymentAction: bindActionCreators(PaymentAction, dispatch),
        CartAction: bindActionCreators(CartAction, dispatch),
        ShippingMethodsAction: bindActionCreators(ShippingMethodsAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);