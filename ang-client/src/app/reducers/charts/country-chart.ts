import { Action, ActionReducer } from '@ngrx/store';
import { initialState, chartData, setChartData } from './helpers';

export const SET_COUNTRY_CHART = 'SET_COUNTRY_CHART';
export const RESET_COUNTRY_CHART = 'RESET_COUNTRY_CHART';

export const CountryChartReducer: ActionReducer<chartData[]> = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_COUNTRY_CHART:
      return setChartData(action.payload);
    case RESET_COUNTRY_CHART:
      return initialState;
    default:
      return state;
  }
}
