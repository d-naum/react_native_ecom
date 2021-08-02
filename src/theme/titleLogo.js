import React, { Component } from "react";
import {
    Image,
    Text,
    View
} from "react-native";

const TitleLogo = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image resizeMode={'contain'}
            source={require('../assets/images/Logo.png')}
            style={{ width: 80, height: 30 }} />
    </View>
)

export default TitleLogo;
