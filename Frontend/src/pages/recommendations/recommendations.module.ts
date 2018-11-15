import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecommendationsPage } from './recommendations';

@NgModule({
  declarations: [
    RecommendationsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommendationsPage),
  ],
})
export class RecommendationsPageModule {}
