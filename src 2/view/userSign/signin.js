import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import {add} from './../../store/reducers'
import base64 from 'base-64';
@connect(
    state => {
        return state
    },
    dispatch => bindActionCreators({add}, dispatch)
)
export default class extends Component {
    render() {
        let {navigation, add} = this.props;
        console.log(base64.encode(3456),'3456');
        return (
            <View style={styles.signIn}>
                <View style={styles.content}>
                    <TouchableOpacity
                        onPress={() => {
                            add()
                        }}
                    >
                        <Text
                            style={styles.title}
                        >锦绣租赁</Text>
                    </TouchableOpacity>
                    <Text style={styles.summary}>绣花机租赁产融服务平台</Text>
                    <View
                        style={styles.inputWrap}
                    >
                        <View style={styles.iconWrap}>
                            <Image source={require('./img/tel.png')}/>
                        </View>
                        <TextInput
                            style={styles.formInput}
                            autoCorrect={false}
                            underlineColorAndroid={'transparent'}
                            autoFocus={true}
                            keyboardType={'numeric'}
                            maxLength={11}
                            clearButtonMode={'while-editing'}
                            placeholderTextColor={'#ccc'}
                            placeholder={'请输入手机号'}/>
                    </View>
                    <View
                        style={styles.inputWrap}
                    >
                        <View style={styles.iconWrap}>
                            <Image source={require('./img/pwd.png')}/>
                        </View>
                        <TextInput
                            style={styles.formInput}
                            autoCapitalize={'none'}
                            underlineColorAndroid={'transparent'}
                            maxLength={20}
                            secureTextEntry={true}
                            clearButtonMode={'while-editing'}
                            autoCorrect={false}
                            placeholderTextColor={'#ccc'}
                            placeholder={'请输入6-20位字母与数字组合密码'}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <LinearGradient
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            colors={['#fd6b7d', '#ef2f46']}
                            style={styles.btnSubmit}>
                            <Text
                                style={styles.btnText}
                            >
                                登录
                            </Text>

                        </LinearGradient>
                    </TouchableOpacity>

                    <Text
                        style={styles.colorBlue}
                        onPress={() => navigation.navigate('SignUp')}
                    >忘记密码</Text>
                    <Text
                        onPress={()=>navigation.navigate('WebView')}
                    >
                        跳转到WebView
                    </Text>
                </View>
                <View style={styles.footerText}>
                    <Text>还没有账号，
                        <Text
                            style={styles.colorBlue}
                            onPress={() => navigation.navigate('SignUp')}
                        >立即注册</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

/*export default connect(
    state => {
        return {
            counter:state.counter
        };
    }
)(Signin);*/
const styles = StyleSheet.create({
    signIn: {
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        flex: 1
    },
    content: {
        flex: 1,
    },
    title: {
        color: '#333',
        fontSize: 32,
        lineHeight: 40,
        textAlign: 'center',
        marginTop: 90,
    },
    summary: {
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
        paddingBottom: 40,
    },
    iconWrap: {
        borderRightWidth: 1,
        borderRightColor: '#d3d3d3',
        paddingRight: 8,
        marginRight: 8,
    },
    inputWrap: {
        marginBottom: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        alignItems: 'center'
    },
    formInput: {
        padding: 0,
        fontSize: 14,
        height: 40,
        flex: 1,
    },
    btnSubmit: {
        // backgroundColor:'#ef2f46',
        width: '100%',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    colorBlue: {
        color: '#39f',
        textAlign: 'right'
    },
    footerText: {
        alignItems: 'center',
        marginBottom: 20
    }
});
