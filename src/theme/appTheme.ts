import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    titleWelcom: {
        fontSize: 20,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    textDescripcion: {
        fontSize: 15,
        color: 'black',
        paddingVertical: 10
    },
    containerForm: {
        marginVertical: 10,
    },
    iconForm: {
        position: 'absolute',
        bottom: 14,
        right: 18,
    },
    textRedirect: {
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'center',
    },

    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', //negro transparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        padding: 20,
        margin: 15,
        borderRadius: 10,
        backgroundColor: SECONDARY_COLOR,
    },
    image: {
        width: 90,
        height: 110,
    },
})