import React from 'react'
import { createStackNavigator } from 'react-navigation'
import CartListScreen from '../../views/cart/list'
import { Image } from 'react-native'

const imageTint = require('../../assets/images/search.png')
const image = require('../../assets/images/search.png')
const imageStyle = { width: 20, height: 20 }

const tabLabel = 'Search'
const Stacks = createStackNavigator(
    {
        CartListScreen,
    }
)
export default {
    screen: Stacks,
    navigationOptions: {
        tabBarLabel: tabLabel,
        tabBarIcon: ({ focused }) => (
            <Image resizeMode={'contain'} style={imageStyle} source={focused ? imageTint : image} />
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
            navigation.navigate('CartListScreen')
            defaultHandler()
        },
    }
}