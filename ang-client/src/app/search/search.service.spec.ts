/*
 * Testing a Service
 * More info: https://angular.io/docs/ts/latest/guide/testing.html
 */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
    let service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchService],
            providers: [
                SearchService
                // for additional providers, write as examples below
                // ServiceName,
                // { provider: ServiceName, useValue: fakeServiceName },
                // { provider: ServiceName, useClass: FakeServiceClass },
                // { provider: ServiceName, useFactory: fakeServiceFactory, deps: [] },
            ]
        });
    });

    // you can also wrap inject() with async() for asynchronous tasks
    // it('...', async(inject([...], (...) => {}));

    it('should search.',
        inject([SearchService], (s: SearchService) => {
            expect(true).toBe(true);
            // expect('1').toEqual(1);
        })
    );
});