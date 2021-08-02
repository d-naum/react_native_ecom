import { StyleSheet } from 'react-native'
import Theme from '../../theme/style'

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainNavigation: {
        justifyContent: 'center',
        marginLeft: 15
    },
    navButton: {
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 15
    },
    navButtonText: {
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor,
        fontSize: 14,
        fontWeight: '500'
    },
    navButtonTextColored: {
        color: Theme.primaryColor,

    },
    logo: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20
    },
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    link: {
        flex: 0.3
    },
    linkImage: {
        width: 132 / 2,
        height: 132 / 2
    },
    footer: {
        paddingVertical: 20
    },
    seperator: {
        backgroundColor: '#E8e8e8',
        height: 1,
        marginLeft: 30,
        marginVertical: 30
    },
    row: {
        flexDirection: 'row',
    },
    navigationSquare: {
    },
    col: {
        flex: 0.5,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center'
    },
    squareButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    squareButtonText: {
        fontFamily: Theme.lightFont,
        fontSize: 15,
        color: Theme.primaryColor,
        textAlign: 'center'
    },
    squareButtonImage: {
        width: 25,
        height: 25,
        marginBottom: 5
    },
    navigationSquareBorderTop: {
        borderTopColor: '#585858',
        borderTopWidth: 0.4
    },
    navigationSquareBorderBottom: {
        borderBottomColor: '#585858',
        borderBottomWidth: 0.4
    },
    navigationSquareBorderRight: {
        borderRightColor: '#585858',
        borderRightWidth: 0.4
    },
    badge: {
        width: 15,
        height: 15,
        borderRadius: 15,
        borderColor: Theme.secondaryColor,
        borderWidth: 1,
        position: 'absolute',
        backgroundColor: Theme.primaryColor,
        top: -2,
        right: -8
    },
    badgeText: {
        fontFamily: Theme.boldFont,
        fontSize: 10,
        color: Theme.secondaryColor,
        textAlign: 'center'
    },
    menuSquare: {
        width: 10.5,
        height: 10.5,
        backgroundColor: Theme.secondaryColor,
        position: 'absolute',
        top: -6,
        transform: [{ rotate: '45deg' }]
    },
    menuSquareContainer: {
        alignItems: 'center'
    },
    footerTitle: {
        fontFamily: Theme.boldFont,
        color: '#7E7E7E',
        fontSize: 12,
        textTransform: 'uppercase',
        padding: 15,
        textAlign: 'center'
    },
});