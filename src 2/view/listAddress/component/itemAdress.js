import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import check from './../../../common/img/check.png'
import checkActive from './../../../common/img/checkActive.png'
export default function () {
    return (
        <View style={styles.itemAddress}>
            <View style={styles.addressText}>
                <Text style={styles.addressTitle}>周林&emsp;13521406387</Text>
                <Text  style={styles.addressDes}>北京市海滨区温阳路</Text>
            </View>
            <Image source={check}/>
        </View>
    );
}

const styles = StyleSheet.create({
    itemAddress:{
        backgroundColor:'#fff',
        paddingHorizontal:15,
        paddingVertical:15,
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        flexDirection:'row'
    },
    addressText:{
        flex:1
    },
    addressTitle:{
        color:'#333',
        paddingBottom:5
    },
    addressDes:{
        color:'#333',
        paddingBottom:5
    }
});
