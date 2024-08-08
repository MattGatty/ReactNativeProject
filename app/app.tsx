import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Welcome'
import TabNavigator from './TabNavigator'; 
import { RootStackParamList } from './ParamLists/NavigationTypes';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options = {{headerShown: false}} 
        />
        <Stack.Screen 
        name="TabNavigator" 
        component={TabNavigator} 
        options = {{headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
