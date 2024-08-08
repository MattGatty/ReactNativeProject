
# React Native Navigation App

## Overview

This project is a React Native application that demonstrates the use of navigation, including stack and tab navigators. The app includes a welcome screen, an index screen, and an explore screen, with a clean and maintainable structure.

## Features

- **Welcome Screen**: A landing screen that introduces the app and provides navigation to the main part of the app.
- **Index Screen**: The main screen where primary content is displayed.
- **Explore Screen**: An additional screen for exploring other features or content.
- **Stack Navigator**: Manages the transition between the welcome screen and the main app.
- **Tab Navigator**: Allows for easy navigation between the Index and Explore screens.

## Technologies Used

- **React Native**: A framework for building native apps using React.
- **React Navigation**: A library for routing and navigation in React Native apps.
- **Expo**: A platform for making React Native development easier.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.

## Project Structure

```
/ReactNativeProject
  /screens
    WelcomeScreen.tsx
    TabNavigator.tsx
    Index.tsx
    Explore.tsx
  /ParamLists
    NavigationTypes.ts
  App.tsx
  app.json
  package.json
```

### File Descriptions

- **App.tsx**: The entry point of the application. It sets up the `NavigationContainer` and configures the stack navigator with the Welcome screen and the main tab navigator.
- **TabNavigator.tsx**: Configures the bottom tab navigator with Index and Explore screens.
- **WelcomeScreen.tsx**: Displays a welcome message and navigates to the main app.
- **Index.tsx**: The home screen of the app.
- **Explore.tsx**: The explore screen of the app.

## Example Code

### App.tsx

```tsx
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
```

### TabNavigator.tsx

```tsx
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Index from './Index'; 
import Explore from './Explore'; 
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabParamList } from './ParamLists/NavigationTypes';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'code-slash' : 'code-slash-outline';
          } else {
            iconName = 'help-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
      })}
    >
      <Tab.Screen name="Index" component={Index} options={{ title: 'Index' }} />
      <Tab.Screen name="Explore" component={Explore} options={{ title: 'Explore' }} />
    </Tab.Navigator>
  );
}
```

### Welcome.tsx

```tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './ParamLists/NavigationTypes';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the App!</Text>
      <Button
        title="Go to App"
        onPress={() => navigation.navigate('TabNavigator')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Index.tsx

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Explore.tsx

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

## Future Enhancements

- **Integration with MySQL Azure DB** to fetch dynamic data.
- **Enhanced styling** using libraries like `styled-components` or `react-native-paper`.
- **State management** using Redux or Context API.

## Conclusion

This project showcases a well-structured React Native application with a focus on navigation. It is a solid foundation for building more complex applications and demonstrates proficiency with React Native and related technologies.

For more details or to discuss further enhancements, feel free to contact me.

---

## Contact Information

- **Email**: matthew.gatmaitan00@gmail.com
- **LinkedIn**: [My LinkedIn Profile](https://www.linkedin.com/in/matthew-gatmaitan)
- **GitHub**: [My GitHub Profile](https://https://github.com/MattGatty)
