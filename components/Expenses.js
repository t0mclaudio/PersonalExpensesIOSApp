import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {uuid} from 'uuidv4';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {id: uuid(), date: new Date(), text: 'Milk', amount: 100},
    {id: uuid(), date: new Date(), text: 'Eggs', amount: 100},
    {id: uuid(), date: new Date(), text: 'Juice', amount: 100},
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
        renderItem={({item}) => <Expense item={item} />}
      />
    </View>
  );
};

const Expense = ({item}) => {
  let date = `${item.date.getMonth() + 1}/${item.date.getDate()}`;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View>
          <Text style={styles.text}>{`₱${item.amount}`}</Text>
        </View>
        <View style={styles.icons}>
          <Icon style={styles.icon} name="pencil" size={16} color="#3498db" />
          <Icon style={styles.icon} name="remove" size={16} color="#e74c3c" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
  },
  date: {
    color: '#bdc3c7',
  },
  text: {
    color: '#34495e',
    fontSize: 14,
  },
  ItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  icon: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 12,
  },
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
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

export default Expenses;
