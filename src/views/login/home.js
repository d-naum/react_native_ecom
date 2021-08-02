import React, { Component } from 'react'

import {
    View,
    Text,
    Keyboard,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'

import Theme from '../../theme/style'
import FormStyle from '../../theme/form'
import PageStyle from './style'
import Loading from '../../common/loading'
import BackButton from '../../theme/back'
import { DropDownHolder } from '../../common/dropalert'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CustomerAction from '../../redux/actions/customer'
import * as CurrentCustomer from '../../redux/actions/current-customer'

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputFocused: false,
            loginName: undefined,
            Password: undefined,
        }
        this._loginNameEntry = undefined;
        this._PasswordEntry = undefined;
        this.keyboardBehavior = "padding";
    }

    componenDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    }

    showLoading() {
        this.setState({ loading: true })
    }

    hideLoading() {
        this.setState({ loading: false })
    }

    signIn() {
        const { navigation } = this.props
        const { loginName, Password, loading } = this.state
        const backTo = navigation.getParam('backTo')

        if (!loading) {
            const formIsValid =
                this.validateAndSetAttribute(loginName, this._loginNameEntry) &
                this.validateAndSetAttribute(Password, this._PasswordEntry);

            if (formIsValid === 1) {
                this.showLoading()
                CustomerAction.login(loginName, Password).then((result) => {
                    this.hideLoading()
                    if (result === "success") {
                        this.props.CurrentCustomer.setCurrentCustomer()
                        navigation.navigate(backTo || 'HomeScreen')
                    }
                }).catch((error) => {
                    this.hideLoading()
                    DropDownHolder.alert('error', 'Login Failed', error)
                })
            } else {
                DropDownHolder.alert('error', '', 'Please enter your login informations.')
            }
        }
    }

    validateInput(input) {
        if (input === undefined)
            return false
        else if (input === '')
            return false
        else if (input.trim() === '')
            return false
        else if (input === 0)
            return false
        else
            return true
    }

    validateAndSetAttribute(value, attribute) {
        const valid = this.validateInput(value)
        const borderBottomColor = !valid ? 'red' : '#E8E8E8';
        attribute.setNativeProps({
            style: { borderBottomColor }
        });
        return valid
    }

    render() {

        const { loading, inputFocused } = this.state

        return (

            <KeyboardAvoidingView behavior={this.keyboardBehavior} style={[FormStyle.container, PageStyle.container2, { paddingTop: 40 }]}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} alwaysBounceVertical={true}>
                    <View style={[FormStyle.formBody]}>

                        <View style={PageStyle.PageTitleView}>
                            <Image source={require('../../assets/images/SplashImage.png')}
                                resizeMode={'contain'}
                                style={PageStyle.Logo} />
                        </View>

                        <View style={[FormStyle.form, { paddingHorizontal: 10, paddingTop: 6 }]}>

                            { /* Email Input Form Group */}
                            <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                                <TextInput placeholderTextColor={Theme.secondaryColor}
                                    placeholder={'Username or Email'}
                                    autoCorrect={false}
                                    ref={(loginName) => this._loginNameEntry = loginName}
                                    onChangeText={(loginName) => this.setState({ loginName })}
                                    style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                            </View>

                            { /* Password Input Form Group */}
                            <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                                <TextInput secureTextEntry={true}
                                    placeholderTextColor={Theme.secondaryColor}
                                    placeholder={'Password'}
                                    autoCorrect={false}
                                    ref={(Password) => this._PasswordEntry = Password}
                                    onChangeText={(Password) => this.setState({ Password })}
                                    style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                            </View>

                        </View>

                        {inputFocused === false &&
                            <TouchableOpacity style={[FormStyle.primaryButton, { marginBottom: 0, marginTop: 70 }]}
                                onPress={() => { this.signIn() }}>
                                <Text style={FormStyle.primaryButtonText}>{'SIGN IN'}</Text>
                            </TouchableOpacity>}

                        {loading && <View style={PageStyle.loadingWrap}>
                            <Loading />
                        </View>}
                    </View>
                </ScrollView>

                {inputFocused === false &&
                    <View style={PageStyle.otherOptions}>
                        <TouchableOpacity style={[FormStyle.button, { flexDirection: 'row' }]} onPress={() => { this.props.navigation.navigate("RegisterScreen") }}>
                            <Text style={[FormStyle.buttonText, { textAlign: 'center', fontWeight: '300', textDecorationLine: 'none', marginRight: 5 }]}>{'Not a member?'}</Text>
                            <Text style={[FormStyle.buttonText, { textAlign: 'center', fontWeight: '400', textDecorationLine: 'none' }]}>{'SIGN UP'}</Text>
                        </TouchableOpacity>
                    </View>}

            </KeyboardAvoidingView>



        )
    }

    keyboardDidShow = () => {
        this.setState({ inputFocused: true })
    }
    keyboardWillShow = () => {
        this.setState({ inputFocused: true })
    }
    keyboardWillHide = () => {
        this.setState({ inputFocused: false })
    }
    keyboardDidHide = () => {
        this.setState({ inputFocused: false })
    }

}

LoginScreen.navigationOptions = ({ navigation }) => ({
    title: '',//"SIGN UP",
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />
})


function mapStateToProps(state) {
    return {
        currentCustomer: state.currentCustomer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        CurrentCustomer: bindActionCreators(CurrentCustomer, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);






