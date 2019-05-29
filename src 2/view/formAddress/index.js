import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import LinearGradient1 from 'react-native-linear-gradient'
export default class extends Component {
    render() {
        let {navigation}=this.props;
        return (
            <View>
                <View style={styles.itemInput}>
                    <Text style={styles.inputLabel}>
                        收货人：
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        autoFocus={true}
                        clearButtonMode={'while-editing'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'请输入姓名'}
                    />
                </View>
                <View style={styles.itemInput}>
                    <Text style={styles.inputLabel}>
                        手机号：
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        clearButtonMode={'while-editing'}
                        keyboardType={'numeric'}
                        maxLength={11}
                        placeholderTextColor={'#ccc'}
                        placeholder={'请输入收货人手机号'}
                    />
                </View>
                <View style={styles.itemInput}>
                    <Text style={styles.inputLabel}>
                        所在地区：
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        clearButtonMode={'while-editing'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'请输入所在地区'}
                    />
                    <Image source={require('./../../common/img/arrow.png')} style={{marginRight:6}}/>
                </View>
                <View style={styles.itemInput}>
                    <Text style={styles.inputLabel}>
                        详细地址：
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        clearButtonMode={'while-editing'}
                        placeholderTextColor={'#ccc'}
                        placeholder={'请输入详细地址'}
                    />
                </View>
                <TouchableOpacity
                    style={{marginHorizontal:15,marginTop:50}}
                    onPress={() => navigation.navigate('ListAddress')}
                >
                    <LinearGradient1
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        colors={['#fd6b7d', '#ef2f46']}
                        style={styles.btnSubmit}>
                        <Text
                            style={styles.btnText}
                        >
                            保存
                        </Text>

                    </LinearGradient1>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemInput: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        alignItems:'center'
    },
    inputLabel: {
        width: 74,
        color: '#333',
        // fontSize:14
    },
    input: {
        flex: 1,
        color: '#333',
        padding:0,
    },
    btnSubmit: {
        // backgroundColor:'#ef2f46',
        width: '100%',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
});
