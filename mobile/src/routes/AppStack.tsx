import React from 'react';
//as navegações ficam em volta deste componente
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import de components
import Landing from '../views/Landing'
import GiveClasses from '../views/GiveClasses'
import StudyTabs from './StudyTabs';

const { Navigator, Screen} = createStackNavigator();

const AppStack = ()=>{
    return(
        /**duas chaves significa um objeto */
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="GiveClasses" component={GiveClasses}/>
                <Screen name="Study" component={StudyTabs /**um navigator dentro de outro */}/>
            </Navigator>
        </NavigationContainer>
    );
};

export default AppStack;