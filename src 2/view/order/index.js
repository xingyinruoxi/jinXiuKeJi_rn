import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    ScrollView,
    Text
} from 'react-native';
import Card from './../../component/card';

export default class extends Component {
    static navigationOptions = {
        headerTitle:'我的订单(29)'
    };
    render() {
        let {navigation}=this.props;
        return (
            <ScrollView>
                <Text>ivhio</Text>
               {/* <Card  {...{navigation}}/>
                <Card  {...{navigation}}/>
                <Card  {...{navigation}}/>*/}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
});
