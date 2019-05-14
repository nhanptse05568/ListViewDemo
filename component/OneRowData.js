import React from 'react';
import {Component} from 'react';
import styles from "../css/style";
import {Image, Text, TouchableOpacity, View} from "react-native";


export default class OneRowData extends Component {

    pressedOnEachElement(value) {
        alert(value);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.pressedOnEachElement(this.props.data.data.title)
            }}>
                <View style={styles.eachRow}>
                    <View style={styles.imageContainerRow}>
                        <Image source={{uri: this.props.data.data.imageURL}} style={styles.imageRow}/>
                    </View>
                    <View style={styles.rightContentRow}>
                        <Text style={styles.titleRow}>
                            {this.props.data.data.title}
                        </Text>
                        <Text style={styles.contentRow}>
                            {this.props.data.data.content}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}