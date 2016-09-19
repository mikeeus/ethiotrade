import { Action, ActionReducer } from '@ngrx/store';
import { initialState, chartData, setChartData } from './helpers';

export const LOAD_HOMEPAGE_CHART = 'LOAD_HOMEPAGE_CHART';
export const PURGE_HOMEPAGE_CHART = 'PURGE_HOMEPAGE_CHART';

export const HomepageChartReducer: ActionReducer<chartData[]> = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_HOMEPAGE_CHART:
      return setChartData(action.payload);
    case PURGE_HOMEPAGE_CHART:
      return initialState;
    default:
      return state;
  }
}
