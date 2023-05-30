import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';

export default function App() {
  return (
    <View style={ styles.container }>
      <Logo/>
      <Text>Beegu é um app de transporte compartilhado</Text>
      <Text style={ styles.texto }>Faz o BEEBEEP!</Text>
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

  texto: {
    paddingBottom: 20,
  },
});
