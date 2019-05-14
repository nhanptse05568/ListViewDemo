import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
import database from './Home';

export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
            title: '',
            content: '',
        };
        news = database.ref('News');
    }


    // push a new news into database
    pressedAddButton() {
        news.push({
            imageURL: this.state.imageURL,
            title: this.state.title,
            content: this.state.content
        }, () => {
            alert('success');
            this.setState({
                imageUrl: '',
                title: '',
                content: '',
            });
        })
            .catch((error) => {
                alert('failed, reason: ' + error.message)
            });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput placeholder={'Enter image URL'} onChangeText={(value) => {
                    this.setState({imageURL: value})
                }}/>
                <TextInput placeholder={'Enter Title'} onChangeText={(value) => {
                    this.setState({title: value})
                }}/>
                <TextInput placeholder={'Enter Content'} onChangeText={(value) => {
                    this.setState({content: value})
                }}/>
                <Button title={'Add'} onPress={() => {
                    this.pressedAddButton()
                }}/>
            </View>
        );
    };
}