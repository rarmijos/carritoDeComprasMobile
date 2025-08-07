import React from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { ImputComponent } from '../components/ImputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const RegisterScreen = () => {

    //funcion para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
    }

    //funcion permitir registro
    const handleLogin = (): void => {
    }

    //hook de navegacion
    const navigation = useNavigation();

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Registrate" />
            <BodyComponent>
                <Text style={styles.titleWelcom}> Estas muy cerca </Text>
                <Text style={styles.textDescripcion}> Realiza tus compras de maner rapida y segura </Text>
                <View style={styles.containerForm}>
                    <ImputComponent placeholder='Nombre' keyboardType='default' changeForm={changeForm} property='' />
                    <ImputComponent placeholder='Usuario' keyboardType='default' changeForm={changeForm} property='username' />
                    <ImputComponent placeholder='Contraseña' keyboardType='numeric' changeForm={changeForm} property='password' />
                </View>
                <ButtonComponent texto='Iniciar Sesión' onPress={handleLogin} />
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirect}>Ya tienes cuenta? Inicia Sesión</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View >
    )
}
