import { SET_TABLE_TYPE, SET_TABLE_YEAR, SET_TABLE_PAGE, SET_TABLE_PAGELENGTH, SET_TABLE_FILTER, RESET_TABLE_FILTER } from '../reducers/tables';
import { filterSet } from '../models';

export class TableHelpers {
    
    setFilter(change: filterSet) {
      switch (change.filter) {
        case "TYPE":
          return { type: SET_TABLE_TYPE, payload: change.value };
        case "YEAR":
          return { type: SET_TABLE_YEAR, payload: change.value };
        case "PAGE":
          return { type: SET_TABLE_PAGE, payload: change.value };
        case "PAGELENGTH":      
          return { type: SET_TABLE_PAGELENGTH, payload: change.value };
        default:
          break;
      }
    }
  
}
