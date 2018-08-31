import { Component } from '@angular/core';
@Component({
  selector: 'component-example',
  templateUrl: 'component-example.html'
})
export class ComponentExampleComponent {
  text: string;
  constructor() {
    console.log('Hello ComponentExampleComponent Component');
    this.text = 'Hello World';
  }

}
