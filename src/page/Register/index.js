import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Input, Back} from '../components';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back onPress={() => navigation.replace('Welcome')} />
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.illustration}>
        <Image source={require('../../assets/register.png')} />
        <Text style={styles.txt_illu}>REGISTER</Text>
      </View>
      <View style={styles.form}>
        <Input title="Fullname" />
        <Input title="Email" />
        <Input title="Password" />
      </View>
      <View style={styles.btn}>
        <Button title="REGISTER" onPress={() => alert('Registration Succes')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  illustration: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  txt_illu: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  form: {
    marginHorizontal: 20,
  },
  btn: {
    alignItems: 'center',
  },
});
