import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Icon = ({img}) => {
  return <Image source={require('../../assets/ride.png')} />;
};

const Dashboard = () => {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text>Rp</Text>
        </View>
        <Text>Saldo :</Text>
        <TouchableOpacity>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Icon />
      </View>
    </View>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
  },
});
