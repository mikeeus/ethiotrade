import { Action, ActionReducer } from '@ngrx/store';
import { TopTenData, TopTenTableData } from '../../models';
import { setTTCountries } from './helpers';

export const SET_TT_COUNTRIES_IMPORT = "SET_TT_COUNTRIES_IMPORT";
export const REMOVE_TT_COUTNRIES_IMPORT = "REMOVE_TT_COUTNRIES_IMPORT";

const initialState: TopTenData = {
  chart: {data: [], label: ''},
  labels: [],
  table: []
}

export const TTCountriesImportReducer: ActionReducer<TopTenData> = (state: TopTenData = initialState, action: Action) => {
  switch (action.type) {

    case SET_TT_COUNTRIES_IMPORT:
      return setTTCountries('Import', action.payload);

    case REMOVE_TT_COUTNRIES_IMPORT:
      return initialState;
    default:
      return state;
  }
}
