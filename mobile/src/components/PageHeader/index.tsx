import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png';

//definindo algumas props pra const PageHeader
interface PageHeaderProps {
    title: string;
    /**ReactNode faz com que ele receba um componente react */
    headerRight?: ReactNode;
}
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.navigate('Landing')
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode='contain' />
                </BorderlessButton>
                <Image source={logoImg} resizeMode='contain' />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{props.title /**recebe o titulo passado como title */}</Text>
                {props.headerRight}

            </View>
            {props.children}
        </View>
    );
}

export default PageHeader;