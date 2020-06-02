import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const TransferRequest = ({navigation}) => {
  const [docNo, setDocNo] = useState('');
  const items = [
    {DocNum: 1990, Lines: 5, Transfered: 3, DocDate: '2020-04-29T00:00:00'},
    {DocNum: 1991, Lines: 10, Transfered: 3, DocDate: '2020-04-309T00:00:00'},
    {DocNum: 1982, Lines: 12, Transfered: 10, DocDate: '2020-05-15T00:00:00'},
    {DocNum: 1983, Lines: 20, Transfered: 0, DocDate: '2020-05-29T00:00:00'},
  ];

  const fildteredItems = items.filter(item => {
    return (
      item.DocNum.toString()
        .toLocaleLowerCase()
        .indexOf(docNo.toLowerCase()) !== -1
    );
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by Doc No."
        value={docNo}
        onChangeText={text => setDocNo(text)}
      />

      {fildteredItems.map(item => (
        <TouchableOpacity
          style={styles.item}
          key={item.DocNum}
          onPress={() => navigation.navigate('TransferRequestDetail')}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Doc No.: {item.DocNum}</Text>
            <Text>Date: {item.DocDate.substring(0, 10)}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Lines: {item.Lines}</Text>
            <Text>Transfered: {item.Transfered}</Text>
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
