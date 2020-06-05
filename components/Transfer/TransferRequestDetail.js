import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  ToastAndroid,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import apiURL from '../../apiUrl'

const TransferRequestDetail = ({ route, navigation }) => {
  const { docNum } = route.params;
  const [batchCode, setBatchcode] = useState('');
  const [items, setItems] = useState([])

  const getItem = async () => {
    try {
      const { data } = await axios.get(`${apiURL}/api/inventorytransferrequest/${docNum}`)
      setItems(data)
    } catch (error) {
      console.log(error)
    }
  }

  const itemExists = item => {
    return items.some(el => el.itemCode == item)
  }

  useEffect(() => {
    setBatchcode('')
    getItem()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item or Serial"
        value={batchCode}
        autoFocus
        onChangeText={text => {
          setBatchcode(text.split(',')[1])
          if (itemExists(batchCode)) {
            navigation.navigate('TransferRequestAdd')
          } else if (batchCode && batchCode.length >= 15) {
            let date = new Date()
            let timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            Alert.alert(
              `Error ${date.toLocaleDateString()} ${timestamp}`,
              "Invalid product!",
              [
                { text: "OK", onPress: () => setBatchcode('') }
              ],
              { cancelable: false }
            );
          }
        }}
      />
      <ScrollView>
        {items.map(item => (
          <TouchableOpacity
            style={styles.item}
            //   onPress={() => navigation.navigate('TransferRequestAdd')}
            key={item.docEntry + item.lineNum}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>#{item.lineNum}</Text>
              <Text >Item: {item.itemCode}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Open</Text>
              <Text style={{ maxWidth: '75%' }}>Name: {item.dscription}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text>
                From: {item.fromWhsCod} - To: {item.whsCode}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>
                Quantity: 0/{item.quantity}
              </Text>
              <Text>Instock: {item.inStock}</Text>
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
    textAlign: "center",
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

export default TransferRequestDetail;
