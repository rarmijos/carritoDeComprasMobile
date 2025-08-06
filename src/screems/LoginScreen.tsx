import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { ImputComponent } from '../components/ImputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

//interfacepara el objeto del formulario
interface FormLogin {
    username: string,
    password: string
}

export const LoginScreen = () => {
    //hook useState para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });

    //funcion para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
        //console.log(property + ': ' + value);
        setFormLogin({...formLogin, [property]: value});
    }

    //funcion permitir iniciar sesion
    const handleLogin = (): void => {
        console.log(formLogin);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Iniciar sesión" />
            <BodyComponent>
                <Text style={styles.titleWelcom}> Bienvenidos de nuevo! </Text>
                <Text style={styles.textDescripcion}> Realiza tus compras de maner rapida y segura </Text>
                <View style={styles.containerForm}>
                    <ImputComponent placeholder='Usuario' keyboardType='default' changeForm={changeForm} property='username' />
                    <ImputComponent placeholder='Contraseña' keyboardType='numeric' changeForm={changeForm} property='password' isPassword={true} />
                </View>
                <ButtonComponent texto='enviar' onPress={handleLogin} />
            </BodyComponent>
        </View>
    )
}
