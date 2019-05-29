import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import ItemAddress from './component/itemAdress'
import FormAddress from "../formAddress";

export default class extends Component {
    render() {
        let {navigation}=this.props;
        return (
            <View style={styles.listAddress}>
                <View style={styles.scrollWrap}>
                    <ScrollView >
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                        <ItemAddress/>
                    </ScrollView>
                </View>
                <View style={styles.footerTextWrap}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('FormAddress')}
                    >
                        <Text style={styles.footText}>+ 新增收货地址</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listAddress:{
        flex:1
    },
    scrollWrap:{
        flex:1
    },
    footerTextWrap:{
        marginVertical:30,
        alignItems:'center'
    },
    footText:{
        color:'#49a0ec'
    }
});
