import { Action, ActionReducer } from '@ngrx/store';
import { initialState, chartData, setChartData } from './helpers';

export const SET_HSCODE_CHART = 'SET_HSCODE_CHART';
export const RESET_HSCODE_CHART = 'RESET_HSCODE_CHART';

export const HscodeChartReducer: ActionReducer<chartData[]> = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_HSCODE_CHART:
      return setChartData(action.payload);
    case RESET_HSCODE_CHART:
      return initialState;
    default:
      return state;
  }
}
