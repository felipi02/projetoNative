import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import list from '../flex.json';

export default function FestivalSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listFlex.find((item) => item.id == id);

    return (
        <ScrollView contentContainerStyle={{ flex: 1, padding: 20, backgroundColor: '#1B1B1C' }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 10,
                marginTop: 20,
                textAlign: 'center',
            }}>
                {data.title}
            </Text>
            <Image
                style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 8,
                    marginBottom: 20,
                }}
                source={{ uri: data.image }}
            />
            <Text style={{
                marginTop: 5,
                fontSize: 14,
                textAlign: 'justify',
                marginBottom: 10,
                color: '#DEDEE3',
            }}>
                {data.description}
            </Text>
        </ScrollView>
    );
}
