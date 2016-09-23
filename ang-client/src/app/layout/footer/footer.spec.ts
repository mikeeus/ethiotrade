/*
 * Testing a simple Angular 2 component
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#simple-component-test
 */

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Footer } from './footer';

describe('Footer', () => {
    let fixture, comp, el;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Footer],
            providers: []
        });

        fixture = TestBed.createComponent(Footer);
        comp = fixture.componentInstance;

    });

    it('should be defined', () => {
        fixture.detectChanges();
        expect(comp).toBeDefined();
    });
    it('should contain "Created by Mikias Abera"', () => {
      fixture.detectChanges();
      let createdBy = fixture.debugElement.nativeElement.querySelector('.footer-text');
      expect(createdBy.textContent).toContain('Created by');
      expect(createdBy.textContent).toContain('Mikias Abera');     
    });
});
