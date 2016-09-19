import { Action, ActionReducer } from '@ngrx/store';
import { Hscode } from '../../models';

export const GET_HSCODE = "GET_HSCODE";
export const REMOVE_HSCODE = "REMOVE_HSCODE";

const initialState = {
  id: 0,
  code: 0,
  description: '',
  unit: '',
  duty: 0,
  excise: 0,
  special_permission: '',
  sur: 0,
  vat: 0,
  withhold: 0,
}

export const HscodeDetailReducer: ActionReducer<Hscode> = (state: Hscode = initialState, action: Action) => {
  switch (action.type) {
    case GET_HSCODE:
      return action.payload;
    case REMOVE_HSCODE:
      return {};
    default:
      return state;
  }
}
