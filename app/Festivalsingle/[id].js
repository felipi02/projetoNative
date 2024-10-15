import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import list from '../flex.json';

const images = {
    "festivais": require('../../assets/images/festivais.jpg'),
    "festivais1": require('../../assets/images/festivais1.jpg'),
    "festivais2": require('../../assets/images/festivais2.jpg'),
    "festivais3": require('../../assets/images/festivais3.jpg'),
    "festivais4": require('../../assets/images/festivais4.jpg'),
};

export default function FestivalSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listFlex.find((item) => item.id == id);

    if (!data) {
        return <Text style={{ color: '#fff' }}>Festival não encontrado</Text>;
    }

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
                source={images[data.image]} // Usa o mapeamento para a imagem
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
