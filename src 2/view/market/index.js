import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function () {
    return (
        <View style={styles.market}>
            <Text style={styles.text}>暂未开通，敬请期待...</Text>
        </View>
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
