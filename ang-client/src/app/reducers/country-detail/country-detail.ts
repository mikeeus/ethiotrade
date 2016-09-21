import { Action, ActionReducer } from '@ngrx/store';
import { Country } from '../../models';

export const GET_COUNTRY = "GET_COUNTRY";
export const REMOVE_COUNTRY = "REMOVE_COUNTRY";

const initialState = {
  name: 'Select a Country',
  stats: ''
}

export const CountryDetailReducer: ActionReducer<Country> = (state: Country = initialState, action: Action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload;
    case REMOVE_COUNTRY:
      return {};
    default:
      return state;
  }
}
