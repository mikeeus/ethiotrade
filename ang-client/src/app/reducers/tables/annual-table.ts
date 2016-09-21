import { Action, ActionReducer } from '@ngrx/store';
import { AnnualTableData } from '../../models';

export const SET_ANNUAL_TABLE = "SET_ANNUAL_TABLE";
export const RESET_ANNUAL_TABLE = "RESET_ANNUAL_TABLE";

const initialState: AnnualTableData = {
  table: [],
  pages: [1]
}

export const AnnualTableReducer: ActionReducer<AnnualTableData> = (state: AnnualTableData = initialState, action: Action) => {
  switch (action.type) {
    // Sets the table's data and get's total number of pages
    case SET_ANNUAL_TABLE:
      return (<any>Object).assign({}, state, {table: action.payload.table, pages: action.payload.pages});    
    // Reset table
    case RESET_ANNUAL_TABLE:
      return initialState;
    default:
      return state;
  }
}
