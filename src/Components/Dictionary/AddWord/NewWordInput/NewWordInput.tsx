import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const NewWordInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onNewWordChange}
        onKeyPress={({ nativeEvent }) => props.onKeyDown(nativeEvent.key)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4,
  },
});

export default NewWordInput;
