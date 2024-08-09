import React from 'react';
import { Text, View, Image, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar o conjunto de ícones desejado  

export default function Index() {
  return (
    <ImageBackground source={require('../assets/images/Disco-2.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Record Store</Text>
        {/* <Image
          style={styles.image}
          source={require('../assets/images/Disco-1.png')}
        /> */}
        {/* <Text style={styles.subHeaderText}>Rock and Row</Text> */}
        <Link href="../products" style={styles.button} asChild>
          <Pressable accessibilityLabel="Acessar record store" style={styles.buttonContent}>
            <Icon name="music" size={30} /> {/* Adicionando o ícone */}
            <Text style={styles.buttonText}>Acessar record store</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const COLORS = {
  background: '#0D1C26',
  text: '#fff',
  buttonBackground: '#1B1B1C',
  buttonText: '#DEDEE3',
};

const SIZES = {
  fontSize: 20,
  buttonFontSize: 18,
  imageWidth: 240,
  imageHeight: 180,
  paddingVertical: 15,
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',  // Ajusta a imagem para cobrir o fundo
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: COLORS.text,
    fontSize: SIZES.fontSize,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 10, 
    borderRadius:5,
    fontFamily: 'custom-font',
  },
  image: {
    width: SIZES.imageWidth,
    height: SIZES.imageHeight,
  },
  subHeaderText: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: COLORS.text,
    fontSize: SIZES.fontSize,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: COLORS.buttonBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.paddingVertical,
    borderRadius: 15,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: SIZES.buttonFontSize,
    color: COLORS.buttonText,
    fontWeight: 'bold',
    marginLeft: 8,  // Adiciona espaço entre o ícone e o texto
  },
});
