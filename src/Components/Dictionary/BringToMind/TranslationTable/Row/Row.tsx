import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RowProps {
  word: string;
  translation: string;
  masked: string;
  translateFrom: string;
  translateTo: string;
}

const MASK = '---';

const Row: FC<RowProps> = (props) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.cell}>
        <Text>{props.masked === props.translateFrom ? MASK : props.word}</Text>
      </View>
      <View style={styles.cell}>
        <Text>{props.masked === props.translateTo ? MASK : props.translation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});

export default Row;
