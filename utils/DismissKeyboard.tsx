import React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
