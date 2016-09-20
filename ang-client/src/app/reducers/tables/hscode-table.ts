import { Action, ActionReducer } from '@ngrx/store';
import { Hscode, AnnualTableFilter, HscodeTableData } from '../../models';

export const SET_HSCODE_TABLE = "SET_HSCODE_TABLE";
export const SET_HSCODE_TYPE = "SET_HSCODE_TYPE";
export const SET_HSCODE_YEAR = "SET_HSCODE_YEAR";
export const SET_HSCODE_PAGE = "SET_HSCODE_PAGE";
export const SET_HSCODE_PAGE_LENGTH = "SET_HSCODE_PAGE_LENGTH";
export const RESET_HSCODE_TABLE = "RESET_HSCODE_TABLE";

const initialState: HscodeTableData = {
  table: [],
  pages: 1,
  filter: {
    page: 1,
    pageLength: 20,
    type: 'Import',
    year: 2016,
  },
}

export const HscodeTableReducer: ActionReducer<HscodeTableData> = (state: HscodeTableData = initialState, action: Action) => {
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
    // Reset table
    case RESET_HSCODE_TABLE:
      return initialState;
    default:
      return state;
  }
}
