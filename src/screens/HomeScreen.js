import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: '100%'}}>
        <Image
          source={require('./../../assets/imgs/4.jpg')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontSize: 22, fontWeight: '100'}}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Next', {
              userName: 'Mostafa',
              action: 'parcel',
            });
          }}>
          <Text style={{color: '#fff'}}>Go To Next</Text>
        </TouchableOpacity>
      </View>
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
    width:300,
    marginTop: 32,
    backgroundColor: '#23A6D9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
