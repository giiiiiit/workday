import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() data: Array<Object>;
  @Input() title: string;
  @Output() onChange = new EventEmitter<Object>();
  status: number | string;
  select1Show: boolean;
  constructor() {
    console.log('Hello SelectComponent Component');
  }

  public openModal(type) {
    if (type === 1) {
      this.select1Show = true;
    }
  }

  public close() {
    this.select1Show = false;
  }

  private choseItem(id, title) {
    if (this.status === id) return; 
    this.status = id;
    this.onChange.emit({id: id, title: title})
    this.close();
  }
}
