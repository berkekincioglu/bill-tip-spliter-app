import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import DismissKeyboard from '../utils/DismissKeyboard';

import Amount from './Amount';

const Card = () => {
  const [bill, setBill] = useState(' ');
  const [totalPerson, setTotalPerson] = useState(1);
  const [percentageTip, setTipPercentage] = useState(0.5);
  const [totalTip, setTotalTip] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalTip = () => {
    const tip = (+bill * percentageTip) / totalPerson;
    setTotalTip(tip);
  };

  const calculateTotalAmount = () => {
    setTotalAmount((+bill + totalTip) / totalPerson);
  };
  const reset = () => {
    setBill('');
    setTotalPerson(1);
    setTipPercentage(1);
    setTotalTip(0);
    setTotalAmount(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bill</Text>
      <DismissKeyboard>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setBill}
            value={bill}
            keyboardType='numeric'
            placeholder='0'
          />

          <Feather
            style={styles.icon}
            name='dollar-sign'
            size={24}
            color='black'
          />
        </View>
      </DismissKeyboard>
      <DismissKeyboard>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTotalPerson(+text)}
            value={totalPerson.toString()}
            keyboardType='numeric'
            placeholder='0'
          />

          <Ionicons
            style={{ ...styles.icon, marginRight: 4 }}
            name='people'
            size={24}
            color='black'
          />
        </View>
      </DismissKeyboard>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ ...styles.text, fontSize: 15 }}>Select Tip %</Text>
          <Text
            style={{
              ...styles.text,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {percentageTip}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTipPercentage(0.5);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.buttonText}>5%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTipPercentage(0.1);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.buttonText}>10%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTipPercentage(0.15);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.buttonText}>15%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTipPercentage(0.2);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.buttonText}>20%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTipPercentage(0.25);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.buttonText}>25%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setTipPercentage(0.5);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.buttonText}>50%</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Amount
        totalAmount={totalAmount}
        totalTip={totalTip}
        calculate={() => {
          calculateTotalAmount();
          calculateTotalTip();
        }}
        reset={reset}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '80%',
    backgroundColor: '#BFD2D0',
    borderRadius: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    color: '#F4F7F0',
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 12,
    minWidth: '90%',
    backgroundColor: '#EDF2F3',
    padding: 10,
    borderRadius: 10,
    color: '#62CCC0',
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: '#62CCC0',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#3AA3A0',
    padding: 8,
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',

    borderColor: '#F9F8F0',
  },
  buttonText: {
    fontSize: 19,
    color: '#F9F8F0',
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: 'black',
    padding: 8,
    width: 60,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',

    borderColor: '#F9F8F0',
  },
});
export default Card;
