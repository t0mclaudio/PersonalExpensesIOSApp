import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { uuid } from 'uuidv4';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    { id: uuid(), text: 'Milk', amount: 100 },
    { id: uuid(), text: 'Eggs', amount: 100 },
    { id: uuid(), text: 'Juice', amount: 100 },
  ]);

  return (
    <View>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <Expense item={item} />}
      />
    </View>
  );
};

const Expense = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.item}>{item.text} {`Php ${item.amount}`} </Text>
        <Icon style={styles.icon} name="pencil" size={16} color="blue" />
        <Icon style={styles.icon} name="remove" size={16} color="red" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  item: {
    fontSize: 18,
  },
  ItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  icon: {
    padding: 5,
  },
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Expenses;
