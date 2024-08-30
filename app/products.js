import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import list from './products.json';

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
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.titleProduct}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                </Link>

            ))
            }

        </ScrollView >
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
        backgroundColor: '#1B1B1C',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#DEDEE3',
        borderRadius: 8,
        padding: 10,
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
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    },
});
