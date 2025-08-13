import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import { PRIMARY_COLOR } from '../../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';

//interface para las propiedades
interface Props {
    item: Product; //cada producto del arreglo 
    updateStock: (id: number, quantity: number) => void; //funcion para actualizar stock
}

export const CardProduct = ({ item, updateStock }: Props) => {
    //hook useState para manejar el estado de modal
    const [showModal, setModalVisible] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: item.pathImage }} style={styles.image} />
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>Precio: ${item.price}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart' 
                    size={30} 
                    color={PRIMARY_COLOR}
                    onPress={() => setModalVisible(true)}
                    />
                </View>
            </View>
            <ModalProduct item={item} visible={showModal} setModalVisible={()=>setModalVisible(!showModal)} updateStock={updateStock} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderColor: PRIMARY_COLOR,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center',
        //flexDirection: 'row',
        backgroundColor: 'gray',
        elevation: 5,
        flex: 1,
        width: 160,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    price: {
        fontSize: 15,
        marginLeft: 30,
    },
    image: {
        width: 90,
        height: 110,
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    }
})