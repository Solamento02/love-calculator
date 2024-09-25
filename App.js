import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, TextInput, View, Button, Alert, Pressable } from 'react-native';
import localImage from './assets/amorados.png';

export default function App() {
    const [nome1, setNome1 ] = useState('');
    const [nome2, setNome2 ] = useState('');

    const CalcConexao = () => {
      if (!nome1 || !nome2) {
        Alert.alert('Erro', 'Por favor preencha os dois campos!!');
        return;
      }

      //Para colocar dois nomes específicos:
      let porcentagem;
      if ((nome1.toLowerCase() === 'crowley' && nome2.toLowerCase() === 'aziraphale') ||
          (nome1.toLowerCase() === 'aziraphale' && nome2.toLowerCase() === 'crowley')) {
            porcentagem = 99;
          } else {
            porcentagem = Math.floor(Math.random() * 101)
          }

      Alert.alert('Resultado da Conexão', `A conexão entre ${nome1} e ${nome2} é ${porcentagem}%`);
    };

    const Limpar = () => {
      setNome1('');
      setNome2('');
    };

    return (
      <View style={styles.container}>
        <ImageBackground source={localImage} style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.label}>Nome 1</Text>
            <TextInput
              style={styles.input}
              value={nome1}
              onChangeText={setNome1}
              placeholder="Pessoa 1"
            />
            <Text style={styles.label}>Nome 2</Text>
            <TextInput
              style={styles.input}
              value={nome2}
              onChangeText={setNome2}
              placeholder="Pessoa 2"
            />
            <Pressable style={styles.button} onPress={CalcConexao}>
              <Text style={styles.text}>Calcular Conexão</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={Limpar}>
              <Text style={styles.text}>Tentar de novo</Text>
            </Pressable>
          </View>
          </ImageBackground>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 22,
    color: 'white',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    width: 200,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 22,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    backgroundColor: '#8F3F2E',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
