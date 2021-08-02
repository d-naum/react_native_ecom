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

import BackButton from '../../theme/back'
import Theme from '../../theme/style'
import FormStyle from '../../theme/form'
import PageStyle from './style'
import { DropDownHolder } from '../../common/dropalert'
import Loading from '../../common/loading'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CustomerAction from '../../redux/actions/customer'
import * as CurrentCustomer from '../../redux/actions/current-customer'

class RegisterScreen extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            inputFocused: false,
            firstName: undefined,
            lastName: undefined,
            Email: undefined,
            Password: undefined,
            Username: undefined,
            loading: false
        }

        this._firstNameEntry = undefined;
        this._lastNameEntry = undefined;
        this._EmailEntry = undefined;
        this._PasswordEntry = undefined;
        this._UsernameEntry = undefined;
        this._PasswordEntry = undefined;
        this.keyboardBehavior = "padding";
    }
 
    componenDidMount(){
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    }

    showLoading(){
        this.setState({ loading: true })
    }

    hideLoading(){
        this.setState({ loading: false })
    }

    signUp() {
        const { navigation } = this.props
        const { firstName, lastName, Email, Username, Password } = this.state
        const formIsValid =
            this.validateAndSetAttribute(firstName, this._firstNameEntry) &
            this.validateAndSetAttribute(lastName, this._lastNameEntry) &
            this.validateAndSetAttribute(Email, this._EmailEntry) &
            this.validateAndSetAttribute(Username, this._UsernameEntry) &
            this.validateAndSetAttribute(Password, this._PasswordEntry);

        if (formIsValid === 1) {
            this.showLoading()
            CustomerAction.register(firstName, lastName, Email, Username, Password).then( (result) => {
                this.hideLoading()
                if (result === "success") { 
                    this.props.CurrentCustomer.setCurrentCustomer()
                    navigation.navigate("HomeScreen")
                } 
            }).catch( (error) => {
                this.hideLoading()
                DropDownHolder.alert('error', 'Registration Failed', error)
            })
        } else {
            DropDownHolder.alert('error', '', 'Please enter your registration informations.')
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

            <KeyboardAvoidingView behavior={this.keyboardBehavior} style={[FormStyle.container, PageStyle.container2, {paddingTop: 40 }]}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} alwaysBounceVertical={true}>
                    <View style={[FormStyle.formBody]}>

                        <View style={PageStyle.PageTitleView}>
                            <Image source={require('../../assets/images/SplashImage.png')}
                                resizeMode={'contain'}
                                style={PageStyle.Logo} />
                        </View>

                        <View style={[FormStyle.form, { paddingHorizontal: 10, paddingTop: 6}]}>

                            <View style={FormStyle.row}>
                                { /* First Name Input Form Group */}
                                <View style={FormStyle.col2}>
                                    <View style={[FormStyle.formGroup, FormStyle.formGrouplogin]}>
                                        <TextInput placeholderTextColor={Theme.secondaryColor}
                                            placeholder={'First Name'}
                                            autoCorrect={false}
                                            ref={(firstName) => this._firstNameEntry = firstName}
                                            onChangeText={(firstName) => this.setState({ firstName })}
                                            style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                                    </View>
                                </View>
                                { /* Last Name Input Form Group */}
                                <View style={FormStyle.col2}>
                                    <View style={[FormStyle.formGroup, FormStyle.formGrouplogin]}>
                                        <TextInput placeholderTextColor={Theme.secondaryColor}
                                            placeholder={'Last Name'}
                                            autoCorrect={false}
                                            ref={(lastName) => this._lastNameEntry = lastName}
                                            onChangeText={(lastName) => this.setState({ lastName })}
                                            style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                                    </View>
                                </View>
                            </View>

                            { /* Email Input Form Group */}
                            <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                                <TextInput placeholderTextColor={Theme.secondaryColor}
                                    placeholder={'Username'}
                                    autoCorrect={false}
                                    ref={(Username) => this._UsernameEntry = Username}
                                    onChangeText={(Username) => this.setState({ Username })}
                                    style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                            </View>

                            <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                                <TextInput placeholderTextColor={Theme.secondaryColor}
                                    placeholder={'Email'}
                                    autoCorrect={false}
                                    ref={(Email) => this._EmailEntry = Email}
                                    onChangeText={(Email) => this.setState({ Email })}
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
                            onPress={() => { this.signUp() }}>
                            <Text style={FormStyle.primaryButtonText}>{'SIGN UP'}</Text>
                            </TouchableOpacity>}
                        {loading && <View style={PageStyle.loadingWrap}>
                            <Loading />
                        </View>}
                    </View>
                </ScrollView>


                {inputFocused === false &&
                <View style={[PageStyle.otherOptions, { marginBottom: 20 }]}>
                    { /* Sign In Button */}
                    <TouchableOpacity style={FormStyle.secondaryButton} onPress={() => { this.props.navigation.goBack() }}>
                        <Text style={FormStyle.secondaryButtonText}>{'Already a member?'}</Text>
                        <Text style={FormStyle.secondaryButtonPrimaryText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                }
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

RegisterScreen.navigationOptions = ({ navigation }) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
