import React, { FC, useEffect, useState, useCallback } from "react";
import { Text } from 'react-native';
import PageTemplate from '@components/Common/PageTemplate';
import LanguageSelector from '@components/Common/LanguageSelector/LanguageSelector';
import NewWordInput from '@components/Dictionary/AddWord/NewWordInput/NewWordInput';
import TranslationInput from '@components/Dictionary/AddWord/TranslationInput/TranslationInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '@components/Common/Button/Button';

const AddWord = (props) => {
  const [newWord, setNewWord] = useState<string>("");
  const [translation, setTranslation] = useState<string>("");
  const [translationExists, setTranslationExists] = useState<boolean>(false);

  const getTranslationFromDictionary = useCallback(
    (word: string, translateFrom: string, translateTo: string) => {
      return props.dictionary?.[translateFrom]?.[word]?.[translateTo]?.[0]
        .translation;
    },
    [props.dictionary]
  );

  useEffect(() => {
    const translatedWord = getTranslationFromDictionary(
      newWord,
      props.translateFrom,
      props.translateTo
    );

    setTranslationExists(translatedWord === translation);
  }, [
    newWord,
    translation,
    props.translateFrom,
    props.translateTo,
    getTranslationFromDictionary,
  ]);

  const handleNewWordChange = (enteredWord: string) => {
    setNewWord(enteredWord);
    const translatedWord = getTranslationFromDictionary(
      enteredWord,
      props.translateFrom,
      props.translateTo
    );

    setTranslation(translatedWord || "");
  };

  const handleTranslationChange = (enteredWord: string) => {
    setTranslation(enteredWord);
  };

  const handleKeyDown = (key: string) => {
    if (key === "Enter") {
      handleSave();
    }
  };

  const handleSave = () => {
    props.onSaveTranslation(
      newWord,
      translation,
      props.translateFrom,
      props.translateTo
    );
  };

  const handleSwapLanguages = () => {
    setNewWord(translation);

    const newTranslateTo = props.translateFrom;
    const newTranslateFrom = props.translateTo;
    const translatedWord = getTranslationFromDictionary(
      translation,
      newTranslateFrom,
      newTranslateTo
    );

    setTranslation(translatedWord || "");
    props.changeTranslateFrom(newTranslateFrom);
    props.changeTranslateTo(newTranslateTo);
  };

  const handleDelete = () => {
    props.onDeleteTranslation(
      newWord,
      translation,
      props.translateFrom,
      props.translateTo
    );

    setNewWord("");
    setTranslation("");
  };

  return (
    <PageTemplate title="Add Word">
      <LanguageSelector
        translateFrom={props.translateFrom}
        translateTo={props.translateTo}
        onSwapLanguages={handleSwapLanguages}
      />
      <NewWordInput
        value={newWord}
        onNewWordChange={(v) => handleNewWordChange(v)}
        onKeyDown={handleKeyDown}
      />
      <Button
        onSave={handleDelete}
        disabled={!newWord || !translation || !translationExists}
      >
        <Icon name="delete-outline" size={30} color="#000" />
      </Button>
      <TranslationInput
        value={translation}
        onTranslationChange={(v) => handleTranslationChange(v)}
        onKeyDown={handleKeyDown}
      />
      <Button
        onSave={handleSave}
        disabled={!newWord || !translation || translationExists}
      >
        Save translation
      </Button>
    </PageTemplate>
  );
};

export default AddWord;
