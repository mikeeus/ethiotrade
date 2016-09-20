import { Action, ActionReducer } from '@ngrx/store';
import { AnnualTableFilter } from '../../models';

export const SET_TABLE_PAGE = "SET_TABLE_PAGE";
export const SET_TABLE_PAGE_LENGTH = "SET_TABLE_PAGE_LENGTH";
export const SET_TABLE_TYPE = "SET_TABLE_TYPE";
export const SET_TABLE_YEAR = "SET_TABLE_YEAR";
export const RESET_TABLE_FILTER = "RESET_TABLE_FILTER";

const initialState: AnnualTableFilter = {
  page: 1,
  pageLength: 20,
  type: 'Import',
  year: 2016
}

export const AnnualTableFilterReducer: ActionReducer<AnnualTableFilter> = (state: AnnualTableFilter = initialState, action: Action) => {
  switch (action.type) {
    // Sets the table filters, which should then dispatch SET_HSCODE_TABLE
    case SET_TABLE_TYPE:
      return (<any>Object).assign({}, state, {type: action.payload});
    case SET_TABLE_YEAR:
      return (<any>Object).assign({}, state, {year: action.payload});
    case SET_TABLE_PAGE:
      return (<any>Object).assign({}, state, {page: action.payload});
    case SET_TABLE_PAGE_LENGTH:
      return (<any>Object).assign({}, state, {pageLength: action.payload});
    case RESET_TABLE_FILTER:
      return initialState;
    default:
      return state;
  }
}
