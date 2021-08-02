import { StyleSheet, Platform, Dimensions } from 'react-native'
import Theme from '../../theme/style'
const width = Dimensions.get('window').width

export default StyleSheet.create({

    searchView: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    searchBar: {
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    searchBarInner: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Theme.primaryColor,
        borderBottomWidth: 1,
        marginLeft: 5,
        flex: 0.9
    },
    searchText: {
        fontFamily: Theme.regularFont,
        fontSize: 15,
        color: Theme.primaryColor,
        lineHeight: 16,
        height: 40,
        paddingHorizontal: 20,
        flex: 1
    },
    searchIcon: {
        width: 16,
        height: 16
    },
    closeIcon:{
        width: 16,
        height: 16
    },
    closeButton:{
        marginRight: 5
    },
    // listItemButton: {
    //     padding: 20,
    //     justifyContent: 'space-between',
    //     flexDirection: 'row',
    //     borderBottomColor: '#F8F8F8',
    //     borderBottomWidth: 1
    // },
    // listItemText: {
    //     fontFamily: Theme.regularFont,
    //     fontSize: 16,
    //     color: Theme.primaryColor,
    //     lineHeight: 19,
    //     width: 220,
    //     letterSpacing: 1,
    // },
    // listItemTextRight: {
    //     color: '#9B9B9B',
    //     fontFamily: Theme.regularFont,
    //     fontSize: 16,
    //     lineHeight: 19,
    //     letterSpacing: 1
    // },
    // listItemImage:{
    //     width: 90,
    //     height: 90,
    //     borderWidth: 1,
    //     marginRight: 15,
    //     borderColor: 'white',
    //     borderRadius: 4
    // }

    image: {
        width: 150/2,
        height: 184/2,
        borderRadius: 4,
        marginBottom: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E6E8EC'
    },
    item: {
        paddingLeft: 15,
        flexDirection: 'row'
    },
    prices: {
        flexDirection: 'row'
    },
    item_inner:{
        
    },
    price: {
        fontFamily: Theme.boldFont,
        fontSize: 15,
        color: Theme.primaryColor,
        letterSpacing: 0.5,
        fontWeight: '600'

    },
    price_discounted: {
        fontFamily: Theme.boldFont,
        fontSize: 15,
        color: Theme.primaryColor,
        paddingRight: 5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        opacity: 1,
        letterSpacing: 0.5,
        display: 'none'
    },
    name: {
        fontFamily: Theme.mediumFont,
        fontSize: 15,
        letterSpacing: 1,
        marginTop: 8,
        marginBottom: 10,
        color: Theme.primaryColor,
        width: 235,
        fontWeight: '500'
    },


})