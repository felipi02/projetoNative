import React from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import list from './products.json';

// Importando as imagens diretamente
const images = {
  "music-1": require('../assets/images/music-1.jpg'),
  "music-2": require('../assets/images/music-2.jpg'),
  "music-3": require('../assets/images/music-3.jpg'),
  "music-4": require('../assets/images/music-4.jpg'),
  "music-5": require('../assets/images/music-5.jpg'),
  "music-6": require('../assets/images/music-6.jpg'),
};
console.log('Dados do JSON:', list.listProduct);

export default function Products() {

    return (
        <ScrollView style={styles.container}> 
            <Text style={styles.title}>
                Os melhores do Rock
            </Text>

            {list.listProduct.map((item) => (
                <Link
                    key={item.id}
                    href={{
                        pathname: "/Rocksingle/[id]",
                        params: { id: item.id }
                    }}>
                    <View style={styles.itemContainer}>
                        <Image source={images[item.image]} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.titleProduct}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                </Link>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20,
        color: '#fff', fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1B1B1C', // Cor de fundo principal
    },
    itemContainer: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#DEDEE3', // Cor de fundo para o item
        borderRadius: 8,
        padding: 10,
        
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',  // Centraliza o texto
        paddingVertical: 10,       // Espaçamento vertical
    },
    
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
   
        titleProduct: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',  // Preto
        },
        description: {
            marginTop: 5,
            fontSize: 14,
            color: '#333',  // Cor escura
        },
    });
    
