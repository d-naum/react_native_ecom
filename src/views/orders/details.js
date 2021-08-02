import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";

import Theme from '../../theme/style'
import BackButton from '../../theme/back'
import Styles from './style'
import Loading from '../../common/loading'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OrderAction from '../../redux/actions/orders'
import style from "./style";

class OrderDetails extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { OrderAction, currentCustomer } = this.props
        OrderAction.getOrders(currentCustomer.customer.id)
    }

    json = {
        "billing": {
            "first_name": "Micheal",
            "last_name": "Faraday",
            "company": "",
            "address_1": "969 abc",
            "address_2": "",
            "city": "California",
            "state": "CA",
            "postcode": "94103",
            "country": "",
            "email": "john.doe@example.com",
            "phone": "(555) 555-5555"
        },
        "shipping": {
            "first_name": "Micheal",
            "last_name": "Faraday",
            "company": "",
            "address_1": "969 abc",
            "address_2": "",
            "city": "California",
            "state": "CA",
            "postcode": "94103",
            "country": ""
        },
        "payment_method": "paypal",
    }

    render() {
        const { navigation } = this.props
        const order = navigation.getParam('order')
        const { billing, shipping, payment_method_title, line_items, total, currency } = order
        return (
            <View style={Styles.container}>
                <View style={{ marginTop: 20 }}>
                    {this.renderOrders([order])}
                </View>
                <View style={style.section}>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionLabel}>Payment Method</Text>
                        <Text style={style.sectionParagraph}>{payment_method_title} {total} {currency}</Text>
                    </View>
                </View>
                <View style={style.section}>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionLabel}>Products</Text>
                    </View>
                    <View style={style.sectionRow}>
                        {line_items.map((item, index) => {
                            return (
                                <View key={index} style={style.line_item}>
                                    <Text style={style.line_item_text}>{item.name} x {item.quantity} £{item.total}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={style.section}>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionLabel}>Shipping</Text>
                    </View>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionParagraph}>{shipping.first_name} {shipping.last_name} {shipping.company}</Text>
                    </View>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionParagraph}>{shipping.address_1} {shipping.address_2} {shipping.city} {shipping.state} {shipping.postcode} {shipping.country}</Text>
                    </View>
                </View>
                <View style={style.section}>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionLabel}>Billing</Text>
                    </View>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionParagraph}>{billing.first_name} {billing.last_name} {billing.company}</Text>
                    </View>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionParagraph}>{billing.address_1} {billing.address_2} {billing.city} {billing.state} {billing.postcode} {billing.country}</Text>
                    </View>
                    <View style={style.sectionRow}>
                        <Text style={style.sectionParagraph}>{billing.email}</Text>
                        <Text style={style.sectionParagraph}>{billing.phone}</Text>
                    </View>
                </View>
            </View>
        );
    }


    renderOrders(data) {
        return data.map((item, index) => {
            return <TouchableOpacity key={index} style={Styles.item} onPress={() => { this.orderDetails(item) }}>
                <View style={Styles.left}>
                    <Text style={Styles.order_no}>Order No SX{item.id}</Text>
                    <View style={Styles.dateItems}>
                        <Text style={Styles.date}>{item.date_created}</Text>
                        <View style={Styles.sep}></View>
                        <Text style={Styles.items}>{item.line_items.length} items</Text>
                    </View>
                </View>
                <View style={Styles.right}>
                    <View style={[Styles.status,
                    item.status == 'pending' ? Styles.pending :
                        item.status == 'processing' ? Styles.processing :
                            item.status == 'on-hold' ? Styles.onhold :
                                item.status == 'completed' ? Styles.completed :
                                    item.status == 'cancelled' ? Styles.cancelled :
                                        Styles.refunded
                    ]}>
                        <Text style={Styles.status_text}>{item.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        })
    }
}

OrderDetails.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerLeft: <BackButton navigation={navigation} />,
    headerTitleStyle: Theme.headerTitleStyle,
    title: 'Order Details',
    headerRight: (<View></View>)
})

function mapStateToProps(state) {
    return {
        orders: state.orders,
        currentCustomer: state.currentCustomer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        OrderAction: bindActionCreators(OrderAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);