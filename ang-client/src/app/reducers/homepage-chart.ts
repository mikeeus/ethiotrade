import { Action, ActionReducer } from '@ngrx/store';
import { HomepageChart } from '../models';

export const LOAD_HOMEPAGE_CHART = 'LOAD_HOMEPAGE_CHART';
export const PURGE_HOMEPAGE_CHART = 'PURGE_HOMEPAGE_CHART';

export const HomepageChartReducer: ActionReducer<HomepageChart> = (state: {}, action: Action) => {
  switch (action.type) {
    case LOAD_HOMEPAGE_CHART:
      return action.payload;
    case PURGE_HOMEPAGE_CHART:
      return {};
    default:
      return state;
  }
}
