import React, { useState } from 'react'
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { ImputComponent } from '../components/ImputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';


//interface para las propiedades
interface Props {
    users: User[]; //arreglos con la lista de usuarios
}

//interfacepara el objeto del formulario
interface FormLogin {
    username: string,
    password: string
}

export const LoginScreen = ({ users }: Props) => {
    //hook useState para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });

    //hook de navegacion
    const navigation = useNavigation();

    //hook useState para manejar el estado del formulario
    const [hiddenPasword, setHiddenPasword] = useState<boolean>(true);

    //funcion para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
        //console.log(property + ': ' + value);
        setFormLogin({ ...formLogin, [property]: value });
    }

    //funcion para validar el usuario y la contraseña
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.username == formLogin.username && user.password == formLogin.password);
        return existUser;
    }

    //funcion permitir iniciar sesion
    const handleLogin = (): void => {
        if (formLogin.username == '' || formLogin.password == '') {
            Alert.alert('Error', 'Ingresar todos los datos');
            return; // si falta algun campo nos saca del flujo
        }

        //verificar si el usuario existe
        if (!verifyUser()) { //verifyUser() == undefined <-- esto es igual 
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;
        } else {
            Alert.alert('Bienvenido');
        }
        //console.log(formLogin);
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }))
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
                    <ImputComponent placeholder='Contraseña' keyboardType='numeric' changeForm={changeForm} property='password' isPassword={hiddenPasword} />
                    <Icon name={hiddenPasword ? 'visibility' : 'visibility-off'}
                        style={styles.iconForm}
                        size={30}
                        color={PRIMARY_COLOR}
                        onPress={() => setHiddenPasword(!hiddenPasword)} />
                </View>
                <ButtonComponent texto='Iniciar Sesión' onPress={handleLogin} />
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registrate' }))}>
                    <Text style={styles.textRedirect}>¿No tienes cuenta? Registrate</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
