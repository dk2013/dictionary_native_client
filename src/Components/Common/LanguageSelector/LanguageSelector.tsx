import React, { FC } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import "./styles.scss";
import { FaArrowRight } from "react-icons/fa";
import Icon from 'react-native-vector-icons/FontAwesome';

interface LanguageSelectorProps {
  onSwapLanguages: () => void;
  translateFrom: string;
  translateTo: string;
}

const LanguageSelector: FC<LanguageSelectorProps> = (props) => {
  return (
    <View style={styles.languageSelector}>
      <Text>{props.translateFrom} </Text>
        <TouchableOpacity onPress={props.onSwapLanguages}>
          <Icon name="arrow-right" size={40} color="#4F8EF7" />
        </TouchableOpacity>
      <Text> {props.translateTo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  languageSelector: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center the items vertically
  },
  text: {
//     fontSize: 16,
  },
});

export default LanguageSelector;
