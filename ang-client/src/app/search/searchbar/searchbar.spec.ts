import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Searchbar } from './searchbar';

describe('Searchbar', () => {
    let fixture, comp, el;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Searchbar],
            providers: [],
            imports: [ReactiveFormsModule]
        });

        fixture = TestBed.createComponent(Searchbar);
        comp = fixture.componentInstance;

        el = fixture.debugElement.query(By.css('.search-input'));
    });

    it('should be a defined component', () => {
        fixture.detectChanges();
        expect(el.nativeElement.textContent).toBeDefined();
        // expect((fixture.debugElement.classes as any).className).toBe(true);
        // expect(enterAValue).toBe(enterTheExpectedResult);
    });

    it('should create a `FormGroup` comprised of `FormControl`s', () => {
        comp.ngOnInit();
        expect(comp.searchForm instanceof FormGroup).toBe(true);
    });

    it('should create a `FormControl` called search', () => {
        comp.ngOnInit();
        expect(comp.search instanceof FormControl).toBe(true);
    });

    it('should search if searchForm value changes', () => {
        comp.ngOnInit();
        let searchValue = 'request';
        let searchForm = { search: searchValue }
        comp.searchForm.controls['search'].setValue(searchValue);
        expect(comp.searchForm.value).toEqual(searchForm);
    });


});