import React, { Component } from 'react'
import { View, Text, Easing, Animated } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import HomeTabNavigator from './HomeTabNavigator'
import HomeScreen from './../screens/home'
import DeckDetailScreen from './../screens/deckDetail'
import AddCardScreen from './../screens/addCard'
import QuizScreen from './../screens/quiz'
import { colors } from './../utils/colors'

export const AppStackNavigator = StackNavigator(
    {
        Home: {
            screen: HomeTabNavigator,
            path: 'home',
            navigationOptions: ({ navigation }) => ({
                title: 'Home',
            }),
        },
        DeckDetail: {
            screen: DeckDetailScreen,
            path: 'deckDetail'
        },
        AddCard: {
            screen: AddCardScreen,
            path: 'addCard'
        },
        Quiz: {
            screen: QuizScreen,
            path: 'quiz',
            navigationOptions: ({ navigation }) => ({
                title: 'Quiz',
            }),
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerTintColor: colors.orange,
            headerStyle: {
                backgroundColor: colors.darkBlue
            }
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
)