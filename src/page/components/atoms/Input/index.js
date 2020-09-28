import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../../util';

const Input = ({title}) => {
  return (
    <View>
      <TextInput placeholder={title} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: 25,
    color: 'black',
    fontSize: 16,
    marginBottom: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
