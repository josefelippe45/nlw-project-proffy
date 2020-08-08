import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

import TeacherList from '../TeacherList';
import Favorites from '../Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs = () => {
    return (
        <Navigator
            tabBarOptions={{
                //style é o estilo do container das tabs
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    /**adicionando estilos conforme a OS do usuario */
                    height: Platform.OS === 'ios' ? 84 : 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
                },
                /**opção pra iOS garante que a Bottom Tab Bar não dê nenhum espaçamento da "área de segurança" */
                safeAreaInsets: {
                    bottom: 0,
                },
                iconStyle: {
                    /**tira a capacidade de ocupar o max de tamanho possivel */
                    flex: 0,
                    width: 20,
                    height: Platform.OS === 'ios' ? 24 : 20,
                },
                /**estilização do texto */
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                /**cor de fundo da aba quando ela n estiver selecionada e quando estiver*/
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                /**cor do texto quando não está selecionado e quando estiver*/
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen
                name="TeacherList"
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name='ios-easel' size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused})=>{
                        return(
                            <Ionicons name='ios-heart' size={size} color={focused ? '#8257e5' : color}/>
                        );
                    }
                }}
            />
        </Navigator>
    );
}

export default StudyTabs;