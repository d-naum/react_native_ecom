// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

type Props = {
    ratingObj: {
        ratings: number;
        views: number;
    }
};

export default class StarRating extends Component<Props> {
    render() {
        // Recieve the ratings object from the props
        let ratingObj = this.props.ratingObj;

        // This array will contain our star tags. We will include this
        // array between the view tag.
        let stars = [];
        // Loop 5 times
        for (var i = 1; i <= 5; i++) {
            // set the path to filled stars
            let path = require('../assets/images/star-filled.png');
            // If ratings is lower, set the path to unfilled stars
            if (i > ratingObj.ratings) {
                path = require('../assets/images/star-unfilled.png');
            }

            stars.push((<Image style={styles.image} source={path} key={i} />));
        }

        return (
            <View style={styles.container}>
                {stars}
                {ratingObj.views ? <Text style={styles.text}>({ratingObj.views})</Text> : null}
			</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    image: {
        width: 14,
        height: 14
    },
    text: {
        fontSize: 12,
        marginLeft: 10,
        marginRight: 10
    }
});