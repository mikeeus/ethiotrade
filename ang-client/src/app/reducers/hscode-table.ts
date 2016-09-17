import { Action, ActionReducer } from '@ngrx/store';

export const SET_HSCODE_TABLE = "SET_HSCODE_TABLE";
export const SET_PAGE = "SET_PAGE";
export const SET_PAGE_LENGTH = "SET_PAGE_LENGTH";
export const SET_TYPE = "SET_TYPE";
export const SET_YEAR = "SET_YEAR";

class HscodeTable {
  filter: {};
  table: any[];
  pages: number;
}

const initialState: HscodeTable = {
  filter: {
    page: 1,
    page_length: 20,
    type: 'Import',
    year: 2016,
  },
  table: [],
  pages: 1
}

export const HscodeTableReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type) {
    // Sets the table's data and get's total number of pages
    case SET_HSCODE_TABLE:
      return Object.assign({}, state, {table: action.payload.table, pages: action.payload.pages});

    // Sets the table filters, which should then dispatch SET_HSCODE_TABLE
    case SET_PAGE:
      return Object.assign({}, state, {filter: {page: action.payload}});
    case SET_PAGE_LENGTH:
      return Object.assign({}, state, {filter: {page_length: action.payload}});
    case SET_TYPE:
      return Object.assign({}, state, {filter: {type: action.payload}});
    case SET_YEAR:
      return Object.assign({}, state, {filter: {year: action.payload}});      
    default:
      return state;
  }
}
