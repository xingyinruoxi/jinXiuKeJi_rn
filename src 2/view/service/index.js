import React, {Component} from 'react';
import {
    ScrollView
} from 'react-native';
import ItemService from './../../component/card/itemService'

export default class extends Component {
    render() {
        return (
            <ScrollView >
                <ItemService/>
                <ItemService/>
                <ItemService/>
                <ItemService/>
                <ItemService/>
                <ItemService/>
            </ScrollView>
        );
    }
}
