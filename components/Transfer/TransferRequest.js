import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView
} from 'react-native';
import apiURL from '../../apiUrl'

const TransferRequest = ({ navigation }) => {
  const [docNo, setDocNo] = useState('');
  const [items, setItems] = useState([])

  const getItems = async () => {
    try {
      const { data } = await axios.get(`${apiURL}/api/inventorytransferrequest/`)
      setItems(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  const fildteredItems = items.filter(item => {
    return (
      item.docNum.toString()
        .toLocaleLowerCase()
        .indexOf(docNo.toLowerCase()) !== -1
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by Doc No."
        value={docNo}
        onChangeText={text => setDocNo(text)}
      />
      <ScrollView>
        {fildteredItems.map(item => (
          <TouchableOpacity
            style={styles.item}
            key={item.docNum}
            onPress={() => navigation.navigate('TransferRequestDetail', { docNum: item.docNum })}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Doc No: {item.docNum}</Text>
              <Text>Date: {item.docDate.substring(0, 10)}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Lines: {item.lines}</Text>
              <Text>Transfered: {item.transfered}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </SafeAreaView>
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

export default TransferRequest;
