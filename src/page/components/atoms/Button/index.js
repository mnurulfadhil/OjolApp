import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../../util';

const Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btn_txt}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 25,
    backgroundColor: colors.default,
    justifyContent: 'center',
    paddingVertical: 13,
    width: 225,
    marginBottom: 20,
  },
  btn_txt: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
