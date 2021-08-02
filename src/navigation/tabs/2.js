import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

const tabLabel = 'Category'
const imageTint = require('../../assets/images/ic_home_active.png')
const image = require('../../assets/images/ic_home.png')
const imageStyle = { width: 24, height: 24 }

import CategoryScreen from '../../views/category/home'
import HomeScreen from '../../views/home/home'
import CategoryProductsScreen from '../../views/category/category-products'
import ProductScreenInCategoryScreen from '../../views/product/home'
import SearchScreen from '../../views/search/home'

// const Category = createStackNavigator({
//     CategoryScreen,
//     CategoryProductsScreen
// })
const Cat = createStackNavigator({
    HomeScreen,
    CategoryProductsScreen
})
const CategoryStack = createStackNavigator(
    {
        Cat,
        ProductScreenInCategoryScreen,
        SearchScreen,
    },
    // {
    //     CategoryScreen,
    //     ProductScreenInCategoryScreen
    // },
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
    screen: CategoryStack,
    navigationOptions: {
        tabBarLabel: tabLabel,
        tabBarIcon: ({ focused }) => (
            <Image resizeMode={'contain'} style={imageStyle} source={focused ? imageTint : image} />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }: any) => {
            navigation.navigate('HomeScreen')
            defaultHandler()
        },
    }
}