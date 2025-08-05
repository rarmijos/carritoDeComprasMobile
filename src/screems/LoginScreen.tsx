import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { ImputComponent } from '../components/ImputComponent';



export const LoginScreen = () => {
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR}/>
            <TitleComponent title="Iniciar sesión" />
            <BodyComponent>
                <Text style={styles.titleWelcom}> Bienvenidos de nuevo! </Text>
                <Text style={styles.textDescripcion}> Realiza tus compras de maner rapida y segura </Text>
                <ImputComponent />
            </BodyComponent>
        </View>
    )
}
