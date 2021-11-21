import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/PayBill';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={styles.text}>Pay the Bill</Text>
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#368980',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  text: {
    marginTop: 70,
    fontSize: 30,
    color: '#62CCC0',
    fontWeight: 'bold',
  },
});

export default App;
