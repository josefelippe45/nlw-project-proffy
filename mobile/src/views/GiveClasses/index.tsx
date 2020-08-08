import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const GiveClasses = () => {
    const navigation = useNavigation();
    const handleNavigateBack = ()=>{
        navigation.goBack();
    }
    //o resizeMode contain força a imagem a ser contida no tamanho do elemento
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain"source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma Web.
                </Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;