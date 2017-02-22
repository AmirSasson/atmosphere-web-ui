import { Options, DataPoint } from 'highcharts';
import { Emotion, EmotionsStat } from './shared/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emotion-chart',
  template: `<chart [options]="options"></chart>`
})
export class EmotionChartComponent implements OnInit {
  @Input()
  emotion: EmotionsStat;
  options: Options;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = this.title || "some emotion";
    this.options = {
      chart: { type: 'pie' },
      title: { text: this.title },
      series: [{
        data: [
          <DataPoint>{ y: this.emotion.fear, name: "Fear" },
          <DataPoint>{ y: this.emotion.sadness, name: "Sadness" },
          <DataPoint>{ y: this.emotion.anger, name: "Anger" },
          <DataPoint>{ y: this.emotion.happiness, name: "happiness", color: "#00FF00" }
        ]
      }]
    };

  }
}
