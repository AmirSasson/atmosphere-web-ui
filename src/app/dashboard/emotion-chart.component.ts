import { Options, DataPoint } from 'highcharts';
import { Emotion, EmotionsStat } from './shared/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emotion-chart',
  template: `<div class="card" style="width: 400px;">
                <img [src]="emotion.urls[0]" class="card-img-top" style="width: 400px;"/>
                <div style="min-width:400px;">
                  <chart [options]="options"></chart>
                </div>
              </div>`
})
export class EmotionChartComponent implements OnInit {
  @Input() emotion: EmotionsStat;
  @Input() title: string;
  options: Options;
  constructor() { }

  ngOnInit() {
    this.title = this.title || "Emotion";
    this.options = {
      chart: {
        type: 'pie', width: 400, plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
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
