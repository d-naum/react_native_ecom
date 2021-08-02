import { StyleSheet, Platform, Dimensions } from 'react-native'
import Theme from '../../theme/style'
const width = Dimensions.get('window').width

export default StyleSheet.create({

    // --------------------------- OTHER OPTIONS WRAPPER - TEXT 
    otherOptions: {
        position: 'absolute',
        bottom: 0,
        width: width,
        alignItems: 'center',
    },
    otherOptionsText: {
        color: Theme.secondaryColor,
        fontFamily: Theme.lightFont,
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: 2,
        textAlign: 'center',
        fontWeight: '300',
        width: 230,
    },
    signInOptions: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    signInOptionButton: {
        width: 80,
        flexDirection: 'row',
    },

    container2:{
        paddingHorizontal: 15,
        paddingTop: 40, 

    },  

    // --------------------------- FACEBOOK & TWITTER image
    facebookIcon: {
        width: 80,
        height: 80,
    },
    twitterIcon: {
        width: 80,
        height: 80
    },

    PageTitleView:{
        //paddingLeft: 20,
        paddingTop: 0,
        paddingBottom: 40,
        alignItems: 'center'
    },
    PageTitle:{
        color: Theme.secondaryColor,
        fontFamily: Theme.lightFont,
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: 0,
    },
    Logo:{
        width: 100,
        height: 46
    },
    LoginPageFakeTabContainer:{
        flexDirection: 'row',
        paddingLeft: 25,
    },
    LoginPageFakeTab: {flex: 0.5, paddingBottom: 10},
    LoginPageFakeTabText: {
        color: Theme.primaryColor,
        fontFamily: Theme.regularFont,
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: 0,
    },
    LoginPageFakeTabCurrent: {
        marginRight: 15,
        borderBottomColor: Theme.primaryColor,
        borderBottomWidth: 2
    },
    LoginPageFakeTabTextCurrent: {},

})