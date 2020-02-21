import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Personal Expenses App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    marginTop: 50,
    backgroundColor: 'skyblue',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default Header;
