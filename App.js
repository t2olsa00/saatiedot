import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';
import React from 'react';
import Position from './components/Position';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current position</Text>
      <Position />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
