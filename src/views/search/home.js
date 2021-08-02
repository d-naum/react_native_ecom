import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    Keyboard,
    Image,
    TouchableOpacity,
    SafeAreaView
} from "react-native";

import * as Animatable from 'react-native-animatable'
import styles from './style'
import Loading from '../../common/loading'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/products'
class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchBarFocused: false,
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidShow', this.keyboardDidHide)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
        setTimeout(() => {
            this.textInput.focus()
        }, 500)
    }

    keyboardDidShow = () => {
        this.setState({ searchBarFocused: true })
    }

    keyboardWillShow = () => {
        this.setState({ searchBarFocused: true })
    }

    keyboardWillHide = () => {
        this.setState({ searchBarFocused: false })
    }

    keyboardDidHide = () => {
        this.setState({ searchBarFocused: false })
    }

    render() {

        const { searchBarFocused } = this.state
        const { navigation, productsSearch } = this.props

        return (
            <SafeAreaView style={styles.searchView}>
                <View style={styles.searchView}>
                    <View style={styles.searchBar}>
                        <Animatable.View animation="slideInRight" duration={500} style={styles.searchBarInner}>
                            <Image resizeMode={'contain'} style={styles.searchIcon} source={require('../../assets/images/ic_search.png')} />
                            <TextInput
                                keyboardType="default"
                                onKeyPress={this.handleKeyDown}
                                placeholder="Search product by name"
                                style={styles.searchText}
                                onChangeText={(searchTerm) => { this.setState({ searchTerm }) }}
                                ref={(item) => this.textInput = item}
                                returnKeyType='search'
                                autoFocus={true}
                                onSubmitEditing={() => { this.props.ProductAction.searchProducts(this.state.searchTerm) }}
                            />
                        </Animatable.View>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={styles.closeButton}>
                            <Image resizeMode={'contain'} style={styles.closeIcon} source={require('../../assets/images/ic_close.png')} />
                        </TouchableOpacity>
                    </View>

                    {productsSearch.loading && <Loading />}
                    {productsSearch.data &&
                        <FlatList
                            data={productsSearch.data}
                            style={{ backgroundColor: searchBarFocused ? 'rgba(0,0,0,0.1)' : 'white' }}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("ProductScreen", { product: item })} underlayColor="white">
                                    <Image style={styles.image}
                                        source={{ uri: item.images[0].src }} resizeMode={'cover'} />
                                    <View style={styles.item_inner}>
                                        <Text numberOfLines={3} style={styles.name}>{item.name}</Text>
                                        {item.regular_price != '' && item.price + '' !== item.regular_price + '' ?
                                            <View style={styles.prices}>
                                                <Text style={styles.price_discounted}>£{item.regular_price}</Text>
                                                <Text style={styles.price}>£{item.price}</Text>
                                            </View>
                                            : <Text style={styles.price}>£{item.price}</Text>
                                        }

                                    </View>
                                </TouchableOpacity>

                                /*      <TouchableOpacity onPress={() => { navigate('ProductScreen', { product: item }) }}
                                          style={styles.listItemButton}>
                                          {item.images[0].src && <Image resizeMode={'cover'} source={{ uri: item.images[0].src }} style={styles.listItemImage} />}
                                          <Text style={styles.listItemText} numberOfLines={4}>{item.name}</Text>
                                      </TouchableOpacity> */
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />}
                    {
                        //     productsSearch.data.length === 0 &&
                        // <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
                        //     <Text>{'No result found for your search.'}</Text>
                        // </View>
                    }

                </View>
            </SafeAreaView>
        );
    }
}


function mapStateToProps(state) {
    return {
        productsSearch: state.productsSearch
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ProductAction: bindActionCreators(ProductAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
