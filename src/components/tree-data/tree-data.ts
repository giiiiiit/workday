import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'tree-data',
  templateUrl: "tree-data.html"
 
})
export class TreeDataComponent {


  @Input() targetPage: string;
  @Input() paramaName: string;
  @Input() btnText: string;
  @Input() nodes : any;
  constructor(public navCtrl: NavController) {
   

  }
  switchChildren(item){
    item.showChild = !item.showChild;
  }
  
  viewOrg(item) {
    let parama = {};
    parama[this.paramaName] = item;
    this.navCtrl.push(this.targetPage, parama);
  }
  ngOnInit() {
   

  }
 
  
}