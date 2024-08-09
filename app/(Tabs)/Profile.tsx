import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../ParamLists/NavigationTypes';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export default function Profile({ navigation }: Props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>About</Text>
      <Button
          title="Exit Profile"
          onPress={() => navigation.navigate('Welcome')}
        />
    </View>
  );
}
 