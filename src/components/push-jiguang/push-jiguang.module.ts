import { NgModule } from '@angular/core';
import { JPush } from "@jiguang-ionic/jpush";
import { PushJiguangComponent } from './push-jiguang';
@NgModule({
	declarations: [PushJiguangComponent],
  imports: [],
  providers: [
    JPush,
  ],
	exports: [PushJiguangComponent]
})
export class PushJiguangComponentModule {}
