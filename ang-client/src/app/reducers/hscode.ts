import { Action, ActionReducer } from '@ngrx/store';

export const GET_HSCODE = "SET_HSCODE";
export const REMOVE_HSCODE = "REMOVE_HSCODE";

class HscodeDetail {
  hscode: {};
  relatedCodes: any[];
}

export const HscodeReducer: ActionReducer<any> = (state: HscodeDetail, action: Action) => {
  switch (action.type) {
    case GET_HSCODE:
      return action.payload;
    case REMOVE_HSCODE:
      return {};
    default:
      return state;
  }
}
