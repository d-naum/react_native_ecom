import { StyleSheet } from 'react-native'
import Theme from '../../../theme/style'

export default  StyleSheet.create({
    cartContainer: {
        flex: 1,  
        backgroundColor: Theme.backgroundColor, 
    },

    cartHeader: {
        backgroundColor: Theme.primaryColor,
        flexDirection: 'row',
        borderBottomWidth: 0.7,
        borderBottomColor: '#E8E8E8',
        height: 80,
        justifyContent: 'center',
        paddingTop: 15
    },
    cartHeaderLeft: { 
    },
    cartStatusText: {
        fontFamily: Theme.boldFont,
        fontSize: 17,
        lineHeight: 26,
        fontWeight: '700', 
        color: Theme.white, 
        letterSpacing: 1.67
    },
    cartStatusBottom:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cartStatusText2: {
        fontFamily: Theme.regularFont,
        fontSize: 14,
        lineHeight: 19,
        fontWeight: '400',
        color: '#C8C8C8',
        letterSpacing: 1
    },
    cartStatusText3: {
        fontFamily: Theme.boldFont,
        fontSize: 14,
        lineHeight: 19,
        fontWeight: '600',
        color: Theme.white,
        letterSpacing: 1
    },
    cartHeaderButtonWrapper: {
        width: '50%', 
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-end', 
    },
    cartHeaderButton: {
        width: 120,
        height: 30,
        backgroundColor: Theme.primaryMoreColored,
        alignSelf: 'flex-end',
        marginRight: 15
    },
    cartHeaderButtonText: {
        fontSize: 12
    },  

    cartProducts: {
        flex: 1
    },

});