import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/layaout/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
       <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
