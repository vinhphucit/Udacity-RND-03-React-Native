import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { colors } from './../../../utils/colors'
export default class DeckItem extends Component {
    render() {
        const { deck, viewDeckDetail } = this.props
        return (
            <TouchableHighlight onPress={viewDeckDetail}>
                <View style={styles.cardView}>

                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.cardCount}>
                        {deck.questions.length} Cards
                    </Text>

                </View>
            </TouchableHighlight>

        )
    }
}
const styles = StyleSheet.create({
    cardView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        backgroundColor: colors.darkGrey
    },
    title: {
        fontSize: 30,
        color: colors.grey,
        marginTop: 5,
        marginBottom: 5
    },
    cardCount: {
        color: colors.grey,
        marginBottom: 10
    }
})

DeckItem.PropTypes = {
    deck: PropTypes.object.isRequired,
    viewDeckDetail: PropTypes.func.isRequired
}