import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function WelcomeScreen({ navigation }) {
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