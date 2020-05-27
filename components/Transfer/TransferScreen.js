import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TransferScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ margin: 20, textAlign: "center" }}>Please choose type of transfer:</Text>
            <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("TransferRequestList")}>
                <Text>Base on Inventory Transfer Request</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text>Transfer Finish Goods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text>Transfer Material with batch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text>Transfer Material without batch</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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

export default TransferScreen
