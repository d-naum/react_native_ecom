import {Dimensions, StyleSheet, Platform} from 'react-native';
import Theme from '../../theme/style';
import isIphoneX from '../../common/iphonex';
import isIphone5 from '../../common/iphone5';

export default StyleSheet.create({
  scene: {
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
  },
  header: {
    ...Platform.select({
      android: {
        height: 65,
      },
      ios: {
        height: isIphoneX() ? 85 : 65,
      },
    }),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  close: {
    width: 100,
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 15,
  },
  closeImage: {
    width: 20,
    height: 16,
  },
  productImageContainer: {
    height: 460,
    width: '100%',
    // top: -45
  },
  productDetails: {
    //top: -45,
    paddingBottom: 200,
  },
  productImage: {
    width: '100%',
    height: 480,
  },
  productName: {
    flexDirection: 'row',
    padding: 15,
  },
  productNameTextWrap: {
    flex: 0.7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  productNameText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: Theme.mediumFont,
    color: Theme.primaryColor,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: 'right',
    letterSpacing: 0.5,
    fontFamily: Theme.boldFont,
    color: Theme.primaryColor,
  },
  price_discounted: {
    textAlign: 'right',
    fontFamily: Theme.boldFont,
    fontSize: 15,
    lineHeight: 24,
    color: Theme.primaryColor,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    opacity: 0.75,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  prices: {
    flexDirection: 'column',
    flex: 0.5,
    justifyContent: 'flex-start',
  },
  productShorDescription: {
    paddingHorizontal: 15,
    height: 50,
  },
  reviewStars: {
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: Theme.backgroundColor,
    ...Platform.select({
      android: {
        height: 80,
      },
      ios: {
        height: isIphoneX() ? 85 : 80,
      },
    }),
  },
  productTabs: {
    marginHorizontal: 0,
  },

  // TABS
  tabHeaders: {
    flexDirection: 'row',
  },
  tabHeader: {
    flex: 0.333334,
    backgroundColor: Theme.greyColor,
    padding: 15,
    borderWidth: 1,
    borderColor: Theme.primaryColor,
  },
  tabHeaderActive: {
    //backgroundColor: Theme.primaryColor,
    borderWidth: 0,
  },
  tabHeaderText: {
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: Theme.mediumFont,
    color: Theme.primaryColor,
  },
  textLeft: {textAlign: 'left'},
  textCenter: {textAlign: 'center'},
  textRight: {textAlign: 'right'},

  tabHeaderTextActive: {
    color: Theme.white,
  },

  tabContents: {
    marginTop: 15,
    padding: 15,
  },
  tabContentActive: {
    display: 'flex',
  },
  tabContent: {
    display: 'none',
  },

  productContent: {
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },

  otherDetailButton: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginLeft: 10,
    height: 40,
    marginTop: 20,
  },

  otherDetailButtonText: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0.5,
    fontFamily: Theme.regularFont,
    color: Theme.primaryColor,
    paddingLeft: 10,
    paddingTop: 9,
    height: 40,
  },
  otherDetailButtonImage: {
    marginTop: 0,
    height: 13,
  },

  productAtributesAndReviewsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productDescWrap: {
    marginTop: 15,
  },

  reviewsFullRow: {
    flex: 1,
    marginLeft: 0,
  },

  productActions: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 48,
  },
  productActionButton: {
    flex: 0.3334,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#e8e8e8',
  },
  likeImage: {
    width: 18,
    height: 16,
  },
  cartImage: {
    width: 20,
    height: 18,
  },
  shareImage: {
    width: 15,
    height: 18,
  },

  cartButton: {
    position: 'absolute',
    right: 8,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 100,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  cartIconBadged: {},
  cartIcon: {
    width: 22,
    height: 22,
  },
  badgeWrap: {
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: Theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -2,
    right: -8,
  },
  badgeText: {
    color: Theme.white,
    fontFamily: Theme.boldFont,
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});
