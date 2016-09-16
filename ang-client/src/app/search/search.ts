import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'search',
  // templateUrl: 'search.html',
  template: `
    <form
      class="form-group" 
      [formGroup]="searchForm">
      <input
        class="form-control"
        type="text"
        placeholder="Search..."
        formControlName="search">
    </form>
  `,
  styleUrls: ['search.scss']
})
export class Search implements OnInit {
  private searchForm: FormGroup;
  private search: FormControl = new FormControl();

  @Output() private onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(fb: FormBuilder) {
    this.searchForm = fb.group({ search: this.search });
   }

  ngOnInit() {
    this.searchForm.valueChanges
        .map(value => value.search)
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe((terms: string) => this.onSearch.emit(terms))
   }
}