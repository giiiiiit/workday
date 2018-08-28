import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
// import { BaiduMapModule  } from 'angular2-baidu-map';
import { ComponentMapComponent } from './component-map';
@NgModule({
	declarations: [ComponentMapComponent],
	imports: [
		IonicModule
		// BaiduMapModule.forRoot({ ak: 'jsW8UtWzFrhop2lajOopwPdCA1HVwoCn' })
	],
	exports: [ComponentMapComponent]
})
export class ComponentMapModule {}
