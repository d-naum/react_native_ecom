import React, { Component } from 'react'
import Theme from '../../theme/style'

export default {
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        // activeTintColor: Theme.secondaryColor,
        // inactiveTintColor: Theme.secondaryColor,
        labelStyle: {
            fontSize: 10,
            fontFamily: Theme.regularFont
        },
        style: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: 'white',
            // borderTopColor: Theme.secondaryColor,
            paddingTop: 0,
            height: 50
        },
    },
    navigationOptions: ({ navigation }) => {
        const { state } = navigation;

        let tabBarVisible = true;

        if ((state.routeName === "Category" || state.routeName === "Shop") && (state.index != 0 && state.routes.length > 1)) {
            tabBarVisible = false


            const _state = state.routes[0]
            if (_state.index != 0 && _state.routes.length > 1)
                tabBarVisible = false
        }
        else if (state.key === "Cart") {
            const _state = state.routes[0]
            if (_state.index != 0 && _state.routes.length > 1)
                tabBarVisible = false
        }
        else if (state.key === "Profile") {
            const _state = state.routes[0]
            if (_state.index != 0 && _state.routes.length > 1)
                tabBarVisible = false
        }

        return {
            tabBarVisible: tabBarVisible
        }

    }
}