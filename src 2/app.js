import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import Navigator from './navigation'

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0)"
                    barStyle="dark-content"
                    translucent={true}
                />
                <Navigator/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    fon12: {
        fontSize: 12
    }
});
