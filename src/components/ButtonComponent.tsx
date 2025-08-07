import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../commons/constants'

interface Props {
    texto: string;
    onPress: () => void;
}

export const ButtonComponent = ({ texto, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginLeft: 80,
        marginRight: 80,
        marginTop: 10,
    },
    text: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
    }
})