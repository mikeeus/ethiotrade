import { Action, ActionReducer } from '@ngrx/store';
import { initialState, chartData, setChartData } from './helpers';

export const SET_HOMEPAGE_CHART = 'SET_HOMEPAGE_CHART';
export const RESET_HOMEPAGE_CHART = 'RESET_HOMEPAGE_CHART';

export const HomepageChartReducer: ActionReducer<chartData[]> = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_HOMEPAGE_CHART:
      return setChartData(action.payload);
    case RESET_HOMEPAGE_CHART:
      return initialState;
    default:
      return state;
  }
}
