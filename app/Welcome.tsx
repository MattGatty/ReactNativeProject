import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './ParamLists/NavigationTypes';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { Image } from 'react-native';


type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export default function WelcomeScreen({ navigation }: Props) {
  const [selectedProfile, setSelectedProfile] = useState<string | undefined>(undefined);

  const handleProfileChange = (profile: string) => {
    setSelectedProfile(profile);
  };

  return (
    <LinearGradient
      colors={['white', 'grey']}
      style={styles.container}
    >
       <View style={styles.container}>
        <Image
        source = {require('@/assets/images/Gymlogo.png')}
        style={styles.logo}
        />  
        <View style = {styles.InnerContainer}>
        <Text
        style={styles.Text}
        >Select or Create a Profile</Text>
        <Picker
          selectedValue={selectedProfile}
          style={styles.picker}
          onValueChange={(itemValue) => handleProfileChange(itemValue)}
        >
          <Picker.Item label="Create a new profile +" value={undefined} />
          <Picker.Item label="Matthew" value="profile1" />
          <Picker.Item label="Giselle" value="profile2" />
          <Picker.Item label="Ebi" value="profile3" />
        </Picker>
        <Button
          title="Confirm Selection"
          onPress={() => navigation.navigate('TabNavigator')}
        />
        </View>  
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InnerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 5,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5, // This is important for Android to show shadows
    alignItems: 'center',
  },
  Text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    height: 350,
    width: 290,
    bottom: 575,
    left: 20,
    position: 'absolute',
  },
  picker: { 
    height: 200,
    width: 300,
    color: '#ffffff',
  },
});