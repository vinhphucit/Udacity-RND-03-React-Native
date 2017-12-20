import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStatusBar from './src/commons/AppStatusBar'
import { HomeTabNavigator } from './src/commons/HomeTabNavigator'
import { AppStackNavigator } from './src/commons/AppStackNavigator'
import { Provider } from 'react-redux'
import configureStore from './src/utils/configureStore'
import { setLocalNotification } from './src/utils/notificationHelper'
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={configureStore}>
        <View style={styles.container}>
          <AppStatusBar />
          <AppStackNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
