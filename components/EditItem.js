import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const EditItem = ({item, updateItem}) => {
  const [description, setDescription] = useState(item.text);
  const [amount, setAmount] = useState(String(item.amount));
  const onChangeDescription = value => setDescription(value);
  const onChangeAmount = value => setAmount(Number(value));
  const onUpdate = () => {
    updateItem({...item, text: description, amount});
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="description"
        value={description}
        onChangeText={onChangeDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="amount"
        keyboardType="numeric"
        value={amount && String(amount)}
        onChangeText={onChangeAmount}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onUpdate();
          setDescription('');
          setAmount('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default EditItem;
