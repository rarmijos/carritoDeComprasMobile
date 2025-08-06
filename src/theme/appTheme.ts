import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    titleWelcom:{
        fontSize: 20,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    textDescripcion:{
        fontSize: 15,
        color: 'black',
        paddingVertical: 10
    },
    containerForm:{
        marginVertical: 10,
    }
})