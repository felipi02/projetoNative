import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function AboutUs() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Sobre Nós</Text>

      <Text style={styles.paragraph}>
        Nós somos apaixonados por ajudar animais a encontrarem um novo lar. Nossa missão é conectar pessoas que
        desejam adotar com aqueles que precisam de uma família amorosa.
      </Text>

      <Text style={styles.subheading}>Nossa História</Text>
      <Text style={styles.paragraph}>
        O aplicativo foi criado por uma equipe que compartilha o amor pelos animais. Com o objetivo de facilitar
        o processo de adoção, trabalhamos duro para oferecer uma plataforma confiável e acessível.
      </Text>

      <Text style={styles.subheading}>Missão e Visão</Text>
      <Text style={styles.paragraph}>
        Nossa missão é criar um impacto positivo na vida dos animais, ajudando-os a encontrar um lar amoroso. 
        Nossa visão é um mundo onde cada animal tenha uma família para chamar de sua.
      </Text>

      <Text style={styles.subheading}>Nossa Equipe</Text>
      <Text style={styles.paragraph}>
        Nossa equipe é formada por profissionais dedicados à causa animal, com experiência em desenvolvimento 
        de aplicativos e no resgate de animais.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => openLink('https://seusite.com/contato')}>
        <Text style={styles.buttonText}>Entre em Contato</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    lineHeight: 22,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#1B1B1C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
