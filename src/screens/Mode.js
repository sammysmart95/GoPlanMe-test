import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../component/Header';
import Image from '../assets/image/Smart.jpeg';

const Mode = props => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon="Menu"
        hasShadow={false}
        onLeftIconPress={() => {}}
        avatar={Image}
      />
      <View style={styles.center}>
        <Text style={styles.text}>This is the Mode screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => props.navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    marginVertical: 40,
  },
});

export default Mode;
