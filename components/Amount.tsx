import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Amount = ({ calculate, totalAmount, totalTip, reset }: any) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Tip Amount / person</Text>
        <Text style={styles.textIcon}>
          <FontAwesome style={{ color: '#3AA3A0' }} name='dollar' size={24} />{' '}
          {totalTip.toFixed(2)}
        </Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Total Amount / person</Text>
        <Text style={styles.textIcon}>
          <FontAwesome style={{ color: '#3AA3A0' }} name='dollar' size={24} />{' '}
          {totalAmount.toFixed(2)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => calculate()}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: '#C9CFD0' }}
          onPress={() => reset()}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Amount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF2F3',
    margin: 20,
    height: '45%',
    borderRadius: 10,
  },
  amountContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
    alignItems: 'center',
  },
  amountText: {
    color: '#62CCC0',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textIcon: {
    fontSize: 24,
    color: '#3AA3A0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#3AA3A0',
    padding: 8,
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',

    borderColor: '#F9F8F0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  outcomeText: {
    color: '#1986A0',
  },
});
