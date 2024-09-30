import React from 'react';
import { Text, View, Image, Pressable, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importar o conjunto de ícones desejado  

export default function Index() {
return (
<ImageBackground source={require('../assets/images/Disco-2.png')} style={styles.background}>
<View style={styles.container}>
  <Text style={styles.headerText}>Record Store</Text>

  <Link href="../products" style={styles.button} asChild>
    <Pressable accessibilityLabel="Acessar record store" style={styles.button}>
      <Icon name="music" size={25} />
      <Text style={styles.buttonText}>Acessar record store</Text>
    </Pressable>
  </Link>

   <Link href="/about2" style={styles.button} asChild>
    <TouchableOpacity>
      <Icon name="music" size={25}/>
      <Text style={styles.buttonText}>Sobre Nos</Text>
    </TouchableOpacity>
  </Link>


  <Link href="/about3" style={styles.button} asChild>
    <TouchableOpacity>
      <Icon name="music" size={25}/>
      <Text style={styles.buttonText}>Musicas</Text>
    </TouchableOpacity>
  </Link>

  <Link href="/flex" style={styles.button} asChild>
    <TouchableOpacity>
      <Icon name="music" size={25}/>
      <Text style={styles.buttonText}>festivais</Text>
    </TouchableOpacity>
  </Link> 

</View>
</ImageBackground>
);
}

const COLORS = {
  background: '#DEDEE3',
  text: '#fff',
  buttonBackground: '#DEDEE3',
  buttonText: '#1B1B1C',
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
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: COLORS.text,
    fontSize: SIZES.fontSize,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
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
    // position: 'absolute',
    bottom: 0,
    width: '100%',
    margin: 20,
    backgroundColor: COLORS.buttonBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.paddingVertical,
    borderRadius: 15,
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
