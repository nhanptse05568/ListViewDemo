import React from 'react';
import {Component} from 'react';
import styles from "../css/style";
import {Image, Text, TouchableOpacity, View} from "react-native";

export default class OneGridData extends Component {

    pressedOnEachElement(value) {
        alert(value);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.pressedOnEachElement(this.props.data.data.title)
            }}>
                <View style={styles.eachGrid}>
                    <Image style={{flex: 1}} source={{uri: this.props.data.data.imageURL}}/>
                    <View style={styles.contentGrid}>
                        <Text style={styles.textContentGrid}>
                            {this.props.data.data.title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}