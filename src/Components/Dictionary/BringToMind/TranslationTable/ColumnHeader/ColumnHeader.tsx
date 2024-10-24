import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fields, sortOrders } from "../TranslationTableModel";

interface ColumnHeaderProps {
  position: string;
  language: string;
  masked: string;
  onMaskToggle: (language: string) => void;
  onOrderToggle: (language: string) => void;
  sortByColumn: string;
  sortByField: keyof typeof fields;
  orderBy: sortOrders;
  onSortByFieldChange: (value: string) => void;
}

const ColumnHeader: FC<ColumnHeaderProps> = (props) => {
  const arrow = props.orderBy === sortOrders.DESC ? '⬇️' : '⬆️';

  return (
    <View style={styles.columnContainer}>
      <Text style={styles.languageTitle}>{props.language}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.onMaskToggle(props.language)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {props.masked === props.language ? 'unmask' : 'mask'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.onOrderToggle(props.language)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>sort by</Text>
          <Picker
            selectedValue={props.sortByField}
            onValueChange={(value: string) => props.onSortByFieldChange(value)}
            style={styles.picker}
          >
            {(Object.keys(fields) as Array<keyof typeof fields>).map((f) => (
              <Picker.Item key={f} label={fields[f]} value={f} />
            ))}
          </Picker>
          <Text style={styles.arrowText}>
            {props.language === props.sortByColumn ? arrow : ''}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  languageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: 150,
  },
  arrowText: {
    fontSize: 18,
  },
});

export default ColumnHeader;
