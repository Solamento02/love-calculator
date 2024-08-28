import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
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
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
