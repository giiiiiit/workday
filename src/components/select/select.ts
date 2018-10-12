import { Component, Input, Output, EventEmitter } from '@angular/core';

/* 组件使用说明
  功能：联级列表
  入参说明： data：数组类型，手写板配置项，必填data = [{id: '1', title: '99成新}];
            title: string类型， 列表标题，必填
            type: string类型， 联级列表的样式，必填; card为卡片式，modal为悬浮式
  返回值：onChange()  返回所选中列表的对象键值对  {id: '1', title: '99成新}
  方法： open(index) index为tab选项卡的索引值, close()
  用例： <select-component [data]="selectDataMore" [title]="selectTitle" [type]="menutype" (onChange)="selectChange($event)"></select-component>
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
