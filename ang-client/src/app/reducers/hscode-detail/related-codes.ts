import { Action, ActionReducer } from '@ngrx/store';
import { Hscode } from '../../models';

export const GET_RELATED_CODES = "GET_RELATED_CODES";
export const REMOVE_RELATED_CODES = "REMOVE_RELATED_CODES";

export const RelatedCodesReducer: ActionReducer<Hscode[]> = (state: Hscode[] = [], action: Action) => {
  switch (action.type) {
    case GET_RELATED_CODES:
      return action.payload;
    case REMOVE_RELATED_CODES:
      return {};
    default:
      return state;
  }
}
