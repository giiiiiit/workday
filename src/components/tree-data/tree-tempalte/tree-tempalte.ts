import { Component, Input} from '@angular/core';
import {  NavController } from 'ionic-angular';
@Component({
  selector: 'tree-tempalte',
  templateUrl: `tree-tempalte.html`,
})

export class treeTemplateComponent {

  @Input() child: any;
  @Input() targetPage: string;
  @Input() paramaName: string;
  @Input() btnText: string;

  constructor(public navCtrl: NavController) {
  
  }

  switchChildren(item) {
    item.showChild = !item.showChild;
  }
  viewOrg(item){
    let parama = { };
    parama[this.paramaName] = item;
    this.navCtrl.push(this.targetPage, parama);
  }

  ngOnInit() {  
 
  }
  
}
