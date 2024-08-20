import React, { FC, useEffect, useState, useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '@components/Dictionary/Dashboard/DashboardScreen';
import AddWord from '@components/Dictionary/AddWord/AddWordScreen';
import BringToMind from '@components/Dictionary/BringToMind/BringToMindScreen';
import CheckYourself from '@components/Dictionary/CheckYourself/CheckYourselfScreen';
import {
  dictionaryObj,
  languageCodes,
} from "@constants/dictionary";

const linking = {
//   prefixes: ['http://localhost:8082/'], // Adjust to your local server or production domain
  config: {
    screens: {
      Dashboard: '',
      AddWord: 'add-word',
      BringToMind: 'bring-to-mind',
      CheckYourself: 'check-yourself',
    },
  },
};

const Stack = createNativeStackNavigator();

const Dictionary = () => {
  const [dictionary, setDictionary] = useState(dictionaryObj);
  const [translateFrom, setTranslateFrom] = useState<string>(languageCodes.ENG);
  const [translateTo, setTranslateTo] = useState<string>(languageCodes.RUS);

  const handleSaveTranslation = (
    newWord: string,
    translation: string,
    translateFrom: string,
    translateTo: string
  ) => {
    if (newWord && translation) {
      // Save direct and reverse translation to React State
      setDictionary((prev) => {
        const updatedDictionary = saveAndGetUpdatedDictionary(
          prev,
          newWord,
          translation,
          translateFrom,
          translateTo
        );

        saveDictionaryToStorage("dictionary", updatedDictionary);

        return updatedDictionary;
      });
    }
  };

  const handleDeleteTranslation = (
    newWord: string,
    translation: string,
    translateFrom: string,
    translateTo: string
  ) => {
    setDictionary((prev) => {
      const updatedDictionary = deleteAndGetUpdatedDictionary(
        prev,
        newWord,
        translation,
        translateFrom,
        translateTo
      );

      saveDictionaryToStorage("dictionary", updatedDictionary);

      return updatedDictionary;
    });
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddWord">
          {props => <AddWord title="Add Word"
            dictionary={dictionary}
            translateFrom={translateFrom}
            translateTo={translateTo}
            onSaveTranslation={handleSaveTranslation}
            onDeleteTranslation={handleDeleteTranslation}
            changeTranslateFrom={(v) => setTranslateFrom(v)}
            changeTranslateTo={(v) => setTranslateTo(v)}
          />}
        </Stack.Screen>
        <Stack.Screen name="BringToMind" component={BringToMind} />
        <Stack.Screen name="CheckYourself" component={CheckYourself} />
      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Dictionary;