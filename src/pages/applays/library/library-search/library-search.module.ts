import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from './pipes/pipes.module';
import { librarySearchPage } from './library-search';

@NgModule({
  declarations: [
    librarySearchPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(librarySearchPage),
  ],
})
export class librarySearchModule {}
