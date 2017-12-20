import _ from 'lodash'
import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import DeckItem from './components/deckItem'
import PropTypes from 'prop-types'
import { receiveDecks } from './../../actions/deck_actions'
import {colors} from './../../utils/colors'
class HomeScreen extends Component {
    componentDidMount() {
        this.props.receiveDecks();
    }
    _keyExtractor = (item, index) => {
        return item
    };
    _renderItem = ({ item }) => {
        const { decks, navigation } = this.props
        const deck = decks[item]

        return (
            <DeckItem deck={deck} viewDeckDetail={() => navigation.navigate('DeckDetail', { deck: deck })} />
        );
    }
    render() {
        const { decks } = this.props
        return (
            <View style={styles.container}>
                <FlatList data={Object.keys(decks)}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}>
                </FlatList>
            </View>
        )
    }
}

const mapStateToProps = ({ decks }) => {
    return {
        decks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        receiveDecks: () => dispatch(receiveDecks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}