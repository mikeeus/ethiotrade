import { Action, ActionReducer } from '@ngrx/store';
import { AnnualChart } from '../../models';
import { YEARS } from '../../shared';
import { initialState, chartData, setChartData } from './helpers';

export const LOAD_HSCODE_CHART = 'LOAD_HSCODE_CHART';
export const PURGE_HSCODE_CHART = 'PURGE_HSCODE_CHART';

export const HscodeChartReducer: ActionReducer<chartData[]> = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_HSCODE_CHART:
      return setChartData(action.payload);
    case PURGE_HSCODE_CHART:
      return initialState;
    default:
      return state;
  }
}
