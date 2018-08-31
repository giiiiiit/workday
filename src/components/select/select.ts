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
  tabStatus: string | number;
  menuStatus: string | number;
  @Input() data: Array<Object>;
  @Input() title: string;
  @Input() type: string;
  @Output() onChange = new EventEmitter<Object>();
  status: number | string;
  menuType: string;
  constructor() {
    // this.menuType = this.type || 'card';
  }

  public open(index) {
    this.menuStatus = index;
    setTimeout(() => {
      this.tabStatus = index;
    },0)
  }

  public close() {
    this.tabStatus = '';
    setTimeout(() => {
      this.menuStatus = '';
    },310)
  }

  choseItem(id, title) {
    if (this.status === id) return; 
    this.status = id;
    this.onChange.emit({id: id, title: title})
  }
}
