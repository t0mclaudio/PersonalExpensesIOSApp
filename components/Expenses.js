import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {uuid} from 'uuidv4';
import withData from '../withData';
import Expense from './Expense';
import AddItem from './AddItem';
import EditItem from './EditItem';

const Expenses = ({data}) => {
  const [expenses, setExpenses] = useState(data);
  const [editing, setEditing] = useState(false);
  const [activeItem, setActiveItem] = useState();

  const addItem = newItem => {
    if (!newItem.text || !newItem.amount) {
      Alert.alert('Please enter valid input');
    } else {
      setExpenses(currentItems => {
        return [{id: uuid(), date: new Date(), ...newItem}, ...currentItems];
      });
    }
  };

  const remove = id => {
    setExpenses(currentItems => currentItems.filter(item => item.id !== id));
  };

  const pressEdit = id => {
    setEditing(currentValue => !currentValue);
    setActiveItem(expenses.find(item => item.id === id));
  };

  const onUpdate = item => {
    setExpenses(currentItems => {
      currentItems[expenses.findIndex(obj => obj.id === item.id)] = item;
      return currentItems;
    });
    setEditing(false);
  };

  return (
    <View>
      <AddItem addItem={addItem} />
      <FlatList
        data={expenses}
        renderItem={({item}) => (
          <Expense item={item} remove={remove} pressEdit={pressEdit} />
        )}
      />
      <Modal animationType="slide" transparent={false} visible={editing}>
        <View style={{padding:60}}>
          <View>
            <EditItem item={activeItem} updateItem={onUpdate} />
            <TouchableHighlight
              style={styles.btn}
              onPress={() => {
                setEditing(false);
              }}>
              <Text style={styles.btnText}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#2ecc71',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default withData(Expenses);
