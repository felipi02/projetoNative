// Cadastro.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Importa o Firestore configurado

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = async () => {
        if (!name || !email || !password) {
            Alert.alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Adiciona um novo documento à coleção "usuario"
            await addDoc(collection(db, 'usuario'), {
                name,
                email,
                password,
            });
            Alert.alert('Usuário cadastrado com sucesso!');
            // Limpar os campos após o cadastro
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
            Alert.alert('Erro ao cadastrar usuário. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cadastro de Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
        borderColor: '#DDD',
        borderWidth: 1,
    },
});
