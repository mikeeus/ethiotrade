import { Action, ActionReducer } from '@ngrx/store';
import { CountryStatsData } from '../../models';

export const SET_COUNTRY_STATS = "SET_COUNTRY_STATS";
export const REMOVE_COUNTRY_STATS = "REMOVE_COUNTRY_STATS";

const initialState = {
  avgAnnualImports: 0,
  avgAnnualExports: 0,
  totalImports: 0,
  totalExports: 0
}

export const CountryStatsReducer: ActionReducer<CountryStatsData> = (state: CountryStatsData = initialState, action: Action) => {
  switch (action.type) {
    case SET_COUNTRY_STATS:
      return action.payload;
    case REMOVE_COUNTRY_STATS:
      return {};
    default:
      return state;
  }
}
