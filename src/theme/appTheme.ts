import { StyleSheet } from "react-native";
import { IMPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

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
        width: 150,
        height: 160,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        shadowColor: 'red',
        elevation: 10,
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: TERTIARY_COLOR,
        borderRadius: 10,
        elevation: 2,
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 18,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
    },
    containerQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 10,
    },
    buttontextQuantity: {
        fontSize: 18,
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
    },
    textQuantity: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    buttonAddCart: {
        backgroundColor: TERTIARY_COLOR,
        marginTop: 15,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonAddCartText: {
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
    },
    textOut: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
    }
})