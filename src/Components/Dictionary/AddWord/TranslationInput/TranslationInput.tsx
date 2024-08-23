import React, { FC } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface TranslationProps {
  value: string;
  onTranslationChange: (e: string) => void;
  onKeyDown: (key: string) => void;
}

const TranslationInput: FC<TranslationProps> = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onTranslationChange}
//         onKeyPress={({ nativeEvent }) => props.onKeyDown(nativeEvent.key)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default TranslationInput;
