import { Options, DataPoint } from 'highcharts';
import { EmotionsRecord } from '../shared/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emotion-chart',
  template: `<div class="card" style="width: 400px; text-align:center;">
                <img [src]="emotion.imgUrl" class="card-img-top" style="max-width: 800px; height: 100px; margin: 0 auto;"/>
                 <div id="container-emotion-chart" style="min-width: 310px; height: 400px; max-width: 800px; margin: 0 auto"></div>
              </div>`
})
export class EmotionChartComponent implements OnInit {
  @Input() emotion: EmotionsRecord;
  @Input() title: string;
  options: Options;
  constructor() { }

  ngOnInit() {
    this.title = this.title || new Date(this.emotion.timestamp).toLocaleTimeString();
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
          <DataPoint>{ y: this.emotion.fear, name: 'Fear' },
          <DataPoint>{ y: this.emotion.sadness, name: 'Sadness' },
          <DataPoint>{ y: this.emotion.anger, name: 'Anger' },
          <DataPoint>{ y: this.emotion.happiness, name: 'happiness', color: '#00FF00' }
        ]
      }]
    };
    var container: any = $('#container-emotion-chart');
    container.highcharts(this.options);

  }
}
