import React from "react";
import { 
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

const SearchButton = (props) => (
    <TouchableOpacity style={styles.button} 
            onPress={() => props.navigation.navigate('SearchScreen')}>
        <Image source={require('../assets/images/search.png')} resizeMode={'contain'}
            style={{ width: 16, height: 16 }} />
    </TouchableOpacity>
    )
export default SearchButton;

const styles = StyleSheet.create({
    button: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15 
    },
});