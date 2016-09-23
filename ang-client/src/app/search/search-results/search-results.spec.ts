import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchResults } from './search-results';

describe('SearchResults', () => {
    let fixture, comp, el, resultEl;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchResults],
            providers: []
        });

        fixture = TestBed.createComponent(SearchResults);
        comp = fixture.componentInstance;

        // el = fixture.debugElement.query(By.css('h1'));
        resultEl = fixture.debugElement.query(By.css('.description'));        
    });

    it('should be defined', () => {
        fixture.detectChanges();
        // expect(el.nativeElement.textContent).toContain('Test Title');
        // expect((fixture.debugElement.classes as any).className).toBe(true);
        expect(SearchResults).toBeDefined();
    });

    it('should list search results', () => {
        let resultOne = {code: 1, description: 'resultOne'}
        comp.searchResults = [resultOne];
        fixture.detectChanges();
        expect(resultEl).toBeDefined();
    });
});