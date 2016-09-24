import { Action, ActionReducer } from '@ngrx/store';
import { YearSummaryData } from '../../models';

export const SET_YEAR_SUMMARY = "SET_YEAR_SUMMARY";
export const REMOVE_YEAR_SUMMARY = "REMOVE_YEAR_SUMMARY";

const initialState = {
  totalImports: 0,
  totalExports: 0,
  countriesImportedFrom: 0,
  countriesExportedTo: 0
}

export const YearSummaryReducer: ActionReducer<YearSummaryData> = (state: YearSummaryData = initialState, action: Action) => {
  switch (action.type) {
    case SET_YEAR_SUMMARY:
      return action.payload;
    case REMOVE_YEAR_SUMMARY:
      return {};
    default:
      return state;
  }
}
