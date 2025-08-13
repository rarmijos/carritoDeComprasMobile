import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Modal, View } from 'react-native'
import { styles } from '../../../theme/appTheme'
import { Product } from '../HomeScreen';
import { PRIMARY_COLOR } from '../../../commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
//interface para las propiedades
interface Props {
    visible: boolean;
    item: Product;
    setModalVisible: () => void;
    updateStock: (id: number, quantity: number) => void;
}

export const ModalProduct = ({ visible, item, setModalVisible, updateStock }: Props) => {
    //hook useWindowsDimensions permite tomar la dimecion de la pantalla
    const { width } = useWindowDimensions();
    //hook useState para manejar el estado del contador
    const [quantity, setquantity] = useState<number>(1);

    //funcion para agregar al carrito
    const handleAddToCart = () => {
        //llamar funcion para actualizar el stock
        updateStock(item.id, quantity);
        //cerrar el modal
        setModalVisible();
        //reiniciar el contador
        setquantity(1);
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.title}>{item.name} - {item.price.toFixed(2)}</Text>
                        <View style={styles.containerIcon}>
                            <Icon name='cancel'
                                size={17}
                                color={PRIMARY_COLOR}
                                onPress={setModalVisible}
                            />
                        </View>
                    </View>
                    <View>
                        <Image style={styles.image} source={{ uri: item.pathImage }} />
                    </View>

                    {
                        (item.stock == 0)
                            ? <Text style={styles.textOut}>X Producto agotado X</Text>
                            :

                            <View>
                                <View style={styles.containerQuantity}>
                                    <TouchableOpacity
                                        style={styles.buttonQuantity}
                                        onPress={() => setquantity(quantity - 1)}
                                        disabled={quantity == 1}>
                                        <Text style={styles.buttontextQuantity}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.textQuantity}>{quantity}</Text>

                                    <TouchableOpacity
                                        style={styles.buttonQuantity}
                                        onPress={() => setquantity(quantity + 1)}
                                        disabled={quantity == item.stock}>
                                        <Text style={styles.buttontextQuantity}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuantity}>Total: ${(item.price * quantity).toFixed(2)}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity 
                                    onPress={handleAddToCart}
                                    style={styles.buttonAddCart}>
                                        <Text style={styles.buttonAddCartText}>Agregar al carrito</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}
