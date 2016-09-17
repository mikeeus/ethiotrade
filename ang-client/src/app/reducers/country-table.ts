import { Action, ActionReducer } from '@ngrx/store';

export const SET_COUNTRY_TABLE = "SET_COUNTRY_TABLE";
export const SET_COUNTRY_PAGE = "SET_COUNTRY_PAGE";
export const SET_COUNTRY_PAGE_LENGTH = "SET_COUNTRY_PAGE_LENGTH";
export const SET_COUNTRY_TYPE = "SET_COUNTRY_TYPE";
export const SET_COUNTRY_YEAR = "SET_COUNTRY_YEAR";

class CountryTable {
  filter: {};
  table: any[];
  pages: number;
}

const initialState: CountryTable = {
  filter: {
    page: 1,
    page_length: 20,
    type: 'Import',
    year: 2016,
  },
  table: [],
  pages: 1
}

export const CountryTableReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {
    // Sets the table's data and get's total number of pages
    case SET_COUNTRY_TABLE:
      return Object.assign({}, state, {table: action.payload.table, pages: action.payload.pages});

    // Sets the table filters, which should then dispatch SET_COUNTRY_TABLE
    case SET_COUNTRY_PAGE:
      return Object.assign({}, state, {filter: {page: action.payload}});
    case SET_COUNTRY_PAGE_LENGTH:
      return Object.assign({}, state, {filter: {page_length: action.payload}});
    case SET_COUNTRY_TYPE:
      return Object.assign({}, state, {filter: {type: action.payload}});
    case SET_COUNTRY_YEAR:
      return Object.assign({}, state, {filter: {year: action.payload}});      
    default:
      return state;
  }
}
