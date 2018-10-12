import { Component, Input} from '@angular/core';
@Component({
  selector: 'tree-tempalte',
  templateUrl: `tree-tempalte.html`,
})

export class treeTemplateComponent {
  @Input() child: any;
  @Input() bindText: string;
  @Input() btnText: string;
  @Input() clickFn: Object;

  constructor() {}

  switchChildren(item) {
    item.showChild = !item.showChild;
  }

  ngOnInit() {}
  
}
