import { Action, ActionReducer } from '@ngrx/store';

export const SET_HSCODE_TABLE = "SET_HSCODE_TABLE";
export const SET_HSCODE_PAGE = "SET_HSCODE_PAGE";
export const SET_HSCODE_PAGE_LENGTH = "SET_HSCODE_PAGE_LENGTH";
export const SET_HSCODE_TYPE = "SET_HSCODE_TYPE";
export const SET_HSCODE_YEAR = "SET_HSCODE_YEAR";

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
      return (<any>Object).assign({}, state, {table: action.payload.table, pages: action.payload.pages});

    // Sets the table filters, which should then dispatch SET_HSCODE_TABLE
    case SET_HSCODE_PAGE:
      return (<any>Object).assign({}, state, {filter: {page: action.payload}});
    case SET_HSCODE_PAGE_LENGTH:
      return (<any>Object).assign({}, state, {filter: {page_length: action.payload}});
    case SET_HSCODE_TYPE:
      return (<any>Object).assign({}, state, {filter: {type: action.payload}});
    case SET_HSCODE_YEAR:
      return (<any>Object).assign({}, state, {filter: {year: action.payload}});      
    default:
      return state;
  }
}
