import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const TransferRequestDetail = () => {
    const items = [
        { DocEntry: 1945, ItemCode: "1003000000100002", Description: "Solvent Acetone 98%", LineNum: 2, Quantity: 30, TransferedQty: 0, FromWhs: "W02", ToWhs: "W07", DocDate: "2020-04-29T00:00:00" },
        { DocEntry: 1945, ItemCode: "1005000100200004", Description: "Harderner 19-0400-000", LineNum: 7, Quantity: 30, TransferedQty: 10, FromWhs: "W02", ToWhs: "W07", DocDate: "2020-04-29T00:00:00" },
    ]

    return (
        <View style={styles.container}>
            {/* <TextInput style={styles.input}
                placeholder="Search by Doc No."
                value={docNo}
                onChangeText={text => setDocNo(text)}
            /> */}

            {items.map(item => (
                <TouchableOpacity style={styles.item} key={item.DocEntry + item.LineNum}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text>#{item.LineNum}</Text>
                        <Text>Item: {item.Description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text>Open</Text>
                        <Text>From: {item.FromWhs} - To: {item.ToWhs}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "flex-end" }}>
                        <Text>Remain Quantity: {item.TransferedQty}/{item.Quantity}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        marginHorizontal: 10
    }
})

export default TransferRequestDetail
