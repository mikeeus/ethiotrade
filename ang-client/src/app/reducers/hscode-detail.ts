import { Action, ActionReducer } from '@ngrx/store';
import { HscodeData } from '../models';

export const GET_HSCODE = "SET_HSCODE";
export const REMOVE_HSCODE = "REMOVE_HSCODE";

export const HscodeDetailReducer: ActionReducer<HscodeData> = (state: HscodeData, action: Action) => {
  switch (action.type) {
    case GET_HSCODE:
      return action.payload;
    case REMOVE_HSCODE:
      return {};
    default:
      return state;
  }
}
