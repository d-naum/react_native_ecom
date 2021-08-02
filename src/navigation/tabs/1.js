import React from 'react'
import { Image, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

const tabLabel = 'Shop'
const imageTint = require('../../assets/images/ic_home_active.png')
const image = require('../../assets/images/ic_home.png')
const imageStyle = { width: 22, height: 20 }

import HomeScreen from '../../views/home/home'
// import CategoryScreen from '../../views/category/home'
import ProductScreen from '../../views/product/home'
import ProductReviewsScreen from '../../views/product/reviews'
import AddReviewScreen from '../../views/product/add-review'
import SearchScreen from '../../views/search/home'
import CategoryProducts from '../../views/category/category-products'

import LoginScreen from '../../views/login/home'
import RegisterScreen from '../../views/register/home'

const Shop = createStackNavigator(
    {
        HomeScreen,
        CategoryProducts,
        LoginScreen,
        RegisterScreen,
    }
)

const Stacks = createStackNavigator(
    {
        Shop,
        ProductScreen,
        ProductReviewsScreen,
        AddReviewScreen,
        SearchScreen,
    },
    {
        headerMode: 'none',
        mode: 'modal',
        cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
        },
        // tabBarOptions: {
        //     tabBarVisible: false
        // },
        tabBar: {
            visible: false
        }
    }
)

export default {
    screen: Stacks,
    navigationOptions: () => {
        return {
            tabBarLabel: tabLabel,
            tabBarIcon: ({ focused }) => (
                <Image resizeMode={'contain'} style={imageStyle} source={focused ? imageTint : image} />
            ),
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                navigation.navigate('HomeScreen');
                defaultHandler()
            },

        };
    },
}