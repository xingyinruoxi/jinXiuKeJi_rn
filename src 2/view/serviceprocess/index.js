import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import checkIco from './img/check-circle.png'
export default function () {
    return (
        <View>
            <Image source={require('./img/banner.png')}/>
            <View style={styles.itemProcess}>
                <Image source={checkIco}/>
                <View style={styles.textWrap}>
                    <Text style={styles.time}>
                        2018.2.24
                    </Text>
                    <Text style={styles.stateTitle}>
                        已发货
                    </Text>
                </View>
            </View>
            <View style={styles.itemProcess}>
                <Image source={checkIco}/>
                <View style={styles.textWrap}>
                    <Text style={styles.time}>
                        2018.2.24
                    </Text>
                    <Text style={styles.stateTitle}>
                        已发货
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textWrap:{
        marginLeft:15
    },
    stateTitle:{
        color:'#000',
        fontSize:16
    },
    time:{
        color:'#666',
        fontSize:13,
        paddingBottom:5
    },
    itemProcess:{
        backgroundColor:'#fff',
        flexDirection:'row',
        marginHorizontal:12,
        marginTop:12,
        height:80,
        paddingHorizontal:20,
        alignItems:'center'
    }
});
