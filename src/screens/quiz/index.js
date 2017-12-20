import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { colors } from './../../utils/colors'
import { clearLocalNotification, seLocaltNotification } from './../../utils/notificationHelper'

class QuizScreen extends Component {
    state = {
        currentStep: 0,
        flip: false,
        isQuizzing: true
    };

    constructor() {
        super()
        this.correctAnswerCount = 0
    }

    onClickCorrectAnswer = () => {
        this.correctAnswerCount++
        this.nextQuestion()
    }
    onClickIncorrectAnswer = () => {
        this.nextQuestion()
    }

    onClickRetry = () => {
        this.setState({
            currentStep: 0,
            flip: false,
            isQuizzing: true
        })
        this.correctAnswerCount = 0
    }

    onClickQuit = () => {
        this.props.navigation.goBack();
    }

    nextQuestion = () => {
        const { questions } = this.props.navigation.state.params.deck
        if (this.state.currentStep >= questions.length - 1) {
            clearLocalNotification()
                .then(seLocaltNotification)
            this.setState({
                isQuizzing: false
            })
        } else {
            this.setState(prevState => ({
                currentStep: prevState.currentStep + 1,
                flip: false
            }));
        }
    };

    onClickFlipCard = () => {
        this.setState({
            flip: !this.state.flip
        });
    }

    render() {
        const { questions } = this.props.navigation.state.params.deck
        if (this.state.isQuizzing) {
            return (
                <View style={styles.container}>
                    <View style={styles.step}>
                        <Text style={styles.stepText}>{this.state.currentStep + 1} / {questions.length}</Text>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>{this.state.flip ? questions[this.state.currentStep].question : questions[this.state.currentStep].answer}</Text>
                        <TouchableOpacity style={styles.flipButton} onPress={this.onClickFlipCard}>
                            <Text style={styles.buttonColor}> {this.state.flip ? 'Question' : 'Answer'} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.answerButtons}>
                        <TouchableOpacity style={styles.correctButton} onPress={this.onClickCorrectAnswer}>
                            <Text style={styles.buttonColor}> CORRECT </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.incorrectButton} onPress={this.onClickIncorrectAnswer}>
                            <Text style={styles.buttonColor}> INCORRECT </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.result}>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>Quiz Complete</Text>
                </View>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        You answered correct {this.correctAnswerCount} of {questions.length} questions
                  </Text>
                </View>
                <View style={styles.answerButtons}>
                    <TouchableOpacity style={styles.correctButton} onPress={this.onClickRetry}>
                        <Text style={styles.buttonColor}> Restart Quiz </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.incorrectButton} onPress={this.onClickQuit}>
                        <Text style={styles.buttonColor}> Back to Deck </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'space-between'
    },
    step: {
        flexDirection: 'row',
        flex: 1,
        alignContent: 'flex-start',
        margin: 10
    },
    stepText: {
        fontSize: 20,
    },
    questionContainer: {
        flex: 2,
        alignContent: 'center',
        alignItems: 'center'
    },
    questionText: {
        fontSize: 30,
        color: colors.blue
    },
    buttonColor: {
        fontSize: 25,
        color: colors.white
    },
    answerButtons: {
        flex: 1,
        alignItems: "center"
    },
    flipButton: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.blue,
    },
    correctButton: {
        alignItems: 'center',
        padding: 10,
        width: 200,
        marginBottom: 10, borderRadius: 5,
        backgroundColor: colors.green,
    },
    incorrectButton: {
        alignItems: 'center',
        padding: 10,
        width: 200,
        marginBottom: 10, borderRadius: 5,
        backgroundColor: colors.red
    },
    result: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
    }
})
export default connect()(QuizScreen)