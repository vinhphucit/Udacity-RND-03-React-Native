import React, { Component } from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import { Constants } from 'expo';
export default class AppStatusBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    backgroundColor="blue"
                    barStyle="light-content"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: Constants.statusBarHeight
    },
});
