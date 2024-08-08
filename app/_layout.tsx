// layout.tsx
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome'
import TabNavigator from './TabNavigator'; // Adjust import based on your file structure

const Stack = createStackNavigator();

export default function Layout() {
  
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
