import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import arrow from './../../../common/img/arrow.png'

export default function ({navigation}) {
    return (
        <View style={styles.listLinks}>
            <TouchableOpacity
                style={[styles.itemLink]}
                onPress={() => navigation.navigate('ListAddress')}
            >
                <View style={[styles.iconWrap]}>
                    <Image source={require('./img/edit.png')}/>
                </View>
                <Text style={styles.itemText}>收货地址管理</Text>
                <Image source={arrow}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itemLink}
            >
                <View style={styles.iconWrap}>
                    <Image source={require('./img/help.png')}/>
                </View>
                <Text style={styles.itemText}>常见问题</Text>
                <Image source={arrow}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itemLink}
                onPress={() => navigation.navigate('Setting')}
            >
                <View style={styles.iconWrap}>
                    <Image source={require('./img/settings.png')}/>
                </View>
                <Text style={styles.itemText}>系统设置</Text>
                <Image source={arrow}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    listLinks: {
        paddingLeft: 20
    },
    itemLink: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        height: 55,
        alignItems: 'center',
        paddingRight: 20,
        marginTop:10
    },
    itemText: {
        flex: 1,
        color: '#333',
        fontSize: 15
    },
    iconWrap: {
        marginRight: 10
    }
});
