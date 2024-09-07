import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  // Input nomes
  const [nome1, setNome1] = useState('');
  const [nome2, setNome2] = useState('');

  // Função para calcular a porcentagem aleatória de conexão
  const calcularConexao = () => {
    // Validação para garantir que ambos os nomes não estejam vazios
    if (!nome1 || !nome2) {
      Alert.alert('Erro', 'Por favor, preencha ambos os campos.');
      return;
    }
    
    // Gerar uma porcentagem aleatória entre 0 e 100
    const porcentagem = Math.floor(Math.random() * 101);
    
    // Exibir o resultado em um alerta
    Alert.alert('Resultado da Conexão', `A conexão entre "${nome1}" e "${nome2}" é ${porcentagem}%`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titulo}>Loveometro</Text>
      </View>
      <Text style={styles.label}>Nome 1</Text>
      <TextInput
        style={styles.input}
        value={nome1}
        onChangeText={setNome1}
        placeholder="Digite o primeiro nome"
      />
      <Text style={styles.label}>Nome 2</Text>
      <TextInput
        style={styles.input}
        value={nome2}
        onChangeText={setNome2}
        placeholder="Digite o segundo nome"
      />
      <Button title="Calcular Conexão" onPress={calcularConexao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 22,
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 22,
  },
});
