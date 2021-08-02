import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ScrollView
} from "react-native";

import { SafeAreaView } from 'react-navigation'
import styles from './style'
import * as ProductAction from '../../redux/actions/products'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoryAccordion from "../../components/CategoryAccordion";

class Sidebar extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.ProductAction.getProductCategories()
    }

    navigate(nav) {
        const { navigation } = this.props
        navigation.navigate(nav)
    }

    render() {
        const { categories, currentCustomer } = this.props
        const { customer } = currentCustomer

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.navigationSquare}>
                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <View style={styles.logo}>
                            <Image resizeMode={'contain'}
                                source={require('../../assets/images/Logo.png')}
                                style={{ width: 80, height: 30 }} />
                        </View>
                        <View style={styles.mainNavigation}>
                            <TouchableOpacity style={[styles.navButton]} onPress={() => { this.navigate('HomeScreen') }}>
                                <Text style={styles.navButtonText}>{'Home'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.navButton]} onPress={() => { this.navigate('SearchScreen') }}>
                                <Text style={styles.navButtonText}>{'Search'}</Text>
                            </TouchableOpacity>
                            {customer ? <TouchableOpacity style={[styles.navButton]} onPress={() => { this.navigate('Profile') }}>
                                <Text style={styles.navButtonText}>{'My Account'}</Text>
                            </TouchableOpacity> :
                                <TouchableOpacity style={[styles.navButton]} onPress={() => { this.navigate('LoginScreen') }}>
                                    <Text style={[styles.navButtonText]}>{'Sign In'}</Text>
                                </TouchableOpacity>}
                        </View>
                        <View style={styles.seperator}>
                        </View>
                        <View style={styles.mainNavigation}>
                            {<CategoryAccordion data={categories.data} navigation={this.props.navigation} />}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }

}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        currentCustomer: state.currentCustomer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ProductAction: bindActionCreators(ProductAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

