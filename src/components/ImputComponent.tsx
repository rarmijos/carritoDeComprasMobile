import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { IMPUT_COLOR } from '../commons/constants'

export const ImputComponent = () => {
    return (
        <TextInput
            placeholder='Usuario'
            keyboardType='default'
            style={styles.imputText}
        />
    )
}

const styles=StyleSheet.create({
    imputText:{
        backgroundColor: IMPUT_COLOR,
        paddingHorizontal: 20,
        borderRadius: 10,
    }
})