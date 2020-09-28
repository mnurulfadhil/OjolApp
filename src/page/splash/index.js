import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../util';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000);
  });

  return (
    <View
      style={{
        backgroundColor: colors.default,
        flex: 1,
        justifyContent: 'center',
      }}>
      <Image style={styles.img} source={require('../../assets/logo.png')} />
      <Text style={styles.txt}>WELCOME TO BOE-JEK</Text>
      <Text />
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
