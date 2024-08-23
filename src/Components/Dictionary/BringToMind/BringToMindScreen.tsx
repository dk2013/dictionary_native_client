import React, { FC } from "react";
import PageTemplate from '@components/Common/PageTemplate';
import TranslationTable from '@components/Dictionary/BringToMind/TranslationTable/TranslationTable';

const BringToMindScreen = (props) => {
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