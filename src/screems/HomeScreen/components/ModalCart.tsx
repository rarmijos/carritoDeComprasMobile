import React from 'react'
import { FlatList, Modal, StyleSheet, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../commons/constants';
import { Cart } from '../HomeScreen';

interface Props {
    visible: boolean;
    setModalVisible: () => void;
    cart: Cart[];
}

export const ModalCart = ({ visible, setModalVisible, cart }: Props) => {
    const { width } = useWindowDimensions()

    //funcion para calcular el total a pagar
    const totalPay=()=>{
        let total=0;
        cart.forEach(product=>{
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.title}>Mis Productos</Text>
                        <View style={styles.containerIcon}>
                            <Icon name='cancel'
                                size={17}
                                color={PRIMARY_COLOR}
                                onPress={setModalVisible}
                            />
                        </View>
                    </View>
                    <View style={localstyles.headerTable}>
                        <Text style={localstyles.textHeaderTable}>Producto</Text>
                        <View style={localstyles.headerTableInfo}>
                            <Text style={{
                                ...localstyles.textHeaderTable,
                                marginHorizontal: 7
                            }}>Prec.</Text>
                            <Text style={{
                                ...localstyles.textHeaderTable,
                                marginHorizontal: 7
                            }}>Cant.</Text>
                            <Text style={{
                                ...localstyles.textHeaderTable,
                                marginHorizontal: 7
                            }}>Total</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={cart}
                            renderItem={({ item }) =>
                                <View style={localstyles.headerText}>
                                    <Text>{item.name}</Text>
                                    <View style={localstyles.headerText}>
                                        <Text style={{ paddingHorizontal: 30 }}>
                                            ${item.price.toFixed(2)}
                                        </Text>
                                        <Text style={{ paddingHorizontal: 5 }}>
                                            {item.quantity}
                                        </Text>
                                        <Text style={{ paddingLeft: 15 }}>
                                            ${item.total.toFixed(2)}
                                        </Text>
                                    </View>
                                </View>
                            }
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                    <View style={localstyles.containerTotalPay}>
                        <Text style={localstyles.textTotalPay}>Total pagar: ${totalPay().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonAddCart}>
                        <Text style={styles.buttonAddCartText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const localstyles = StyleSheet.create({
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTableInfo: {
        flexDirection: 'row',
    },
    textHeaderTable: {
        fontSize: 16,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerTotalPay:{
        alignItems: 'flex-end',
        marginTop: 10,
    },
    textTotalPay:{
        fontSize: 20,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
})
