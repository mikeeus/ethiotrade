import { Action, ActionReducer } from '@ngrx/store';
import { AnnualChart } from '../models';
import { YEARS } from '../shared';

export const LOAD_HOMEPAGE_CHART = 'LOAD_HOMEPAGE_CHART';
export const PURGE_HOMEPAGE_CHART = 'PURGE_HOMEPAGE_CHART';

const initialState = [
  {data: [], label: 'Imports'},
  {data: [], label: 'Exports'}
];

interface chartData {
  data: number[];
  label: string
}

function setChartData(chartData: AnnualChart) {
  let chart = [
    {data: [], label: 'Imports'},
    {data: [], label: 'Exports'}
  ];
  for(let i = 0; i < YEARS.length; i++) {
    // Import data
    chart[0].data[i] = chartData.annualImports[YEARS[i]];
    // Export data
    chart[1].data[i] = chartData.annualExports[YEARS[i]];      
  }
  return chart
}

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
