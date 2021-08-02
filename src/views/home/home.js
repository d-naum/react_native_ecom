import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from "react-native";
import Theme from '../../theme/style'
import TitleLogo from '../../theme/titleLogo'
import MenuButton from '../../theme/menuButton'
import SearchButton from '../../theme/searchButton'
import styles from './style'
import ProductList from '../../components/ProductList'
import fsManager from '../../common/fs-manager'
import CategoryBlock from './category-block'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/products'
import * as WhislistAction from '../../redux/actions/whislist'
import * as CurrentCustomer from '../../redux/actions/current-customer'

class HomeScreen extends Component {

    componentDidMount() {
        // this.props.ProductAction.getFeaturedProducts()
        // this.props .ProductAction.getPopularProducts()
        this.props.ProductAction.getRatingProducts()
        this.props.ProductAction.getProductCategories()
        this.props.CurrentCustomer.setCurrentCustomer()
        StatusBar.setHidden(false, 'slide');
        this.refreshWhislist()
    }

    async refreshWhislist() {
        let data = await fsManager.getWhislist()
        data = data || '[]'
        const wl = JSON.parse(data);
        for (var i = 0; i < wl.length; i++)
            this.props.WhislistAction.add(wl[i])
    }

    render() {
        const { navigation, productsFeatured, productsPopular, productsRating, categories } = this.props
        return (
            <View style={styles.container}>

                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior={'never'}>


                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior={'never'}>
                        {/*
                       <View style={styles.section}>
                        <View style={styles.sectionHead}>
                            <Text style={styles.sectionTitle}>{'FEATURED'}</Text>
                            <TouchableOpacity style={styles.seeMoreButton}>
                                <Text style={styles.seeMoreButtonText}>{'see more'}</Text>
                                <Image style={styles.seeMoreImage} resizeMode={'contain'} source={require('../../assets/images/ic_arrow_right.png')} />
                            </TouchableOpacity>
                        </View>
                        <ProductList horizontal navigation={navigation} data={productsFeatured.data} loading={productsFeatured.loading} />
                    </View>
                         <View style={styles.section}>
                        <View style={styles.sectionHead}>
                            <Text style={styles.sectionTitle}>{'POPULAR'}</Text>
                            <TouchableOpacity style={styles.seeMoreButton}>
                                <Text style={styles.seeMoreButtonText}>{'see more'}</Text>
                                <Image style={styles.seeMoreImage} resizeMode={'contain'} source={require('../../assets/images/ic_arrow_right.png')} />
                            </TouchableOpacity>
                        </View>
                        <ProductList horizontal navigation={navigation} data={productsPopular.data} loading={productsPopular.loading} />
                    </View>
                 */}


                        <View style={styles.section}>
                            <View style={styles.sectionHead}>
                                <Text style={styles.sectionTitle}>{'BEST SELLER'}</Text>
                                <TouchableOpacity style={styles.seeMoreButton}>
                                    {/* <Text style={styles.seeMoreButtonText}>{'see more'}</Text> */}
                                    <Image style={styles.seeMoreImage} resizeMode={'contain'} source={require('../../assets/images/ic_arrow_right.png')} />
                                </TouchableOpacity>
                            </View>
                            <ProductList horizontal navigation={navigation} data={productsRating.data} loading={productsRating.loading} />
                        </View>


                    </ScrollView>


                    <View style={styles.cartegoryBlocks}>

                        {categories.parents.map((item, index) => (
                            <CategoryBlock key={index} item={item} navigation={navigation} index={index} />
                        ))}


                    </View>

                </ScrollView>

            </View>
        )
    }
}

HomeScreen.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerTitle: <TitleLogo />,
    headerTitleStyle: Theme.headerTitleStyle,
    headerLeft: <MenuButton navigation={navigation} />,
    headerRight: <SearchButton navigation={navigation} />,

})

function mapStateToProps(state) {
    return {
        productsFeatured: state.productsFeatured,
        productsGrouped: state.productsGrouped,
        productsRating: state.productsRating,
        productsPopular: state.productsPopular,
        categories: state.categories,
        currentCustomer: state.currentCustomer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ProductAction: bindActionCreators(ProductAction, dispatch),
        WhislistAction: bindActionCreators(WhislistAction, dispatch),
        CurrentCustomer: bindActionCreators(CurrentCustomer, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);




{/*    <Text style={styles.sectionTitle}>Grouped Products</Text><ProductsView horizontal navigation={navigation} data={productsGrouped.data} loading={productsGrouped.loading} />*/ }