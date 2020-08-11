import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import styles from './styles';


const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const loadFavorites = () => {
        AsyncStorage.getItem('favorites').then(res => {
            //usando json pra salvar um objeto de texto
            if (res) {
                const favoritedTeachers = JSON.parse(res);
                setFavorites(favoritedTeachers);
            }
        });
    }
    /**diferente do useEffect o useFocusEffect dá um reload quando é executado quando a tela entrar em foco*/
    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />
            <ScrollView
                style={{ marginTop: -40 /**sobe um pouco a scrollview para o header*/ }}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16
                }}
            >
                {favorites.map((teacher: Teacher)=>{
                    //map dos teachers favoritos
                    return(
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={true}
                        />
                    )
                })}
            </ScrollView>
        </View>

    );
}

export default Favorites;