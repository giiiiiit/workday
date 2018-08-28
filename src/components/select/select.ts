import { Component } from '@angular/core';

/**
 * Generated class for the SelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select-component',
  templateUrl: 'select.html'
})
export class SelectComponent {

  text: string;

  constructor() {
    console.log('Hello SelectComponent Component');
    this.text = 'Hello World';
  }

}
