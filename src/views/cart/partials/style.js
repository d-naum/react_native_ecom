import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import Theme from '../../../theme/style'

export default StyleSheet.create({
    productListItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        padding: 15
    },
    imageContainer: {
      
    },
 
    content: {
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 15
    },
 
    nameContainer: {
        
    },
    priceContainer: {
        flexDirection: 'row',
        paddingTop: 5
    },

    editButton: { 
        position: 'absolute',
        right: 15,
        top: 20
    },

    Dropdown:{
        position: 'absolute',
        right: 15,
        top: 40

    },

    image: {
        width: 96,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#E6E8EC'
    },
    name: {
        color: Theme.primaryColor,
        fontSize: 15,
        letterSpacing: 0.44,
        fontWeight: '400',
        lineHeight: 22,
        fontFamily: Theme.regularFont,
        maxWidth: '85%',
        marginBottom: 10
    },
  
    discount: {
        textDecorationLine: 'line-through',
        color: '#999999',
        fontSize: 15,
        fontFamily: Theme.regularFont,
        marginRight: 10
    },
    price: {
        color: Theme.primaryColor,
        fontSize: 16,
        fontFamily: Theme.boldFont,
        fontWeight: '600',
        letterSpacing: 0.5,
        lineHeight: 19,
    },
 

    sizeText: {
        color: Theme.primaryColor,
        fontSize: 14,
        fontFamily: Theme.regularFont,
        fontWeight: '400',
        letterSpacing: 0.5,
        lineHeight: 17,
    },

    sep:{
        width: 6,
        height: 6,
        backgroundColor: '#CCCCCC', 
        transform: [{ rotate: '45deg' }]
    },

    productFeatures: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});