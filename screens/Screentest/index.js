import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';

const ProfileScreen = () => {
  const dummyData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://tinyurl.com/42evm3m3'
  };

  const handleSave = () => {
    alert('Profile saved!');
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: dummyData.profileImage
      }} />
        <Text style={styles.profileName}>{dummyData.name}</Text>
        <Text style={styles.profileEmail}>{dummyData.email}</Text>
      </View>
      <Button title="Save" onPress={handleSave} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  profileContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  profileEmail: {
    fontSize: 16,
    color: '#888'
  }
});
export default ProfileScreen;