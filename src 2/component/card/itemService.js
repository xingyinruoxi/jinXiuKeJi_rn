import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import bg from './img/bg.png'

export default function () {
    return (
        <View style={[styles.card, {marginBottom: 10}]}>
            <View style={styles.cardHeader}>
                <Text style={styles.fon12}>订单号：20180226153831189</Text>
            </View>
            <View style={styles.cardContent}>
                <View style={styles.inner}>
                    <Text style={styles.title}>发电风扇</Text>
                    <View style={styles.labelWrap}>
                        <Text style={styles.label}>ertyui</Text>
                    </View>
                    <TouchableOpacity style={styles.butonWrap}>
                        <Image source={require('./img/telServer.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fon12: {
        fontSize: 12
    },
    colorRed: {
        color: '#ef2f46',
    },
    card: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        // marginBottom: 10,
        /*  borderRadius:10,
          marginHorizontal:15*/
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        height: 36,
        alignItems: 'center'
    },
    cardContent: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },

    imgWrap: {
        marginRight: 10,
        backgroundColor: '#f2f2f2',
        width: 120,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color: '#333',
        marginVertical: 6
    },
    labelWrap: {
        borderRadius: 3,
        backgroundColor: '#ccc',
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 1
    },
    label: {
        color: '#fff',
        fontSize: 12
    },
    subtitle: {
        fontSize: 13,
        color: '#333',
        paddingVertical: 10,
        marginTop: 6
    },
    desc: {
        fontSize: 12,
        color: '#666'
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 36,
        alignItems: 'center'
    },
    money: {
        color: '#ef2f46',
        fontSize: 15,
        fontWeight: '700'
    },
    inner: {
        flex: 1
    },
    butonWrap: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});
