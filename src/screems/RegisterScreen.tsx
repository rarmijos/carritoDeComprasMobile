import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { ImputComponent } from '../components/ImputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator'

//interface para las propiedades
interface Props {
    users: User[];
    addUser: (user: User) => void;
}

//interface para el formulario de registro
interface FormRegister {
    name: string;
    username: string;
    password: string;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
    //hook useState para manejar el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        username: '',
        password: ''
    })

    //funcion para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
        //modificar el estado del formulario
        setFormRegister({ ...formRegister, [property]: value })
    }

    //duncion para verificar si existe el usuario
    const verifyUsername = (): User | undefined => {
        const existUsername = users.find(user => user.username == formRegister.username)
        return existUsername;
    }

    //funcion para generar los ids de los nuevos usuarios
    const getIdUser = (): number => {
        const getId = users.length + 1; //length devuelve el numero de elementos del arreglo
        return getId;
    }

    //funcion permitir registro
    const handleSingUp = (): void => {
        //validar el formulario
        if (formRegister.name == '' || formRegister.username == '' || formRegister.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos')
            return;
        }

        //validar que no exista el usuario
        if (verifyUsername() != undefined) {
            Alert.alert('Error', 'El usuario ya existe')
            return;
        }

        //crear el nuevo usuario ( objeto )
        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            username: formRegister.username,
            password: formRegister.password
        }

        //agregar el nuevo usuario en el arreglo
        addUser(newUser);
        Alert.alert('Exito', 'Usuario agregado con exito')
        navigation.goBack();
        //console.log(formRegister);
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
                    <ImputComponent placeholder='Nombre' keyboardType='default' changeForm={changeForm} property='name' />
                    <ImputComponent placeholder='Usuario' keyboardType='default' changeForm={changeForm} property='username' />
                    <ImputComponent placeholder='Contraseña' keyboardType='numeric' changeForm={changeForm} property='password' />
                </View>
                <ButtonComponent texto='Registrar' onPress={handleSingUp} />
                <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirect}>Ya tienes cuenta? Inicia Sesión</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View >
    )
}
