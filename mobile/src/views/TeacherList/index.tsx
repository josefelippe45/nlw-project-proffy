import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import {useFocusEffect} from '@react-navigation/native';


import styles from './styles';
import api from '../../services/api';


//interface que dá ao teacher o objeto id para identificalo como uma key unica

const TeacherList = () => {
    //estado dos teachers
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    //estado dos filtros
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const loadFavorites = () => {
        AsyncStorage.getItem('favorites').then(res => {
            //usando json pra salvar um objeto de texto
            if (res) {
                const favoritedTeachers = JSON.parse(res);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds);
            }
        });
    }
    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )
    //seta o contrario de isFilterVisible
    const handleIsFilterVisible = () => {
        setIsFilterVisible(!isFilterVisible)
    }
    //submit do form
    const handleFilterSubmit = async () => {
        loadFavorites();
        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        setIsFilterVisible(false);
        setTeachers(res.data)
    }
    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleIsFilterVisible}>
                        <Feather name="filter" size={20} color='#FFF' />
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Matéria"
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholderTextColor='#c1bccc'
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            {/**trocar o input por um expo Picker */}
                            <Text style={styles.label}>Dia</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Dia"
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                                placeholderTextColor='#c1bccc'
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Horário"
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholderTextColor='#c1bccc'
                            />
                        </View>
                    </View>
                    <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}
            </PageHeader>
            <ScrollView
                style={{ marginTop: -40 /**sobe um pouco a scrollview para o header*/ }}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24/**adicionando padding */ }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })/**executa um laço de repetiçao que percorre o array e retorna os items */}
            </ScrollView>

        </View>

    );
}

export default TeacherList;