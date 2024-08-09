import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Profile from './Profile'; 
import About from './About'; 
import WorkoutTemplet from './WorkoutTemplet';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabParamList } from '../ParamLists/NavigationTypes';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Profile') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          } else if (route.name === 'WorkoutTemplet'){
              iconName = focused ? 'accessibility' : 'accessibility-outline';
          } else {
            iconName = 'help-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        //tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
      })}
    >
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
      <Tab.Screen name= "WorkoutTemplet" component={WorkoutTemplet} options={{ title: 'Workouts'}} />
      <Tab.Screen name="About" component={About} options={{ title: 'About' }} />
    </Tab.Navigator>
  );
}
