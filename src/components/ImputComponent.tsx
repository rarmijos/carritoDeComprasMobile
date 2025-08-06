import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native'
import { IMPUT_COLOR } from '../commons/constants'

interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    changeForm: (property: string, value: string) => void; //funciona modificar el estado del formulario
    property: string; //propiedades del objeto del formulario
    isPassword?: boolean; //propiedad opcional para indicar si es un campo de contraseña
}

export const ImputComponent = ({ placeholder, keyboardType, changeForm , property, isPassword }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType} //keyboardTypeOpcions
            onChangeText={(value) => changeForm(property, value)}
            secureTextEntry={isPassword} //para el campo de contraseña
            style={styles.imputText}
        />
    )
}

const styles = StyleSheet.create({
    imputText: {
        backgroundColor: IMPUT_COLOR,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius: 10,
    }
})