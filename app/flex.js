import { Text, ScrollView, View, Image } from "react-native";
import { Link } from "expo-router";
import list from './flex.json';

export default function FlexList() {
    return (
        <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#1B1B1C' }}>
            <Text style={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 20,
                marginTop: 20,
                color: '#fff',
                fontSize: 20
            }}>
                Os melhores do Rock
            </Text>

            {list.listFlex.map((item) => (
                <Link
                    key={item.id}
                    href={{
                        pathname: "./Festivalsingle/[id]",
                        params: { id: item.id }
                    }}>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 20,
                        backgroundColor: '#DEDEE3',
                        borderRadius: 8,
                        padding: 10,
                    }}>
                        <Image 
                            source={{ uri: item.image }} 
                            style={{ 
                                width: 100, 
                                height: 100, 
                                borderRadius: 8 
                            }} 
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>
                                {item.title}
                            </Text>
                            <Text style={{
                                marginTop: 5,
                                fontSize: 14,
                            }}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                </Link>
            ))}
        </ScrollView>
    );
}
