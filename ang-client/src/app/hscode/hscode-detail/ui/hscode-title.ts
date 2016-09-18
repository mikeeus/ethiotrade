import { Component, Input, OnInit } from '@angular/core';
import { Hscode } from '../../../models';

@Component({
  selector: 'hscode-title',
  template: `
    <h2>{{ hscode.code }}</h2>
    <h3>{{ hscode.description }}</h3>
  `
})
export class HscodeTitle implements OnInit {
  @Input() hscode: Hscode;

  constructor() { }

  ngOnInit() { }
}