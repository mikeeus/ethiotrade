/*
 * Testing a simple Angular 2 component
 * More info: https://angular.io/docs/ts/latest/guide/testing.html#!#simple-component-test
 */

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Header } from './header';

describe('Header', () => {
    let fixture, comp, el;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Header],
            providers: []
        });

        fixture = TestBed.createComponent(Header);
        comp = fixture.componentInstance;

        // el = fixture.debugElement.query(By.css('h1'));
    });

    it('should be defined', () => {
        fixture.detectChanges();
        // expect(el.nativeElement.textContent).toContain('Test Title');
        // expect((fixture.debugElement.classes as any).className).toBe(true);
        expect(comp).toBeDefined();
    });
});