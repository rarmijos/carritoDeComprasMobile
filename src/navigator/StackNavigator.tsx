import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screems/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screems/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            cardStyle:{
                backgroundColor: PRIMARY_COLOR,
            }
        }}>
            <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
            <Stack.Screen name="Registrate" options={{headerShown: false}} component={RegisterScreen} />
        </Stack.Navigator>
    );
}