import { StyleSheet, View } from 'react-native';
import Index from './components/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF400',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
