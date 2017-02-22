import { EmotionAvgChartComponent } from './dashboard/emotion-avg-chart.component.';
import { EmotionsTrendComponent } from './dashboard/emotions-trend.component';
import { EmotionChartComponent } from './dashboard/emotion-chart.component';
import { EmotionsService } from './dashboard/shared/emotions.service';
import { EmotionsDashboardComponent } from './dashboard/emotions-dashboard.component';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-highcharts';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    EmotionsDashboardComponent,
    EmotionChartComponent,
    EmotionsTrendComponent,
    EmotionAvgChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ChartsModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [
    GithubService,
    EmotionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
