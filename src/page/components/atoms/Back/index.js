import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Back = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../../../assets/arrow.png')}
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
};
export default Back;

const styles = StyleSheet.create({});
