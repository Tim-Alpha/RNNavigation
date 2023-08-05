import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../styles/commonStyles';

export default function HomeScreen({navigation}: any) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Home Screen</Text>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('DetailsScreen')}>
        <Text>Go To Detail Screen</Text>
      </Pressable>
    </View>
  );
}
