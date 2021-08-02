import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  Platform,
} from 'react-native';

import Theme from '../../theme/style';
import BackButton from '../../theme/back';
import Styles from './style';
import FormStyle from '../../theme/form';
import ModalFilterPicker from '../../components/ModalFilterPicker/index';

import location from '../../common/location/location';
import {DropDownHolder} from '../../common/dropalert';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const countries = location.getCountries();
import * as CustomerAction from '../../redux/actions/customer';
import * as CurrentCustomer from '../../redux/actions/current-customer';
import styles from '../../components/ModalFilterPicker/styles';

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFocused: false,
      first_name: undefined,
      last_name: undefined,
      city: undefined,
      postcode: undefined,
      address_1: undefined,
      address_2: undefined,
      state: undefined,
      country: undefined,
      email: undefined,
      phone: undefined,
      citySelectVisible: false,
      countrySelectVisible: false,
      cityOptions: [],
      countryOptions: [],
      selectedCityName: 'City',
      selectedCountryName: 'Country',
      selectedShippingMethod: {id: 0},
    };

    this._first_nameEntry = undefined;
    this._last_nameEntry = undefined;
    this._cityEntry = undefined;
    this._postcodeEntry = undefined;
    this._address1Entry = undefined;
    this._address2Entry = undefined;
    this._stateEntry = undefined;
    this._countryEntry = undefined;
    this._emailEntry = undefined;
    this._phoneEntry = undefined;
    this.keyboardBehavior = 'padding';
  }

  componentDidMount() {
    const {currentCustomer} = this.props;
    const {customer} = currentCustomer;
    const address = customer.billing;

    if (address !== undefined) {
      this.setState({
        first_name: address.first_name,
        last_name: address.last_name,
        city: address.city,
        postcode: address.postcode,
        address_1: address.address_1,
        address_2: address.address_2,
        state: address.state,
        country: address.country,
        email: address.email,
        phone: address.phone,
        selectedCityName: address.city,
        selectedCountryName: address.country,
      });

      this._first_nameEntry.setNativeProps({text: address.first_name});
      this._last_nameEntry.setNativeProps({text: address.last_name});
      this._postcodeEntry.setNativeProps({text: address.postcode});
      this._address1Entry.setNativeProps({text: address.address_1});
      this._address2Entry.setNativeProps({text: address.address_2});
      this._stateEntry.setNativeProps({text: address.state});
      this._emailEntry.setNativeProps({text: address.email});
      this._phoneEntry.setNativeProps({text: address.phone});
    }

    if (Platform.OS == 'android') {
      this.keyboardBehavior = 'height';
    }

    this.keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardWillShow = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );
    this.keyboardDidHide = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );

    let keyValuePair = [];
    for (var i = 0; i < countries.length; i++) {
      keyValuePair.push({
        key: countries[i].filename || countries[i].name,
        label: countries[i].name,
      });
    }
    this.setState({
      countryOptions: keyValuePair,
    });
  }

  submit() {
    const {currentCustomer} = this.props;
    const {
      first_name,
      last_name,
      selectedCityName,
      selectedCountryName,
      postcode,
      address_1,
      address_2,
      state,
      email,
      phone,
    } = this.state;
    const formIsValid =
      this.validateAndSetAttribute(first_name, this._first_nameEntry) &
      this.validateAndSetAttribute(last_name, this._last_nameEntry) &
      this.validateAndSetAttribute(
        selectedCountryName === 'Country' ? '' : selectedCountryName,
        this._countryEntry,
      ) &
      this.validateAndSetAttribute(selectedCityName, this._cityEntry) &
      // this.validateAndSetAttribute(postcode, this._postcodeEntry) &
      this.validateAndSetAttribute(address_1, this._address1Entry) &
      this.validateAndSetAttribute(email, this._emailEntry) &
      this.validateAndSetAttribute(phone, this._phoneEntry);
    // this.validateAndSetAttribute(state, this._stateEntry);

    if (formIsValid === 1) {
      CustomerAction.updateUserAddress(currentCustomer.customer.id, {
        billing: {
          first_name: first_name,
          last_name: last_name,
          company: '',
          address_1: address_1,
          address_2: address_2 || '',
          city:
            selectedCityName == 'City' ? selectedCountryName : selectedCityName,
          state: state,
          postcode: postcode,
          country: selectedCountryName,
          email: email,
          phone: phone || '',
        },
        shipping: {
          first_name: first_name,
          last_name: last_name,
          company: '',
          address_1: address_1,
          address_2: address_2 || '',
          city:
            selectedCityName == 'City' ? selectedCountryName : selectedCityName,
          state: state,
          postcode: postcode,
          country: selectedCountryName,
        },
      }).then(() => {
        DropDownHolder.alert(
          'success',
          'Successfull',
          'Your address has been saved successfully.',
        );
        this.props.navigation.goBack();
        this.props.CurrentCustomer.setCurrentCustomer();
      });
    } else {
      DropDownHolder.alert('error', '', 'Please enter your address details.');
    }
  }

  render() {
    const {
      citySelectVisible,
      countrySelectVisible,
      cityOptions,
      countryOptions,
      selectedCountryName,
      selectedCityName,
      selectedShippingMethod,
    } = this.state;

    return (
      <KeyboardAvoidingView
        behavior={this.keyboardBehavior}
        style={Styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={true}>
          <View style={Styles.pageHeading}>
            <Text style={Styles.pageHeadingText}>
              {'    Your Delivery Address'}
            </Text>
          </View>
          <View style={FormStyle.row}>
            <View style={FormStyle.col2}>
              <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                <TextInput
                  placeholderTextColor={Theme.secondaryColor}
                  placeholder={'First Name'}
                  autoCorrect={false}
                  maxLength={60}
                  onChangeText={first_name => this.setState({first_name})}
                  style={[FormStyle.input, FormStyle.inputWithoutIcon]}
                  ref={ref => (this._first_nameEntry = ref)}
                />
              </View>
            </View>
            <View style={FormStyle.col2}>
              <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                <TextInput
                  placeholderTextColor={Theme.secondaryColor}
                  placeholder={'Last Name'}
                  autoCorrect={false}
                  ref={ref => (this._last_nameEntry = ref)}
                  maxLength={60}
                  onChangeText={last_name => this.setState({last_name})}
                  style={[FormStyle.input, FormStyle.inputWithoutIcon]}
                />
              </View>
            </View>
          </View>
          <View style={FormStyle.row}>
            <View style={FormStyle.col2}>
              <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                <TouchableOpacity
                  style={FormStyle.dropdownButton}
                  ref={ref => (this._countryEntry = ref)}
                  onPress={() => {
                    this.countryOnShow();
                  }}>
                  <Text
                    style={[
                      FormStyle.dropdownButtonText,
                      selectedCountryName == 'Country'
                        ? {color: Theme.secondaryColor}
                        : {},
                    ]}>
                    {selectedCountryName}
                  </Text>
                  <Image
                    style={FormStyle.dropdownButtonImage}
                    source={require('../../assets/images/ic_down.png')}
                    resizeMode={'cover'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={FormStyle.col2}>
              <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                <TouchableOpacity
                  style={FormStyle.dropdownButton}
                  ref={ref => (this._cityEntry = ref)}
                  onPress={() => {
                    this.cityOnShow();
                  }}>
                  <Text
                    style={[
                      FormStyle.dropdownButtonText,
                      selectedCityName == 'City'
                        ? {color: Theme.secondaryColor}
                        : {},
                    ]}>
                    {selectedCityName}
                  </Text>
                  <Image
                    style={FormStyle.dropdownButtonImage}
                    source={require('../../assets/images/ic_down.png')}
                    resizeMode={'cover'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
            <TextInput
              placeholderTextColor={Theme.secondaryColor}
              placeholder={'Address Line 1'}
              autoCorrect={false}
              ref={ref => (this._address1Entry = ref)}
              maxLength={160}
              onChangeText={address_1 => this.setState({address_1})}
              style={[FormStyle.input, FormStyle.inputWithoutIcon]}
            />
          </View>
          <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
            <TextInput
              placeholderTextColor={Theme.secondaryColor}
              placeholder={'Address Line 2'}
              autoCorrect={false}
              ref={ref => (this._address2Entry = ref)}
              maxLength={160}
              onChangeText={address_2 => this.setState({address_2})}
              style={[FormStyle.input, FormStyle.inputWithoutIcon]}
            />
          </View>
          <View style={FormStyle.row}>
            <View style={FormStyle.col2}>
              <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                <TextInput
                  placeholderTextColor={Theme.secondaryColor}
                  placeholder={'State / Province'}
                  autoCorrect={false}
                  ref={ref => (this._stateEntry = ref)}
                  maxLength={60}
                  onChangeText={state => this.setState({state})}
                  style={[FormStyle.input, FormStyle.inputWithoutIcon]}
                />
              </View>
            </View>
            <View style={FormStyle.col2}>
              <View
                style={[
                  FormStyle.formGroup,
                  FormStyle.formGroupLessPadd,
                  Styles.display,
                ]}>
                <TextInput
                  placeholderTextColor={Theme.secondaryColor}
                  placeholder={'Zip Code'}
                  autoCorrect={false}
                  ref={ref => (this._postcodeEntry = ref)}
                  maxLength={6}
                  onChangeText={postcode => this.setState({postcode})}
                  style={[FormStyle.input, FormStyle.inputWithoutIcon]}
                />
              </View>
            </View>
          </View>
          <View style={FormStyle.row}>
            <View style={FormStyle.col1}>
              <View
                style={[
                  FormStyle.formGroup,
                  FormStyle.formGroupLessPadd,
                  Styles.display,
                ]}>
                <TextInput
                  placeholderTextColor={Theme.secondaryColor}
                  placeholder={'Email'}
                  autoCorrect={false}
                  ref={ref => (this._emailEntry = ref)}
                  maxLength={200}
                  keyboardType={'email-address'}
                  onChangeText={email => this.setState({email})}
                  style={[FormStyle.input, FormStyle.inputWithoutIcon]}
                />
              </View>
            </View>
          </View>
          <View style={FormStyle.row}>
            <View style={FormStyle.col1}>
              <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                <TextInput
                  placeholderTextColor={Theme.secondaryColor}
                  placeholder={'Phone'}
                  autoCorrect={false}
                  keyboardType={'phone-pad'}
                  ref={ref => (this._phoneEntry = ref)}
                  maxLength={200}
                  onChangeText={phone => this.setState({phone})}
                  style={[FormStyle.input, FormStyle.inputWithoutIcon]}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={[
            this.state.inputFocused ? {display: 'none'} : {},
            FormStyle.bottomButton,
          ]}>
          <TouchableOpacity
            style={FormStyle.submitButton}
            onPress={() => {
              this.submit();
            }}>
            <Text style={FormStyle.submitButtonText}>{'SAVE CHANGES'}</Text>
          </TouchableOpacity>
        </View>

        <ModalFilterPicker
          visible={countrySelectVisible}
          onSelect={v => {
            this.countryOnSelect(v);
          }}
          onCancel={() => {
            this.countryOnCancel();
          }}
          options={countryOptions}
          placeholderText={'Search Country...'}
          placeholderTextColor={Theme.secondaryColor}
          noResultsText={'No matches.'}
          cancelButtonText={'CLOSE'}
          cancelButtonStyle={{backgroundColor: 'transparent', marginTop: 20}}
          cancelButtonTextStyle={{
            fontFamily: Theme.regularFont,
            fontSize: 17,
            color: Theme.white,
            fontWeight: '500',
          }}
          optionTextStyle={{
            padding: 8,
            flex: 1,
            textAlign: 'left',
            fontFamily: Theme.regularFont,
            fontSize: 17,
            color: Theme.primaryColor,
            fontWeight: '500',
          }}
        />
        <ModalFilterPicker
          visible={citySelectVisible}
          onSelect={v => {
            this.cityOnSelect(v);
          }}
          onCancel={() => {
            this.cityOnCancel();
          }}
          options={cityOptions}
          placeholderText={'Search City...'}
          placeholderTextColor={Theme.secondaryColor}
          noResultsText={'No matches.'}
          cancelButtonText={'CLOSE'}
          cancelButtonStyle={{backgroundColor: 'transparent', marginTop: 20}}
          cancelButtonTextStyle={{
            fontFamily: Theme.regularFont,
            fontSize: 17,
            color: Theme.white,
            fontWeight: '500',
          }}
          optionTextStyle={{
            padding: 8,
            flex: 1,
            textAlign: 'left',
            fontFamily: Theme.regularFont,
            fontSize: 17,
            color: Theme.primaryColor,
            fontWeight: '500',
          }}
        />
      </KeyboardAvoidingView>
    );
  }

  validateInput(input) {
    if (input === undefined) return false;
    else if (input === '') return false;
    else if (input.trim() === '') return false;
    else if (input === 0) return false;
    else return true;
  }
  validateAndSetAttribute(value, attribute) {
    const valid = this.validateInput(value);
    const borderBottomColor = !valid ? 'red' : '#E8E8E8';
    attribute.setNativeProps({
      style: {borderBottomColor},
    });
    return valid;
  }
  countryOnSelect(key) {
    let label = '';
    for (var i = 0; i < countries.length; i++) {
      if (countries[i].filename == key) {
        label = countries[i].name;
        break;
      } else if (countries[i].name == key) {
        label = countries[i].name;
        break;
      }
    }

    var cities = location.getCities(key);
    let keyValuePair = [];
    if (cities.length > 0) {
      for (var j = 0; j < cities.length; j++) {
        keyValuePair.push({
          key: cities[j].name,
          label: cities[j].name,
        });
      }
    } else {
      this.setState({selectedCityName: 'City', city: 'City'});
    }

    this.setState({
      country: key,
      countrySelectVisible: false,
      selectedCountryName: label,
      cityOptions: keyValuePair,
    });
  }
  countryOnShow() {
    this.setState({
      countrySelectVisible: true,
    });
  }
  countryOnCancel = () => {
    this.setState({
      countrySelectVisible: false,
      // country: undefined,
      // selectedCountryName: 'Country',
      // cityOptions: []
    });
  };
  cityOnSelect(key) {
    this.setState({
      city: key,
      citySelectVisible: false,
      selectedCityName: key,
    });
  }
  cityOnShow() {
    this.setState({
      citySelectVisible: true,
    });
  }
  cityOnCancel = () => {
    this.setState({
      citySelectVisible: false,
      // city: undefined,
      // selectedCityName: 'City'
    });
  };
  keyboardDidShow = () => {
    this.setState({inputFocused: true});
  };
  keyboardWillShow = () => {
    this.setState({inputFocused: true});
  };
  keyboardWillHide = () => {
    this.setState({inputFocused: false});
  };
  keyboardDidHide = () => {
    this.setState({inputFocused: false});
  };
}

Address.navigationOptions = ({navigation}) => ({
  headerStyle: Theme.headerStyle,
  headerTitleStyle: Theme.headerTitleStyle,
  title: 'ADDRESS',
  headerLeft: <BackButton navigation={navigation} />,
  headerRight: <View />,
});

function mapStateToProps(state) {
  return {
    currentCustomer: state.currentCustomer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    CurrentCustomer: bindActionCreators(CurrentCustomer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Address);
