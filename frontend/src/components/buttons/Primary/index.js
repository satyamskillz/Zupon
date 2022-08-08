import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../../constants/colors';

/**
 * documentaion, 
 */

function PrimaryBtn(props) {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={[styles.button, { backgroundColor: colors[props.color] }]}
                onClick={props.onClick}
            >
                <Text
                    style={styles.text}
                >{props.title}</Text>
            </TouchableHighlight>
        </View>
    );
}

PrimaryBtn.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,

}

PrimaryBtn.defaultProps = {
    color: "primary"
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: "80%",
        marginVertical: 10,
    },
    container: {
        display: "flex",
        alignItems: "center",
    },
    text: {
        color: colors.black,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    }
})

export default PrimaryBtn;