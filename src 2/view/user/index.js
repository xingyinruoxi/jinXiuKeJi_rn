import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import avatar from './img/avatar.png'
import ListLink from './container/listLinks';

export default class extends Component {
    render() {
        let {navigation} = this.props;
        return (
            <View style={styles.user}>
                <Image source={avatar} style={{width: '100%'}}/>
                <View style={styles.phoneWrap}>
                    <Text style={styles.phone}>183****4535</Text>
                </View>
                <View style={styles.account}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Order')}
                        style={styles.itemAccount}
                    >
                        <Text style={styles.num}>20</Text>
                        <Text style={styles.summary}>机型订单</Text>
                    </TouchableOpacity>
                    <View style={styles.line}>

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('暂未开通，敬请期待。')
                        }}
                        style={styles.itemAccount}
                    >
                        <Text style={styles.num,{color:'#ddd'}}>0</Text>
                        <Text style={styles.summary,{color:'#ddd'}}>配件订单</Text>
                    </TouchableOpacity>
                </View>
                <ListLink {...{navigation}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    user: {
        backgroundColor: '#fff',
        flex: 1
    },
    phoneWrap: {
        alignItems: 'center'
    },
    phone: {
        fontSize: 16,
        color: '#333',
        paddingTop: 8
    },
    account: {
        flexDirection: 'row',
        paddingVertical: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingBottom:0

    },
    itemAccount: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        width: 1,
        backgroundColor: '#eee',
        height: 40
    },
    num: {
        fontSize: 16,
        color: '#333'
    },
    summary: {
        fontSize: 16,
        color: '#333',
        paddingTop: 4
    }
});
