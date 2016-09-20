import { Action, ActionReducer } from '@ngrx/store';
import { Hscode, AnnualTableFilter, HscodeTableData } from '../../models';

export const SET_HSCODE_TABLE = "SET_HSCODE_TABLE";
export const RESET_HSCODE_TABLE = "RESET_HSCODE_TABLE";

const initialState: HscodeTableData = {
  table: [],
  pages: [1]
}

export const HscodeTableReducer: ActionReducer<HscodeTableData> = (state: HscodeTableData = initialState, action: Action) => {
  switch (action.type) {
    // Sets the table's data and get's total number of pages
    case SET_HSCODE_TABLE:
      return (<any>Object).assign({}, state, {table: action.payload.table, pages: action.payload.pages});    
    // Reset table
    case RESET_HSCODE_TABLE:
      return initialState;
    default:
      return state;
  }
}
