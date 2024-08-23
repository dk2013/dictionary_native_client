import { languageCodes } from "@constants/dictionary";

export const selectedColumns = {
  ...languageCodes,
  NONE: "NONE",
};

export const positionColumns = {
  LEFT: "LEFT",
  RIGHT: "RIGHT",
};

export enum fields {
  NAME = "name",
  MODIFIED = "modified",
}

export const enum sortOrders {
  ASC = "ASC",
  DESC = "DESC",
}
