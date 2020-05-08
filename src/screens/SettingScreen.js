import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
     </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      marginTop: 32,
      backgroundColor: '#23A6D9',
      borderRadius: 12,
      padding: 12,
    },
  });
  