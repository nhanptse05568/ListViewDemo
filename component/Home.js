import React from 'react';
import {Component} from 'react';
import {View, ListView, Button} from 'react-native';
import firebase from '../api/api';
import Controller from "./ControllerBar";
import OneRowData from "./OneRowData";
import OneGridData from "./OneGridData";
import {connect} from 'react-redux';
import {updateListNoteFromServer} from '../redux/action/action';

export var data;

class Home extends Component {
    constructor(props) {
        super(props);
        data = [];
        database = firebase.database();
    }

    // get data from database, and refresh data if the data changed
    componentWillMount() {
        database.ref('News').on('value', (snap) => {
            data = [];
            snap.forEach((eachData) => {
                data.push({
                    key: eachData.key,
                    data: eachData.val(),
                });
            });
            this.props.updateListNoteFromServer(data);
        });
    }

    // one data in listview or gridview
    oneData(rowData) {
        if (this.props.selectedPickerValue === 'row') {
            return (
                <OneRowData data={rowData}/>
            );
        } else if (this.props.selectedPickerValue === 'grid') {
            return (
                <OneGridData data={rowData}/>
            );
        }
    }

    // the controller bar
    renderController() {
        return (
            <Controller/>
        );
    }

    //the listview
    renderListView() {
        if (this.props.selectedPickerValue === 'row') {
            return (
                <ListView
                    dataSource={this.props.dataSource}
                    renderRow={(rowData) => this.oneData(rowData)}
                />
            );
        } else if (this.props.selectedPickerValue === 'grid') {
            return (
                <ListView
                    dataSource={this.props.dataSource}
                    renderRow={(rowData) => this.oneData(rowData)}
                    contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
                    pageSize={data.length}
                />
            );
        }
    }

    // add screen to add a news
    pressedAddButton() {
        this.props.navigation.push('AddScreen');
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'green'}}>{this.renderController()}</View>
                <View style={{flex: 11}}>{this.renderListView()}</View>
                <View style={{flex: 1, backgroundColor: 'green'}}>
                    <Button title={'Add'} onPress={() => {
                        this.pressedAddButton()
                    }}/>
                </View>
            </View>
        );
    }
}

export default connect((state) => {
    return {
        dataSource: state.dataSource,
        selectedPickerValue: state.selectedPickerValue
    };
}, {
    updateListNoteFromServer,
})(Home);
