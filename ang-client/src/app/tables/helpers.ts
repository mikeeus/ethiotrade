import { SET_TABLE_TYPE, SET_TABLE_YEAR, SET_TABLE_PAGE, SET_TABLE_PAGELENGTH, SET_TABLE_FILTER, RESET_TABLE_FILTER } from '../reducers/tables';
import { filterSet } from '../models';
import { Store } from '@ngrx/store';

export class TableHelpers {
    
  constructor( 
    private store: Store<any>
  ) {}

    setFilter(change: filterSet) {
      switch (change.filter) {
        case "TYPE":
          this.store.dispatch({ type: SET_TABLE_TYPE, payload: change.value });
          break;    
        case "YEAR":
          this.store.dispatch({ type: SET_TABLE_YEAR, payload: change.value });
          break;      
        case "PAGE":
          this.store.dispatch({ type: SET_TABLE_PAGE, payload: change.value });
          break;      
        case "PAGELENGTH":      
          this.store.dispatch({ type: SET_TABLE_PAGELENGTH, payload: change.value });
          break;
        default:
          break;
      }
    }
  
}
