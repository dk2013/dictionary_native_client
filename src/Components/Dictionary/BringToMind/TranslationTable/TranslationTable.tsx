import React, { FC, useEffect, useState, useCallback } from "react";
import { View, Text } from 'react-native';
import { languageCodes } from "@constants/dictionary";
import ColumnHeader from '@components/Dictionary/BringToMind/TranslationTable/ColumnHeader/ColumnHeader';
import Row from '@components/Dictionary/BringToMind/TranslationTable/Row/Row';
import LanguageSelector from '@components/Common/LanguageSelector/LanguageSelector';
import { fields, sortOrders, selectedColumns, positionColumns } from "./TranslationTableModel.ts";
import { sort } from "./utils";

interface TranslationTableProps {
  dictionary: tDictionary;
  translateFrom: string;
  translateTo: string;
  onSwapLanguages: () => void;
}


const TranslationTable = (props) => {
  const [masked, setMasked] = useState<string>(selectedColumns.NONE);
  const [sortByColumn, setSortByColumn] = useState<string>(languageCodes.ENG);
  const [sortByField, setSortByField] = useState<fields>(fields.NAME);
  const [orderBy, setOrderBy] = useState<sortOrders>(sortOrders.ASC);

  let sortedDictionary: SortedDictionary | null = null;

  // Sort a dictionary object (convert it to a sorted array)
  if (props.dictionary && props.translateFrom in props.dictionary) {
    sortedDictionary = Object.entries(props.dictionary[props.translateFrom]);

    sort(
      orderBy,
      sortByColumn,
      sortByField,
      sortedDictionary,
      props.translateFrom,
      props.translateTo
    );
  }

  const handleMaskToggle = (language: string) => {
    switch (language) {
      case masked:
        setMasked(languageCodes.NONE);
        break;
      default:
        setMasked(language);
    }
  };

  const handleOrderToggle = (language: string) => {
    switch (language) {
      case sortByColumn:
        // setOrderBy(languageCodes.NONE);
        if (orderBy === sortOrders.ASC) {
          setOrderBy(sortOrders.DESC);
        } else {
          setOrderBy(sortOrders.ASC);
        }
        break;
      default: // languageCodes.ENG
        setSortByColumn(language);
        setOrderBy(sortOrders.ASC);
    }
  };

  const handleSortByFieldChange = (value: fields) => {
    setSortByField(value);
  };

  return (
    <View>
      <View>
        <ColumnHeader
          position={positionColumns.LEFT}
          language={props.translateFrom}
          masked={masked}
          onMaskToggle={handleMaskToggle}
          onOrderToggle={handleOrderToggle}
          sortByColumn={sortByColumn}
          sortByField={sortByField}
          orderBy={orderBy}
          onSortByFieldChange={handleSortByFieldChange}
        />
        <LanguageSelector
          onSwapLanguages={props.onSwapLanguages}
          translateFrom={props.translateFrom}
          translateTo={props.translateTo}
        />
        <ColumnHeader
          position={positionColumns.RIGHT}
          language={props.translateTo}
          masked={masked}
          onMaskToggle={handleMaskToggle}
          onOrderToggle={handleOrderToggle}
          sortByColumn={sortByColumn}
          sortByField={sortByField}
          orderBy={orderBy}
          onSortByFieldChange={handleSortByFieldChange}
        />
      </View>
      <View>
        {sortedDictionary &&
          sortedDictionary.map(([k, v]) => (
            <Row
              key={k}
              word={k}
              translation={v[props.translateTo]?.[0].translation || ""}
              masked={masked}
              translateFrom={props.translateFrom}
              translateTo={props.translateTo}
            />
          ))}
      </View>
    </View>
  );
};

export default TranslationTable;