import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

export default function AboutUs() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, padding: 20, backgroundColor: '#1B1B1C' }}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: 20,
                textAlign: 'center',
            }}>
                Sobre Nós
            </Text>

            <Image
                style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 8,
                    marginBottom: 20,
                }}
                source={{ uri: 'https://example.com/logo.png' }} // URL da imagem do logotipo ou imagem relevante
            />

            <Text style={{
                fontSize: 16,
                color: '#DEDEE3',
                textAlign: 'justify',
                marginBottom: 20,
            }}>
                Bem-vindo ao nosso aplicativo! Somos uma equipe dedicada a trazer a melhor experiência de música rock diretamente para você. Nossa missão é celebrar o legado do rock e trazer novas descobertas para os fãs do gênero. Fique à vontade para explorar e curtir!
            </Text>

            <Text style={{
                fontSize: 16,
                color: '#DEDEE3',
                textAlign: 'justify',
                marginBottom: 20,
            }}>
                Para mais informações, entre em contato conosco pelo e-mail: contato@rockapp.com
            </Text>
        </ScrollView>
    );
}
