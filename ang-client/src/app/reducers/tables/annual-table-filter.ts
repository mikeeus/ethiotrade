import { Action, ActionReducer } from '@ngrx/store';
import { AnnualTableFilter } from '../../models';
import { initialAnnualTableFilter } from './helpers';

export const SET_TABLE_PAGE = "SET_TABLE_PAGE";
export const SET_TABLE_PAGELENGTH = "SET_TABLE_PAGELENGTH";
export const SET_TABLE_TYPE = "SET_TABLE_TYPE";
export const SET_TABLE_YEAR = "SET_TABLE_YEAR";
export const RESET_TABLE_FILTER = "RESET_TABLE_FILTER";
export const SET_TABLE_FILTER = "SET_TABLE_FILTER";

export const AnnualTableFilterReducer: ActionReducer<AnnualTableFilter> = (state: AnnualTableFilter = initialAnnualTableFilter, action: Action) => {
  switch (action.type) {
    case SET_TABLE_FILTER:
      return action.payload;
    case SET_TABLE_TYPE:
      return (<any>Object).assign({}, state, {type: action.payload, page: 1});
    case SET_TABLE_YEAR:
      return (<any>Object).assign({}, state, {year: action.payload, page: 1});
    case SET_TABLE_PAGE:
      return (<any>Object).assign({}, state, {page: action.payload});
    case SET_TABLE_PAGELENGTH:
      return (<any>Object).assign({}, state, {pageLength: action.payload, page: 1});
    case RESET_TABLE_FILTER:
      return initialAnnualTableFilter;
    default:
      return state;
  }
}
