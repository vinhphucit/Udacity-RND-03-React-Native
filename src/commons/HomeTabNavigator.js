import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from './../screens/home'
import AddDeckScreen from './../screens/addDeck'
import { colors } from './../utils/colors'
import { Constants } from 'expo'
export default HomeTabNavigator = TabNavigator({
  Decks: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'DECKS',
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name='clone' size={30} color={tintColor} />
      )
    }
  },
  AddDeck: {
    screen: AddDeckScreen,
    navigationOptions: {
      title: 'NEW DECK',
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name='clone' size={30} color={tintColor} />
      )
    }
  }
},
  {
    animationEnabled: true,
    initialRouteName: 'Decks',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: colors.orange,
      style: {
        height: Constants.height,
        backgroundColor: colors.darkBlue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })
