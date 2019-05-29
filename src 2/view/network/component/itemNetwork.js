import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default function (props) {
    console.log(222, props)
    let {item: {manufacturerId, name, phone, saleAddr}} = props;
    return (
        <View style={styles.itemNetwork}>
            <Text style={styles.itemTitle}>{name}</Text>
            <Text style={styles.itemContent}>地址：{saleAddr}</Text>
            <TouchableOpacity style={styles.icoWrap}>
                <Image source={require('./img/telNetwork.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemNetwork: {
        marginTop: 10,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    itemTitle: {
        fontSize: 16,
        lineHeight: 30,
        color: '#333'
    },
    itemContent: {
        fontSize: 14,
        paddingBottom: 12,
        color: '#797979'
    },
    icoWrap: {
        alignItems: 'flex-end'
    }
});
