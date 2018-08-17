import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { InfiniteScrollComponent } from './ion-infinite-scroll';
@NgModule({
	declarations: [InfiniteScrollComponent],
	imports: [
		IonicModule
	],
	exports: [InfiniteScrollComponent]
})
export class InfiniteScrollModule {}
