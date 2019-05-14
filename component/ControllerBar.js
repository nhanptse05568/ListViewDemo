import React from 'react';
import {Component} from 'react';
import styles from "../css/style";
import {Item, Picker, TextInput, View} from "react-native";
import {connect} from "react-redux";
import {data} from "./Home";
import {changeTypeOfView, searchWithEmptyString, searchWithNonEmptyString} from '../redux/action/action';

class Controller extends Component {

    // change the perspective
    pickerSelectedValueChanged(value) {
        this.props.changeTypeOfView(value);
    }

    // search for news
    updateListBySearch(value) {
        if (value.trim() === '') {
            this.props.searchWithEmptyString(data);
        } else {
            this.props.searchWithNonEmptyString(value, data);
        }
    }

    render() {
        return (
            <View style={styles.controllerView}>
                <View style={{flex: 1}}>
                    <Picker
                        style={{flex: 1}}
                        onValueChange={(value) => {
                            this.pickerSelectedValueChanged(value);
                        }}
                        selectedValue={this.props.selectedPickerValue}>
                        <Item key={'row'} value={'row'} label={'row'}/>
                        <Item key={'grid'} value={'grid'} label={'grid'}/>
                    </Picker>
                </View>
                <View style={{flex: 5}}>
                    <TextInput
                        value={this.props.searchValue}
                        style={{flex: 1}}
                        placeholder={'Search'}
                        secureTextEntry={false}
                        onChangeText={(value) => {
                            this.updateListBySearch(value)
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default connect((state) => {
    return {
        selectedPickerValue: state.selectedPickerValue,
        searchValue: state.searchValue
    };
},{
    changeTypeOfView,
    searchWithEmptyString,
    searchWithNonEmptyString
})(Controller);
