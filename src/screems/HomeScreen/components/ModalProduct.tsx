import React from 'react'
import { Image, Text } from 'react-native'
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
}

export const ModalProduct = ({ visible, item, setModalVisible }: Props) => {
    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={styles.modal}>
                    <View>
                        <Icon name='cancel'
                            size={17}
                            color={PRIMARY_COLOR}
                            onPress={setModalVisible}
                        />
                    </View>
                    <Image style={styles.image} source={{ uri: item.pathImage }} />
                    <Text>{item.name}</Text>
                </View>
            </View>
        </Modal>
    )
}
