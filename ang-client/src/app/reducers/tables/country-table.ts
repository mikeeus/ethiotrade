import { Action, ActionReducer } from '@ngrx/store';
import { Country, CountryTableData } from '../../models';

export const SET_COUNTRY_TABLE = "SET_COUNTRY_TABLE";
export const RESET_COUNTRY_TABLE = "RESET_COUNTRY_TABLE";

const initialState: CountryTableData = {
  table: [],
  pages: [1]
}

export const CountryTableReducer: ActionReducer<CountryTableData> = (state: CountryTableData = initialState, action: Action) => {
  switch (action.type) {
    // Sets the table's data and get's total number of pages
    case SET_COUNTRY_TABLE:
      return (<any>Object).assign({}, state, {table: action.payload.table, pages: action.payload.pages});    
    // Reset table
    case RESET_COUNTRY_TABLE:
      return initialState;
    default:
      return state;
  }
}
