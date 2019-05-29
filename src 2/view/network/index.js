import React, {Component} from 'react';
import {
    View,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import ItemNetwork from './component/itemNetwork'
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
    componentDidMount() {
        let {getNetworkListAction} = this.props;
        setTimeout(function () {
            getNetworkListAction();
        },3000)
    }
    render() {
        console.log(this.props,'----');
        let {network:{data},navigation}=this.props;
        return (
            <View>
                <Image source={require('./img/banner.png')} style={{width: '100%'}}/>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.tid}
                    renderItem={({item}) => {
                        return (
                            <ItemNetwork {...{navigation, item}}/>
                        )
                    }}
                />
            </View>
        );
    }
}

