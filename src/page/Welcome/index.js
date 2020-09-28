import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../util';
import {Button} from '../components';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Image
        source={require('../../assets/ilustrasi.png')}
        style={styles.illustration}
      />
      <View style={styles.txt}>
        <Text style={styles.txt_welcome}>Welcome to BOE-JEK</Text>
        <Text style={styles.txt_moto}>We’re here to help all your needs</Text>
      </View>
      {/* this Button and onPress func imported from Button global(components/atoms/Button) */}
      <Button title="LOGIN" onPress={() => navigation.navigate('Login')} />
      <Button
        title="REGISTER"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 25,
  },
  illustration: {
    width: 295,
    height: 195,
    marginTop: 31,
  },
  txt: {
    alignItems: 'center',
  },
  txt_moto: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 45,
  },
  txt_welcome: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.default,
    marginTop: 45,
  },
});
