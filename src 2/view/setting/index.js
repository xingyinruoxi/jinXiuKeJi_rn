import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
export default function ({navigation}) {
    return(
        <View>
            <View>
                <Image source={require('./img/banner.png')} style={{width:'100%'}}/>
                <Text style={styles.version}>V1.0.1</Text>
            </View>

            <View style={[styles.itemSetting,styles.marTop12]}>
                <Text style={styles.colorBlack}>版本更新</Text>
                <Text style={{color:'#666',fontSize:12}}>已是最新版本</Text>
            </View>
            <TouchableOpacity  style={styles.itemSetting}>
                <Text style={styles.colorBlack}>用户协议</Text>
                <Image source={require('./../../common/img/arrow.png')}/>
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.itemSetting,styles.marTop12]}>
                <Text style={styles.colorBlack}>版本更新</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    marTop12:{
        marginTop:12
    },
    colorBlack:{
        color:'#333'
    },
    version: {
        position:'absolute',
        bottom:'22%',
        width:'100%',
        textAlign:'center',
        color:'#666'
    },
    itemSetting:{
        height:48,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        borderBottomColor:'#eee',
        borderBottomWidth:1
    }
});
