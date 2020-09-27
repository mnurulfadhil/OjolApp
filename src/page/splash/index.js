import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000);
  });

  return (
    <View>
      <Text>splash screen</Text>
    </View>
  );
};
export default Splash;