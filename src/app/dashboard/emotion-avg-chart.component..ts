import { Options, DataPoint } from 'highcharts';
import { Emotion, EmotionsStat } from './shared/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emotion-avg-chart',
  template: `<div class="card" style="width: 400px;">
                  <chart [options]="options"></chart>
              </div>`
})
export class EmotionAvgChartComponent implements OnInit {
  @Input() emotion: EmotionsStat;
  @Input() title: string;
  options: Options;
  constructor() { }

  ngOnInit() {
    this.title = this.title || "Emotions of today";
    this.options = {
      chart: {
        type: 'bar', width: 400, plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
      },
      xAxis: {
        categories: ['Fear', 'Anger', 'Happiness', 'sadness'],
        title: {
          text: null
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          }
        }
      },
      title: { text: this.title },
      series: [{
        name: 'Emotions',
        data: [this.emotion.fear, this.emotion.anger, this.emotion.happiness, this.emotion.sadness]
      }]
    };

  }
}
