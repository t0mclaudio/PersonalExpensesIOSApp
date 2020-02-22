import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Expense = ({item, remove, pressEdit}) => {
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
          <Icon
            style={styles.icon}
            name="pencil"
            size={16}
            color="#3498db"
            onPress={() => pressEdit(item.id)}
          />
          <Icon
            style={styles.icon}
            name="remove"
            size={16}
            color="#e74c3c"
            onPress={() => remove(item.id)}
          />
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
});

export default Expense;
