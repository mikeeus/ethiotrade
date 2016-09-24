import { Action, ActionReducer } from '@ngrx/store';
import { YearChartsTablesData } from '../../models';

export const SET_YEAR_CHARTS_TABLES = "SET_YEAR_CHARTS_TABLES";
export const REMOVE_YEAR_CHARTS_TABLES = "REMOVE_YEAR_CHARTS_TABLES";

const initialState = {
  topTenCountriesImport: [],
  topTenCountriesExport: [],
  topTenHscodesImport: [],
  topTenHscodesExport: []
}

export const YearChartsTablesReducer: ActionReducer<YearChartsTablesData> = (state: YearChartsTablesData = initialState, action: Action) => {
  switch (action.type) {
    case SET_YEAR_CHARTS_TABLES:
      return action.payload;
    case REMOVE_YEAR_CHARTS_TABLES:
      return {};
    default:
      return state;
  }
}
