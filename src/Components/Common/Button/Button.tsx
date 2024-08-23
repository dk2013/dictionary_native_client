import React, { FC, ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onSave: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onSave, children, disabled = false }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onSave} disabled={disabled} style={[styles.button, disabled && styles.disabledButton]}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
