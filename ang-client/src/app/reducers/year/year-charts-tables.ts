import { Action, ActionReducer } from '@ngrx/store';
import { YearChartsTablesData } from '../../models';

export const SET_YEAR_CHARTS_TABLES = "SET_YEAR_CHARTS_TABLES";
export const SET_TT_COUNTRIES_IMPORT = "SET_TT_COUNTRIES_IMPORT";
export const SET_TT_COUNTRIES_EXPORT = "SET_TT_COUNTRIES_EXPORT";
export const SET_TT_HSCODES_IMPORT = "SET_TT_HSCODES_IMPORT";
export const SET_TT_HSCODES_EXPORT = "SET_TT_HSCODES_EXPORT";

export const REMOVE_YEAR_CHARTS_TABLES = "REMOVE_YEAR_CHARTS_TABLES";

const initialState = {
  topTenCountriesImport: [],
  topTenCountriesExport: [],
  topTenHscodesImport: [],
  topTenHscodesExport: []
}

export const YearChartsTablesReducer: ActionReducer<YearChartsTablesData> = (state: YearChartsTablesData = initialState, action: Action) => {
  switch (action.type) {
    case SET_YEAR_CHARTS_TABLES:
      return action.payload;
    
    case SET_TT_COUNTRIES_IMPORT:
      return Object.assign({}, state, {topTenCountriesImport: this.setTTCountriesChart('Import', action.payload)});
    
    case SET_TT_COUNTRIES_EXPORT:
      return Object.assign({}, state, {topTenCountriesExport: this.setTTCountriesChart('Export', action.payload)});
    
    case SET_TT_HSCODES_IMPORT:
      return Object.assign({}, state, {topTenHscodesImport: this.setTTHscodesChart('Import', action.payload)});
    
    case SET_TT_HSCODES_EXPORT:
      return Object.assign({}, state, {topTenHscodesExport: this.setTTHscodesChart('Export', action.payload)});

    case REMOVE_YEAR_CHARTS_TABLES:
      return {};
    default:
      return state;
  }
}

function setTTCountriesChart(label: string, type: string, chartData: any[]) {
  let chart = {
    data: [], label: label
  }
  let labels = [];
  for(let i = 0; i < 10; i ++){
    labels.push(chartData[i][1]);
    chart.data.push(chartData[i][0])
  }
  
}

function setTTHscodesChart(label: string, type: string, chartData: any[]) {
  let chart = {
    data: [], label: label
  }
  let labels = [];
  for(let i = 0; i < 10; i ++){
    labels.push(chartData[i][1][1]);
    chart.data.push(chartData[i][0])
  }
}