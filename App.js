import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { bancoExterno } from './firebaseConnection';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('Carregando...');

  useEffect(() => {
    async function pegarDados() {
      const referencia = doc(bancoExterno, "aparelhos", "1")

      getDoc(referencia)
        .then((snap) => {
          setNome(snap.data()?.TV)

        })

        .catch((erro) => {
          console.log(erro)
        })
    }
    pegarDados();

  }, [])


  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}>Informação: {nome}, {nome2}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
