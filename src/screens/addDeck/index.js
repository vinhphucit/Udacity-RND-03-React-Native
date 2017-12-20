import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Text, Button } from 'react-native'
import { PropTypes } from 'prop-types'
import { NavigationActions } from "react-navigation";
import { colors } from './../../utils/colors'
import { addNewDeck } from './../../actions/deck_actions'
class AddDeckScreen extends Component {
    state = {
        name: ''
    }
    constructor() {
        super()

    }

    onSubmitCard = () => {
        if (this.state.name === '') {
            alert('You must set a name for deck')
            return
        }

        this.props.addNewDeck(this.state.name)
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.question}>What is the title of your new deck?</Text>
                <TextInput placeholder={"Deck Title"}
                    autoCorrect={false}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    returnKeyType='done' />
                <Button style={styles.sabmitButton}
                    title="Create Deck"
                    onPress={this.onSubmitCard} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        paddingBottom: 30,
        alignItems: 'center'
    },
    question: {
        fontSize: 25,
        color: colors.grey,
        marginTop: 5,
        marginBottom: 5,
    },
    input: {
        fontSize: 20,
        borderRadius: 5,
        paddingVertical: 7.5,
        paddingHorizontal: 15,
        backgroundColor: colors.darkGrey,
        color: colors.grey,
        margin: 5,
        alignSelf: 'stretch'
    },
    submitButton: {
        alignSelf: 'center'
    },
})
const mapDispatchToProps = dispatch => ({
    addNewDeck: (deckName) => dispatch(addNewDeck(deckName))
});

export default connect(null, mapDispatchToProps)(AddDeckScreen)