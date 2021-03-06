import React, { useState, useEffect } from 'react';
import { View, Image, Text, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//rectbutton é um componente que adapta o button ao SO do usuario
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api';
const Landing = () => {
    //utilizando o Platform para deixar a aplicação com estilos variados entre android e ios
    // let TouchableCmp = TouchableOpacity;

    // if (Platform.OS === 'android' && Platform.Version >= 21) {
    //     TouchableCmp = TouchableNativeFeedback;
    // }

    //estado para as conexões
    const [totalConnections, setTotalConnections] = useState(0);
    /* o useEffect lida com alterações no estado
    segundo parametro é um array de dependências, ajuda a definir
    quando disparar a função do primeiro parametro, ou seja, quando
    os itens do array foram alteradas dispare a função novamente
    */
    useEffect(() => {
        //faz a requisição
        api.get('/connections').then(res => {
            const total = res.data.total;
            setTotalConnections(total);
        })
    }, []);
    const navigation = useNavigation();

    const handleNavigationToGiveClassesPage = () => {
        navigation.navigate('GiveClasses');
    }
    const handleNavigationToStudyPages = () => {
        navigation.navigate('Study')
    }
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja Bem-Vindo! {'\n' /**introduz uma quebra de linha. componentes text, diferente de outros, herdam estilos*/}
                <Text style={{ fontFamily: 'Poppins_600SemiBold' }}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonContainer}>
                <RectButton onPress={handleNavigationToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton
                    onPress={handleNavigationToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClasses} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões realizadas {' '/**converte esse espaçamento para texto */}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;