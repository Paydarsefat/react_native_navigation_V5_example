import React, {useLayoutEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default function NextScreen({navigation, route}) {
  let {userName, action} = route.params;
  const [liked, setLiked] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Icon name="dropbox" size={24} color="#FFF" />,
      headerRight: () => (
        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <Icon
            name={liked ? 'heart' : 'heart-o'}
            size={24}
            color="#FFF"
            style={{marginRight: 15}}
          />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: '100%'}}>
        <Image
          source={require('./../../assets/imgs/4-1.jpg')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontSize: 12, fontWeight: '100'}}>Next Screen</Text>
        <Text style={{fontSize: 22, fontWeight: '100'}}>
          Welcome {userName} Receive {action}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{color: '#fff'}}>Go To Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: '#23A6D9'}}>Go Back</Text>
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
    width: 300,
    marginTop: 32,
    backgroundColor: '#23A6D9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBack: {
    width: 300,
    marginTop: 32,
    borderColor: '#23A6D9',
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
