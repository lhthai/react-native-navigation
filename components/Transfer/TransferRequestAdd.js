import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const TransferRequestAdd = () => {
  const [item, setItem] = useState({
    DocEntry: 1945,
    ItemCode: '1005000100200004',
    Description: 'Harderner 19-0400-000',
    LineNum: 7,
    Quantity: 30,
    TransferedQty: 10,
    FromWhs: 'W02',
    ToWhs: 'W07',
    DocDate: '2020-04-29T00:00:00',
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Quantity"
        value={item}
        onChangeText={text => setItem({...item, Quantity: text})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 15,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  item: {
    padding: 15,
    backgroundColor: '#ddd',
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default TransferRequestAdd;
