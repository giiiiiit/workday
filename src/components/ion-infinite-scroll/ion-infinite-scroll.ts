import { Component } from '@angular/core';
@Component({
  selector: 'ioninfinite-scroll',
  templateUrl: 'ion-infinite-scroll.html'
})
export class InfiniteScrollComponent {
  items = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }
}
