import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Expenses from './components/Expenses';

const App = () => {
  return (
    <View>
      <Header />
      <Expenses />
    </View>
  );
};

export default App;
