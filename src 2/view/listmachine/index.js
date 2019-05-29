import React, {Component} from 'react';
import {
    ScrollView,
    FlatList
} from 'react-native';
import Card from './../../component/card';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {actions} from './reducer'

@connect(
    state => {
        return state
    },
    dispatch => bindActionCreators({...actions}, dispatch)
)
export default class extends Component {
    state={
        isLoading:false
    };
    componentWillMount() {
        let {getMachinesListAction} = this.props;
        getMachinesListAction();
    }

    render() {
        let {navigation, machine} = this.props;
        let {isLoading}=this.state;
        return (
            <FlatList
                data={machine.data}
                keyExtractor={(item) => item.tid}
                refreshing={isLoading}
                onRefresh={()=>{
                    this.setState({isLoading:true});
                    setTimeout(()=>{
                        this.setState({isLoading:false});
                    },1500)
                }}
                renderItem={({item}) => {
                    return (
                        <Card noFooter={true} noHeader={true} {...{navigation, item}}/>
                    )
                }}
            />
        )
    }
}

