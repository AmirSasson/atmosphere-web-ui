import { EmotionsRecord } from '../shared/models';
import { Emotion, EmotionsStat } from '../shared/models';
import { EmotionsService } from '../shared/emotions.service';
import { Component, OnInit } from '@angular/core';
import { Options, DataPoint } from 'highcharts';

@Component({
  selector: 'emotions-dashboard',
  templateUrl: './emotions-dashboard.component.html',
  styleUrls: ['./dashboard.css']
})
export class EmotionsDashboardComponent implements OnInit {

  _emotions: Array<EmotionsRecord>;
  //public doughnutChartLabels: string[] = Object.keys(new Emotion());
  public doughnutChartLabels: string[] = ['anger', 'contempt', 'disgust', 'neutral', 'sadness', 'happiness', 'surprise', 'fear'];
  public doughnutChartData: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  public doughnutChartType: string = 'doughnut';
  options: Options;
  latestEmotion: Emotion;
  dailyEmotions: Array<EmotionsStat>;

  constructor(private _service: EmotionsService) {
    // this.options = {
    //   title: { text: 'simple chart' },
    //   series: [{
    //     data: [29.9, 71.5, 106.4, 129.2],
    //   }]
    // };

  }

  ngOnInit() {
    this._service.getEmotions()
      .subscribe(arg => {
        this._emotions = arg;
      }
      );

  }
}
