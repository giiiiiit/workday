
import { IonicPage, NavController } from 'ionic-angular';
import { Component} from '@angular/core';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'library-search',
  templateUrl: 'library-search.html',
})
export class librarySearchPage {

  data = [];
  items = [];
  allItems: any;
  searchText: string;
  searchItems: any;
  isFilter = false;

  constructor(public navCtrl: NavController) {
    this.data = [{ title: "国家标准国家标准国家标准国家标准国家标准国家标准国家标准国家标准国家标准国家标准123" },
     { title: "企业标准" },
      { title: "个人标准" },
       { title: "三个标准" }, 
      { title: "企业准则" }, 
      { title: "个人准则" }, 
      { title: "国家准则" }, 
       { title: "部门标准" }]
  
    this.getContact();
  }


  ngAfterViewInit() {
  }

  ionViewWillEnter() {
  }

  getCurrentItems(ev: any) {
   
    if (!this.searchText) {
      this.searchItems = this.allItems.concat();
      this.isFilter = false;
      return;
    }
    this.isFilter = true;
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.searchItems = this.allItems.filter((item) => {
          
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 
        );
      });
    }
  }

  onClearFilter(ev: any) {
    this.isFilter = false;
  }

  getContact() {
    this.allItems = this.data;
  }

  goDetail(contact) {
    this.navCtrl.push('libraryDetailPage', { 'item': contact });
  }
  /**
  * 返回
  */
  back() {
    this.navCtrl.pop();
  }
}