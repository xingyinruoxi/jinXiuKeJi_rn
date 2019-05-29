import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default function () {
    return (
        <WebView
            source={{uri: 'https://github.com/facebook/react-native'}}
            style={{backgroundColor:'#ddd'}}
            startInLoadingState={true}
            onShouldStartLoadWithRequest={(res)=>{
                console.log('开始发送请求======>',res,res.loading);
                return true;
            }}
            onMessage={(e)=>{
                console.log(e.nativeEvent.data,'+++++++')
                console.log(e,'onMessage')
            }}
            renderError={()=>{
                return(
                    <Text>加载错误</Text>
                )
            }}
            thirdPartyCookiesEnabled={false}
            domStorageEnabled={false}
            renderLoading={(res)=>{
                console.log(res,'+++')
                return(
                    <Text>加载中。。。。</Text>
                )
            }}
        />
    );
}

const styles = StyleSheet.create({
    market: {
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        color: '#afafaf',
        fontSize: 18
    }
});
