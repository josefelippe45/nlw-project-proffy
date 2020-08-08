import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
const TeacherItem = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                style={styles.avatar}
                source={{uri: 'https://github.com/josefelippe45.png'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>José Felippe</Text>
                    <Text style={styles.subject}>Desenvolvedor</Text>
                </View>
            </View>
        </View>
    );
}