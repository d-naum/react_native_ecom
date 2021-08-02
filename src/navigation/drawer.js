import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Sidebar from '../views/sidebar'
import TabsNavigation from './tabs'

const drawerWidth = 269

export default createDrawerNavigator(
    { TabsNavigation },
    {
        contentComponent: props => <Sidebar {...props} />,
        drawerWidth: drawerWidth,
        drawerBackgroundColor: 'transparent',
        contentOptions: {
            activeBackgroundColor: 'transparent', 
        }
    }
);

