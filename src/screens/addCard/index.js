import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, Button } from 'react-native'
import { colors } from './../../utils/colors'
import { addNewCardToDeck } from './../../actions/deck_actions'
import {connect} from 'react-redux'
class AddCardScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Add Card To ${navigation.state.params.deck.title}`,
    });
    state = {
        question: "",
        answer: "",
    }

    onSubmitCard = () => {
        if (this.state.question === '') {
            alert('You must set a question')
            return
        }
        if (this.state.answer === '') {
            alert('You must set a answer')
            return
        }

        const { navigation } = this.props
        this.props.addNewCardToDeck(navigation.state.params.deck.title, this.state.question, this.state.answer)
        this.props.navigation.goBack();
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput placeholder={"Question"}
                    autoCorrect={false}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    onChangeText={question => this.setState({ question })}
                    value={this.state.question}
                    returnKeyType='next' />
                <TextInput placeholder={"Answer"}
                    autoCorrect={false}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    style={styles.input}
                    onChangeText={answer => this.setState({ answer })}
                    value={this.state.answer}
                    returnKeyType='done' />
                <Button style={styles.submitButton}
                    title="Submit"
                    onPress={this.onSubmitCard} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    addNewCardToDeck: (deckTitle, question, answer) => dispatch(addNewCardToDeck(deckTitle, question, answer))
});

export default connect(null, mapDispatchToProps)(AddCardScreen);