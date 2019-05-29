import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default function ({navigation}) {
    return (
        <View>
            <View style={styles.banner}>
                <Image source={require('./img/banner.png')} style={{width: '100%'}}/>
                <Text style={styles.desc}>绣花机租赁产融服务平台</Text>
            </View>
                <View style={styles.listMenu}>
                    <TouchableOpacity
                        style={styles.itemMenu}
                        onPress={() => navigation.navigate('ListMachine')}
                    >
                        <Image source={require('./img/iconRadio.png')}/>
                        <Text style={styles.itemText}>选机器</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.itemMenu}
                        onPress={() => navigation.navigate('Market')}
                    >
                        <Image source={require('./img/iconCheck.png')}/>
                        <Text style={styles.itemText}>买配件</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.itemMenu}
                        onPress={() => navigation.navigate('Service')}
                    >
                        <Image source={require('./img/iconSetting.png')}/>
                        <Text style={styles.itemText}>报维修</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.itemMenu}
                        onPress={() => navigation.navigate('Network')}
                    >
                        <Image source={require('./img/iconMap.png')}/>
                        <Text style={styles.itemText}>找网点</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        shadowColor: '#ddd',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .4,
        shadowRadius: 4,
    },
    desc: {
        position: 'absolute',
        left: 0,
        bottom: 10,
        width: '100%',
        fontSize: 12,
        textAlign: 'center',
        color: '#333'
    },
    listMenu: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingVertical: 20,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 0
    },
    itemMenu: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110,
        width: '46%',
        marginBottom: 20,
        shadowColor: '#ddd',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .8,
        shadowRadius: 6,
    },
    itemText: {
        paddingTop: 8,
        color: '#333',
        fontSize: 14
    }
});
