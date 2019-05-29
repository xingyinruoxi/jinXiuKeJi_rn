import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {actions} from './reducer'
@connect(
    state => {
        return state
    },
    dispatch => bindActionCreators({...actions}, dispatch)
)
export default class  extends Component {
    componentWillMount() {
        let {navigation}=this.props;
        let {getMachinesDetailAction} = this.props;
        getMachinesDetailAction(navigation.state.params.tid);
        console.log(navigation.state.params.tid,'llll')
    }
    render() {
        let {navigation}=this.props;
        console.log('333',this.props);
        console.log(navigation.state.params, 'detail machine');
        return (
            <View>
                <Text>ertyuiop[0999999999</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({});
