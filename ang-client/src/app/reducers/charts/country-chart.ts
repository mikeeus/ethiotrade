import { Action, ActionReducer } from '@ngrx/store';
import { initialState, chartData, setChartData } from './helpers';

export const SET_COUNTRY_CHART = 'SET_COUNTRY_CHART';
export const PURGE_COUNTRY_CHART = 'PURGE_COUNTRY_CHART';

export const CountryChartReducer: ActionReducer<chartData[]> = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_COUNTRY_CHART:
      return setChartData(action.payload);
    case PURGE_COUNTRY_CHART:
      return initialState;
    default:
      return state;
  }
}
