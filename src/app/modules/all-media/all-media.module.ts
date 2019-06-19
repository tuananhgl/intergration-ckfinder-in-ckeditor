import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMediaRoutingModule } from './all-media-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    AllMediaRoutingModule,
    HttpClientModule
  ]
})
export class AllMediaModule { }
