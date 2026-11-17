import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Pokédex</Text>
      <Text style={styles.subtitle}>Primeira etapa concluída!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EF4444'
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    color: '#475569'
  }
});
