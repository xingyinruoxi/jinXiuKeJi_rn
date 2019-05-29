import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default function () {
    return (
        <TouchableOpacity>
            <LinearGradient
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={['#fd6b7d', '#ef2f46']}
                style={styles.btnSubmit}>
                <Text style={styles.btnText}>
                    登录
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnSubmit: {
        // backgroundColor:'#ef2f46',
        width: '100%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25
    },
    btnText: {
        color: '#fff',
        fontSize: 18
    },
})