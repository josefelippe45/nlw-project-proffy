import React, { useState, useReducer } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';
//definindo as props que passaremos pra nossa const q está sendo exportada
export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}
interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;

}
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);
    const handleLinkToWhatsapp = () => {
        //cadastra uma nova conexão
        api.post('connections',{
            user_id: teacher.id
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }
    const handleToggleFavorite = async () => {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];
        //verifica se já exite favoritos
        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            //remove dos favoritos. procura o item
            //faz uma varredura no array procurando o id igual o id do item
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });
            //passa o indice a ser removido e quantas posições a partir daquele item
            favoritesArray.splice(favoriteIndex, 1)
            setIsFavorited(false);
        } else {
            //adiciona aos favoritos
            favoritesArray.push(teacher);
            setIsFavorited(true);
        }
        //salva no async storage denovo
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />
                <View style={{ marginLeft: 16 }}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>{teacher.bio}</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   ' /**adiciona um espaçamento */}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favButton,
                            isFavorited ? styles.favorited : {},
                        ]}>
                        {isFavorited
                            ? <Image source={unfavoriteIcon} />
                            : <Image source={heartOutlineIcon} />
                        }

                    </RectButton>
                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
};
export default TeacherItem;

