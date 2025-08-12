import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screems/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screems/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screems/HomeScreen/HomeScreen';

//definir una interfas para los objetos de mi arreglo users
export interface User {
    id: number,
    name: string,
    username: string,
    password: string
}

//arreglo con la lista de usuarios
const users: User[] = [
    { id: 1, name: 'Roy Armijos', username: 'rarmijos', password: '123' },
    { id: 2, name: 'Brandon Armijos', username: 'barmijos', password: '456' },
];

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //hook useState permitir gestionar el estado del arreglo de los usuarios
    const [listUsers, setListUsers] = useState<User[]>(users);

    //funcion para agregar un nuevo usuario
    const addUser = (user: User) => {
        //modificar el estado del arreglo
        setListUsers([...listUsers, user]);
    }

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR,
                }
            }}>
            <Stack.Screen name="Login" options={{ headerShown: false }} children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen name="Registrate" options={{ headerShown: false }} children={() => <RegisterScreen users={listUsers} addUser={addUser} />} />
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
    );
}