import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TransferRequestDetail = ({navigation}) => {
  const items = [
    {
      DocEntry: 1945,
      ItemCode: '1003000000100002',
      Description: 'Solvent Acetone 98%',
      LineNum: 2,
      Quantity: 30,
      TransferedQty: 0,
      FromWhs: 'W02',
      ToWhs: 'W07',
      DocDate: '2020-04-29T00:00:00',
    },
    {
      DocEntry: 1945,
      ItemCode: '1005000100200004',
      Description: 'Harderner 19-0400-000',
      LineNum: 7,
      Quantity: 30,
      TransferedQty: 10,
      FromWhs: 'W02',
      ToWhs: 'W07',
      DocDate: '2020-04-29T00:00:00',
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {items.map(item => (
        <TouchableOpacity
          style={styles.item}
          //   onPress={() => navigation.navigate('TransferRequestAdd')}
          key={item.DocEntry + item.LineNum}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>#{item.LineNum}</Text>
            <Text>Item: {item.Description}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Open</Text>
            <Text>
              From: {item.FromWhs} - To: {item.ToWhs}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text>Instock: 1000</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text>
              Transfered Quantity: {item.TransferedQty}/{item.Quantity}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Icon name="minus-circle" size={20} color="#009387" />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              //   placeholder="Quantity"
              value={item}
              //   onChangeText={text => setItem({...item, Quantity: text})}
            />
            <Icon name="plus-circle" size={20} color="#009387" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 0,
    padding: 0,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default TransferRequestDetail;
