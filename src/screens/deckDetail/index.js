import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { colors } from './../../utils/colors'
class DeckDetailScreen extends Component {
    state = {
        deck: null
    };
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: `${state.params.title}`,
        };
    };
    componentDidMount() {
        this.setState({
            deck: this.props.decks[this.props.navigation.state.params.title]
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            deck: nextProps.decks[this.props.navigation.state.params.title]
        });
    }

    onClickAddNewCard = () => {
        const { navigation } = this.props
        navigation.navigate('AddCard', { deck: this.state.deck })

    }

    onClickStartQuiz = () => {
        if (!this.state.deck || !this.state.deck.questions || this.state.deck.questions.length === 0) {
            alert('You have to add at least a card to deck')
            return
        }
        const { navigation } = this.props
        navigation.navigate('Quiz', { deck: this.state.deck })
    }

    render() {
        const { deck } = this.state
        if (deck)
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
        else
            return <View />
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
    buttonColor: {
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