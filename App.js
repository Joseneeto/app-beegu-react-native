import { StyleSheet, View } from 'react-native';
import Index from './components/Index';
import Home from './components/Home';

export default function App() {
  return (
    // <View style={styles.containerYellow}>
    //   <Index />
    // </View>

    <View style={styles.containerWhite}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  containerYellow: {
    flex: 1,
    backgroundColor: '#FEDF00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerWhite: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
