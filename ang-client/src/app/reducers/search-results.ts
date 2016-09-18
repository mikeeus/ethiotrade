import { Action, ActionReducer } from '@ngrx/store';
import { Hscode } from '../models';

export const GET_RESULTS = "GET_RESULTS";
export const REMOVE_RESULTS = "REMOVE_RESULTS";

export const SearchResultsReducer: ActionReducer<Hscode[]> = (state: Hscode[] = [], action: Action) => {
  switch (action.type) {
    case GET_RESULTS:
      return action.payload
    case REMOVE_RESULTS:
      return [];
    default:
      return state;
  }
}
