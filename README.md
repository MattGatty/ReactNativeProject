
# React Native Navigation App

## Overview

This project is a React Native application that demonstrates the use of navigation, including stack and tab navigators. The app includes a welcome screen, a home screen, and an explore screen, with a clean and maintainable structure.

## Features

- **Welcome Screen**: A landing screen that introduces the app and provides navigation to the main part of the app.
- **Home Screen**: The main screen where primary content is displayed.
- **Explore Screen**: An additional screen for exploring other features or content.
- **Stack Navigator**: Manages the transition between the welcome screen and the main app.
- **Tab Navigator**: Allows for easy navigation between the Home and Explore screens.

## Technologies Used

- **React Native**: A framework for building native apps using React.
- **React Navigation**: A library for routing and navigation in React Native apps.
- **Expo**: A platform for making React Native development easier.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.

## Project Structure

```
/your-project
  /app
    _layout.tsx
    Index.tsx
    TabNavigator.tsx
    Explore.tsx
    Welcome.tsx
    App.tsx
```

### File Descriptions

- **App.tsx**: The entry point of the application that sets up the `NavigationContainer`.
- **_layout.tsx**: Configures the stack navigator with the Welcome screen and the main tab navigator.
- **TabNavigator.tsx**: Configures the bottom tab navigator with Home and Explore screens.
- **Welcome.tsx**: Displays a welcome message and navigates to the main app.
- **Index.tsx**: The home screen of the app.
- **Explore.tsx**: The explore screen of the app.

## How to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the project**:
   ```bash
   expo start
   ```

## Example Code

### App.tsx

```tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './app/_layout';

export default function App() {
  return (
    <NavigationContainer>
      <Layout />
    </NavigationContainer>
  );
}
```

### _layout.tsx

```tsx
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
```

### TabNavigator.tsx

```tsx
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import { Colors } from './constants/Colors';
import { useColorScheme } from './hooks/useColorScheme';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'code-slash' : 'code-slash-outline';
          } else {
            iconName = 'help-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ title: 'Explore' }} />
    </Tab.Navigator>
  );
}
```

### WelcomeScreen.tsx

```tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the App!</Text>
      <Button
        title="Go to App"
        onPress={() => navigation.navigate('Main')}
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

### HomeScreen.tsx

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
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

### ExploreScreen.tsx

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
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

- **Integration with a backend service** to fetch dynamic data.
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
