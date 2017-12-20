import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { colors } from './../../utils/colors'
class DeckDetailScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: `${state.params.deck.title}`,
        };
    };

    onClickAddNewCard = () => {
        const { navigation } = this.props
        navigation.navigate('AddCard', { deck: navigation.state.params.deck })

    }

    onClickStartQuiz = () => {
        const { navigation } = this.props
        navigation.navigate('Quiz', { deck: navigation.state.params.deck })
    }

    render() {

        const { deck } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <View style={styles.deckInfo}>
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <Text style={styles.cardCount}>{deck.questions.length} cards</Text>
                </View>
                <View style={styles.deckButtons}>
                    <TouchableOpacity style={styles.button} onPress={this.onClickAddNewCard}>
                        <Text style={styles.buttonColor}> ADD CARD </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.onClickStartQuiz}>
                        <Text style={styles.buttonColor}> START QUIZ </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deckInfo: {
        flex: 1,
        padding: 5,
        alignItems: 'center'
    },
    deckTitle: {
        fontSize: 30,
        color: colors.blue,
        marginTop: 5,
        marginBottom: 5,
    },
    cardCount: {
        fontSize: 20,
        color: colors.blue,
        marginTop: 5,
        marginBottom: 5,
    },
    deckButtons: {
        alignItems: "center"
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.blue,
        
        padding: 10,
        width: 200,
        marginBottom: 10
    },
    buttonColor:{
        color: colors.white,
    }
})

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveDeckByName: (deckName) => dispatch(receiveDeckByName(deckName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetailScreen)