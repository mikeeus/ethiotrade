// // /* tslint:disable:no-unused-variable */
// import { TestBed, ComponentFixture, async } from '@angular/core/testing';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { Home } from './home';
// import { ChartService, AnnualChart } from '../charts';
// import { AnnualChartData } from '../models';
// import { Store } from '@ngrx/store';
// import { HomepageChartReducer } from '../reducers';
// import { ChartsModule } from 'ng2-charts/ng2-charts';



// describe('Component: Home', () => {
//   let comp: Home;
//   let fixture: ComponentFixture<Home>;
//   let el: DebugElement;
//   let chartService: ChartService;
//   let homeTitleEl;

//   beforeEach(() => {

//     TestBed.configureTestingModule({
//       declarations: [Home, AnnualChart],
//       providers: [ 
//         { provide: ChartService, useValue: this.ChartServiceStub },
//         { provide: Store, useValue: storeStub } 
//       ],
//       imports: [
//         ChartsModule
//       ]
//     });

//     fixture = TestBed.createComponent(Home);
//     comp = fixture.componentInstance;

//     chartService = fixture.debugElement.injector.get(ChartService);

//     homeTitleEl = fixture.debugElement.query(By.css('.home-title'));
//   });

//   it('should have a title', () => {

//     expect(homeTitleEl).toBe('EthioTrade');

//   }); // it('should have a title')

// }); // describe('Component: Home')





// class ChartServiceStub {
//   getHomepageChart(){
//     let chartData = {
//       annualImports: {
//       "2016": 1, "2015": 2, "2014": 3, "2013": 4, "2012": 5, "2011": 6, "2010": 7, "2009": 8, "2008": 9, "2007": 8, "2006": 7, "2005": 6, "2004": 5, "2003": 4, "2002": 3, "2001": 2, "2000": 1, "1999": 2, "1998": 3, "1997": 4
//       },
//       annualExports: {
//       "2016": 1, "2015": 2, "2014": 3, "2013": 4, "2012": 5, "2011": 6, "2010": 7, "2009": 8, "2008": 9, "2007": 8, "2006": 7, "2005": 6, "2004": 5, "2003": 4, "2002": 3, "2001": 2, "2000": 1, "1999": 2, "1998": 3, "1997": 4
//       }
//     }
//     return chartData; 
//   }
// }

// class storeStub {
  
// }