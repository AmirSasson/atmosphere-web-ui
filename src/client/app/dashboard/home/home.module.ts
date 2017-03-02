import { RouterModule } from '@angular/router';
import { EmotionsService } from '../shared/emotions.service';
import { EmotionChartComponent } from './emotion-chart.component';
import { EmotionAvgChartComponent } from './emotion-avg-chart.component.';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    DropdownModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    EmotionAvgChartComponent,
    EmotionChartComponent
  ]
  ,
  providers: [
    EmotionsService
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
