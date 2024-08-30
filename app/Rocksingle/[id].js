import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import list from '../products.json'

export default function RockSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listProduct.find(
        (item) => item.id == id)
    // console.log(data)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleProduct}>  {data.title} </Text>
            <Text style={styles.description}> {data.description} </Text>
            <Image
                style={styles.image}
                source={{ uri: data.image }}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#DEDEE3',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'justify',
        marginBottom: 10

    },
});