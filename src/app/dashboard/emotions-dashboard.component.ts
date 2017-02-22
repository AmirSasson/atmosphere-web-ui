import { Emotion, EmotionsStat } from './shared/models';
import { EmotionsService } from './shared/emotions.service';
import { Component, OnInit } from '@angular/core';
import { Options, DataPoint } from 'highcharts';

@Component({
  selector: 'emotions-dashboard',
  templateUrl: './emotions-dashboard.component.html',
  styleUrls: ["./dashboard.css"]
})
export class EmotionsDashboardComponent implements OnInit {

  _emotionStats: Array<EmotionsStat>;
  //public doughnutChartLabels: string[] = Object.keys(new Emotion());
  public doughnutChartLabels: string[] = ["anger", "contempt", "disgust", "neutral", "sadness", "happiness", "surprise", "fear"];
  public doughnutChartData: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  public doughnutChartType: string = 'doughnut';
  options: Options;
  latestEmotion: Emotion;
  dailyEmotions : Array<EmotionsStat>;

  constructor(private _service: EmotionsService) {
    // this.options = {
    //   title: { text: 'simple chart' },
    //   series: [{
    //     data: [29.9, 71.5, 106.4, 129.2],
    //   }]
    // };

  }

  ngOnInit() {
    this._service.dailyEmotions()
      .subscribe(arg => {
        this.dailyEmotions = arg;
        this._emotionStats = arg;
        this.latestEmotion = arg[0];
        // this.options = {
        //   chart: { type: 'pie' },
        //   title: { text: 'simple chart' },

        //   series: [{
        //     data: [<DataPoint>{ y: this._emotionStats[0].sadness, name: "Sadness" },
        //     <DataPoint>{ y: this._emotionStats[0].anger, name: "Anger" },
        //     <DataPoint>{ y: this._emotionStats[0].happiness, name: "happiness", color: "#00FF00" }
        //     ]
        //   }]
        // };
        //this.doughnutChartData = [this._emotionStats[0].anger * 100, this._emotionStats[0].contempt * 100, this._emotionStats[0].disgust * 100, this._emotionStats[0].neutral * 100,
        //this._emotionStats[0].sadness * 100, this._emotionStats[0].happiness * 100, this._emotionStats[0].surprise * 100, this._emotionStats[0].fear * 100];
      }
      );

  }
}
