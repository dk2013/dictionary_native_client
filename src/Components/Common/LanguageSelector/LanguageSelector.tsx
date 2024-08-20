import React, { FC } from "react";
import { Text } from 'react-native';
// import "./styles.scss";
import { FaArrowRight } from "react-icons/fa";
import Icon from 'react-native-vector-icons/FontAwesome';


// interface LanguageSelectorProps {
//   onSwapLanguages: () => void;
//   translateFrom: string;
//   translateTo: string;
// }

const LanguageSelector = (props) => {
  return (
    <Text>
      {props.translateFrom}{" "}
      <Icon name="arrow-right" size={40} color="#4F8EF7" />{" "}
      {props.translateTo}
    </Text>
  );
};

export default LanguageSelector;
