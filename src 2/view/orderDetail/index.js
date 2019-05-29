import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Card from './../../component/card'

export default class extends Component {
    render() {
        let {navigation}=this.props;
        return (
            <ScrollView>
                <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                    colors={['#ddf4fa', '#fff']}
                    style={styles.orderProcess}
                >
                    <View style={styles.orderContent}>
                        <View style={styles.textWrap}>
                            <Text style={styles.stateText}>已发货</Text>
                            <Text style={styles.stateNumber}>
                                订单号：20180226153831189
                            </Text>
                        </View>
                        <View>
                            <Image source={require('./img/car.png')}/>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Serviceprocess')}
                        style={styles.orderFooter}
                        activeOpacity={0.8}>
                        <Text style={styles.btnText}>查看服务进度</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.addressInfo}>
                    <View style={styles.itemInfo}>
                        <Text style={[styles.colorGray, styles.labelWidth]}>收货人</Text>
                        <Text style={styles.colorBlack}>周林&emsp;13521407654</Text>
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={[styles.colorGray, styles.labelWidth]}>收货地址</Text>
                        <Text style={styles.colorBlack}>北京海淀区温阳路</Text>
                    </View>
                </View>
                <Card noHeader={true}/>
                <View style={[styles.itemPlan, {marginBottom: 10}]}>
                    <Text style={[styles.colorGray, styles.labelWidth]}>租赁方案</Text>
                    <Text style={styles.colorBlack}>第三方士大夫</Text>
                </View>
                <View style={[styles.itemPlan]}>
                    <Text style={[styles.colorGray, styles.labelWidth]}>代理商</Text>
                    <Text style={styles.colorBlack}>第三方士大夫</Text>
                </View>
                <TouchableOpacity style={styles.itemTel} activeOpacity={0.8}>
                    <Image source={require('./../../common/img/phone.png')}/>
                    <Text style={styles.telText}>联系代理商</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    telText: {
        color: '#49a0ec',
        paddingLeft: 8
    },
    itemTel: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        borderTopColor: '#eee',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    itemPlan: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    colorGray: {
        color: '#a2a2a2',
    },
    labelWidth: {
        width: 70
    },
    colorBlack: {
        color: '#333'
    },
    addressInfo: {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    itemInfo: {
        paddingVertical: 5,
        flexDirection: 'row'
    },
    orderProcess: {
        marginBottom: 14
    },
    orderContent: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    textWrap: {
        flex: 1,
        justifyContent: 'space-between'
    },
    orderFooter: {
        paddingVertical: 9,
        alignItems: 'center',
        borderTopColor: '#eee',
        borderTopWidth: 1
    },
    btnText: {
        color: '#49a0ec',
        fontSize: 12,
        fontWeight: '700'
    },
    stateText: {
        color: '#333',
        fontSize: 15,
        fontWeight: '700',
        paddingTop: 8
    },
    stateNumber: {
        color: '#333',
        fontSize: 13,
    }
});
