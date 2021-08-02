import React from 'react'
import { Image, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Badge from '../../common/badge'

const tabLabel = 'profile'
const imageTint = require('../../assets/images/ic_profile_active.png')
const image = require('../../assets/images/ic_profile.png')
const imageStyle = { width: 22, height: 22 }

import ProfileScreen from '../../views/profile/home'
import NotificationScreen from '../../views/notification/home'
import OrdersScreen from '../../views/orders/home'
import OrderDetailScreen from '../../views/orders/details'
import AddressScreen from '../../views/address/home'
import LanguageScreen from '../../views/language/home'
import WhislistScreen from '../../views/whislist/home'
import ProductScreenInProfile from '../../views/product/home'
import SettingsProfileScreen from '../../views/settings/home'
import LoginScreen from '../../views/login/home'
import RegisterScreen from '../../views/register/home'

const Profile = createStackNavigator(
    {
        ProfileScreen,
        NotificationScreen,
        OrdersScreen,
        OrderDetailScreen,
        AddressScreen,
        LanguageScreen,
        WhislistScreen,
        SettingsProfileScreen,
        LoginScreen,
        RegisterScreen,
    }
)

const Stacks = createStackNavigator(
    {
        Profile, 
        ProductScreenInProfile
    },
    {
        headerMode: 'none',
        mode: 'modal',
        cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
        },
        tabBarOptions: {
            tabBarVisible: false
        }
    }
)

export default {
    screen: Stacks,
    navigationOptions: {
        tabBarLabel: tabLabel,
        tabBarIcon: ({ focused }) => (
            <View>
                <Image resizeMode={'contain'} style={imageStyle} source={focused ? imageTint : image} />
                <Badge number={'0'} />
            </View>
        )
    }
} 


// import CustomerSupportScreen from '../../views/customer-support/home'
// import ContactScreen from '../../views/customer-support/contact'
// import FeedbackScreen from '../../views/customer-support/feedback'
// import CustomerServicesScreen from '../../views/customer-support/services'
// import CustomerServiceScreen from '../../views/customer-support/service' 