import React, { FC } from "react";
import { tDictionary } from "../../../Types/dictionary";
import PageTemplate from '@components/Common/PageTemplate';
import TranslationTable from '@components/Dictionary/BringToMind/TranslationTable/TranslationTable';

interface BringToMindProps {
  title?: string;
  dictionary: tDictionary;
  translateFrom: string;
  translateTo: string;
  changeTranslateFrom: (v: string) => void;
  changeTranslateTo: (v: string) => void;
}

const BringToMindScreen: FC<BringToMindProps> = (props) => {
  const handleSwapLanguages = () => {
    const newTranslateTo = props.translateFrom;
    const newTranslateFrom = props.translateTo;

    props.changeTranslateFrom(newTranslateFrom);
    props.changeTranslateTo(newTranslateTo);
  };

  return (
    <PageTemplate title="Bring To Mind">
      <TranslationTable
        dictionary={props.dictionary}
        translateFrom={props.translateFrom}
        translateTo={props.translateTo}
        onSwapLanguages={handleSwapLanguages}
      />
    </PageTemplate>
  );
};

export default BringToMindScreen;