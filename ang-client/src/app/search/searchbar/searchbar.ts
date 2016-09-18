import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'searchbar',
  // templateUrl: 'search.html',
  templateUrl: './searchbar.html',
  styleUrls: ['./searchbar.scss']
})
export class Searchbar implements OnInit {
  private searchForm: FormGroup;
  private search: FormControl = new FormControl();

  @Output() private onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() private showResults: EventEmitter<boolean> = new EventEmitter<boolean>();

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