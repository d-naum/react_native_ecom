import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import Theme from '../../theme/style';
import MenuButton from '../../theme/menuButton';
import styles from './style';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CurrentCustomer from '../../redux/actions/current-customer';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  nav(route, requireLogin) {
    const { currentCustomer, navigation } = this.props;
    const { customer } = currentCustomer;
    if (!customer && requireLogin === undefined) {
      navigation.navigate('LoginScreen', { backTo: 'ProfileScreen' });
    } else {
      navigation.navigate(route);
    }
  }

  logout() {
    this.props.CurrentCustomer.logout();
  }

  render() {
    const { currentCustomer } = this.props;
    const { customer } = currentCustomer;

    return (
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.userHeader}>
            <View style={styles.userHeaderLeft}>
              <Image
                source={require('../../assets/images/user.png')}
                resizeMode={'cover'}
                style={styles.userIcon}
              />
            </View>
            <View style={styles.userHeaderRight}>
              <Text style={styles.userName}>
                {customer
                  ? customer.first_name + ' ' + customer.last_name
                  : 'Guest'}
              </Text>
              {customer && (
                <Text style={styles.userNameBottom}>{customer.email}</Text>
              )}
              {!customer && (
                <TouchableOpacity onPress={() => this.nav('OrdersScreen')}>
                  <Text style={styles.userNameBottom}>
                    {'Log in to your account'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.buttons}>
            {/*
                            <TouchableOpacity style={styles.button}
                                onPress={() => this.nav('NotificationScreen')}>
                                <View style={styles.buttonLf}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/ic_notification.png')} style={styles.bicon1} />
                                    <Text style={styles.btext}>{'Notification'}</Text>
                                </View>
                                <View style={styles.buttonRg}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/ic_arrow_right.png')} style={styles.bicon} />
                                </View>
                            </TouchableOpacity>
                        */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.nav('OrdersScreen')}>
              <View style={styles.buttonLf}>
                <Image
                  resizeMode={'contain'}
                  source={require('../../assets/images/ic_order.png')}
                  style={styles.bicon1}
                />
                <Text style={styles.btext}>{'Orders'}</Text>
              </View>
              <View style={styles.buttonRg}>
                <Image
                  resizeMode={'contain'}
                  source={require('../../assets/images/ic_arrow_right.png')}
                  style={styles.bicon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => this.nav('AddressScreen')}>
              <View style={styles.buttonLf}>
                <Image
                  resizeMode={'contain'}
                  source={require('../../assets/images/ic_location.png')}
                  style={styles.bicon1}
                />
                <Text style={styles.btext}>{'Address'}</Text>
              </View>
              <View style={styles.buttonRg}>
                <Image
                  resizeMode={'contain'}
                  source={require('../../assets/images/ic_arrow_right.png')}
                  style={styles.bicon}
                />
              </View>
            </TouchableOpacity>

            {/*
              <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => this.nav('LanguageScreen', false)}>
                  <View style={styles.buttonLf}>
                    <Image
                      resizeMode={'contain'}
                      source={require('../../assets/images/ic_language.png')}
                      style={styles.bicon1}
                    />
                    <Text style={styles.btext}>{'Language'}</Text>
                  </View>
                  <View style={styles.buttonRg}>
                    <Image
                      resizeMode={'contain'}
                      source={require('../../assets/images/ic_arrow_right.png')}
                      style={styles.bicon}
                    />
                  </View>
              </TouchableOpacity>
            */}
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => this.nav('WhislistScreen', false)}>
              <View style={styles.buttonLf}>
                <Image
                  resizeMode={'contain'}
                  source={require('../../assets/images/ic_heart_white.png')}
                  style={styles.bicon1}
                />
                <Text style={styles.btext}>{'Wish List'}</Text>
              </View>
              <View style={styles.buttonRg}>
                <Image
                  resizeMode={'contain'}
                  source={require('../../assets/images/ic_arrow_right.png')}
                  style={styles.bicon}
                />
              </View>
            </TouchableOpacity>

            {customer ? (
              <TouchableOpacity
                style={[styles.button, styles.blast]}
                onPress={() => {
                  this.logout();
                }}>
                <View style={styles.buttonLf}>
                  <Image
                    resizeMode={'contain'}
                    source={require('../../assets/images/ic_logout.png')}
                    style={styles.bicon1}
                  />
                  <Text style={styles.btext}>{'Logout'}</Text>
                </View>
                <View style={styles.buttonRg}>
                  <Image
                    resizeMode={'contain'}
                    source={require('../../assets/images/ic_arrow_right.png')}
                    style={styles.bicon}
                  />
                </View>
              </TouchableOpacity>
            ) : (
                <TouchableOpacity
                  style={[styles.button, styles.blast]}
                  onPress={() => {
                    this.nav('WhislistScreen');
                  }}>
                  <View style={styles.buttonLf}>
                    <Image
                      resizeMode={'contain'}
                      source={require('../../assets/images/ic_logout.png')}
                      style={styles.bicon1}
                    />
                    <Text style={styles.btext}>{'Log In'}</Text>
                  </View>
                  <View style={styles.buttonRg}>
                    <Image
                      resizeMode={'contain'}
                      source={require('../../assets/images/ic_arrow_right.png')}
                      style={styles.bicon}
                    />
                  </View>
                </TouchableOpacity>
              )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

Account.navigationOptions = ({ navigation }) => ({
  headerStyle: Theme.headerStyle,
  headerLeft: <MenuButton navigation={navigation} />,
  headerRight: <View />,
  //         < TouchableOpacity style={{ marginRight: 15 }}
  // onPress = {() => navigation.navigate(logged ? 'SettingsProfileScreen' : 'LoginScreen')}>
  //     <Image source={require('../../assets/images/ic_setttings.png')} resizeMode={'contain'} />
  //     </TouchableOpacity >
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
)(Account);
