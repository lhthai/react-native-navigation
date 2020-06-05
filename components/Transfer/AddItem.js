import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const AddItem = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by Doc No."
        value={item}
        onChangeText={text => setItem(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Search by Doc No."
        value={quantity}
        onChangeText={text => setQuantity(text)}
      />
      <Button title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginHorizontal: 15,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderRadius: 5,
  },
});

export default AddItem;
