import React, { Component } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image
} from "react-native";

import Theme from '../../theme/style'
import BackButton from '../../theme/back'
import FormStyle from '../../theme/form'
const width = Dimensions.get("window").width
import isIphoneX from '../../common/iphonex'

class SettingsProfile extends Component {

    constructor(props) {
        super(props)
    }


    save() {

    }

    changeAvatar() {

    }

    render() {
        return (
            <View style={Styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                    <View style={Styles.cameraButtonContainer}>
                        <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd, Styles.cameraButtonView]}>
                            <Image source={require('../../assets/images/user.png')} style={Styles.profileImage} />
                            <TouchableOpacity onPress={() => { this.changeAvatar() }} style={Styles.cameraButton}>
                                <Image source={require('../../assets/images/ic_camera.png')} style={Styles.cameraImage} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                        <TextInput placeholderTextColor={Theme.secondaryColor} placeholder={'Fullname'} autoCorrect={false} style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                    </View>

                    <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                        <TextInput placeholderTextColor={Theme.secondaryColor} placeholder={'Birthday'} autoCorrect={false} style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                    </View>

                    <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                        <TextInput multiline placeholderTextColor={Theme.secondaryColor} placeholder={'Bio'} autoCorrect={false} style={[FormStyle.textarea, FormStyle.inputWithoutIcon]} />
                    </View>

                    {/*


                    <View style={FormStyle.row}>
                        <View style={FormStyle.col2}>
                            <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                                <TextInput placeholderTextColor={Theme.secondaryColor}
                                    placeholder={'First Name'}
                                    autoCorrect={false}
                                    style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                            </View>
                        </View>
                        <View style={FormStyle.col2}>
                            <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                                <TextInput placeholderTextColor={Theme.secondaryColor}
                                    placeholder={'Last Name'}
                                    autoCorrect={false}
                                    style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                            </View>
                        </View>
                    </View>

                    <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                        <TextInput placeholderTextColor={Theme.secondaryColor}
                            placeholder={'Address Line 1'}
                            autoCorrect={false}
                            style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                    </View>

                    <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                        <TextInput
                            placeholderTextColor={Theme.secondaryColor}
                            placeholder={'Address Line 2'}
                            autoCorrect={false}
                            style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                    </View>

                    <View style={FormStyle.row}>
                        <View style={FormStyle.col2}>
                            <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                                <TextInput placeholderTextColor={Theme.secondaryColor}
                                    placeholder={'City'}
                                    autoCorrect={false}
                                    style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                            </View>
                        </View>
                        <View style={FormStyle.col2}>
                            <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                                <TextInput placeholderTextColor={Theme.secondaryColor}
                                    placeholder={'State'}
                                    autoCorrect={false}
                                    style={[FormStyle.input, FormStyle.inputWithoutIcon]} />
                            </View>
                        </View>
                    </View>
                    
                    */}

                </ScrollView>

                <View style={Styles.saveAndContinue}>
                    <TouchableOpacity style={Styles.submitButton} onPress={() => { this.save() }}>
                        <Text style={Styles.submitButtonText}>{'SUBMIT'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

}

SettingsProfile.navigationOptions = ({ navigation }) => ({
    headerStyle: Theme.headerStyle,
    headerLeft: <BackButton navigation={navigation} />,
    headerTitleStyle: Theme.headerTitleStyle,
    title: 'SETTINGS PROFILE',
    headerRight: (<View></View>)

})

export default SettingsProfile

const Styles = StyleSheet.create({
    saveAndContinue: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        width: width - 40
    },
    submitButton: {
        borderRadius: 4,
        backgroundColor: Theme.primaryColor,
        height: isIphoneX() ? 80 : 50,
        justifyContent: isIphoneX() ? 'flex-start' : 'center',
        alignItems: 'center',
        paddingTop: isIphoneX() ? 20 : 0
    },
    submitButtonText: {
        fontSize: 16,
        fontFamily: Theme.mediumFont,
        fontWeight: '600',
        lineHeight: 19,
        letterSpacing: 0.5,
        color: Theme.white
    },
    container: {
        flex: 1,
        backgroundColor: Theme.backgroundColor,
        padding: 20
    },
    cameraButtonView: {
        width: 100,
    },
    cameraImage: {
        width: 32,
        height: 32
    },
    profileImage: {
        width: 80,
        height: 80
    },
    cameraButton: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cameraButtonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    
})