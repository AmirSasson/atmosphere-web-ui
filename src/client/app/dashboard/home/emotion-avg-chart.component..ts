import { Options, DataPoint } from 'highcharts';
import { Emotion, EmotionsStat } from '../shared/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emotion-avg-chart',
  template: ` <div class="row">
                <div class="card card-block">
                  <div id="container-avg-emotion" style="min-width: 310px; height: 400px; max-width: 800px; margin: 0 auto"></div>

                </div>
              </div>
              `
})
export class EmotionAvgChartComponent implements OnInit {
  @Input() emotion: Emotion;
  @Input() title: string;
  options: Options;
  constructor() { }

  ngOnInit() {
    this.title = this.title || 'Emotions of today';
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

    var container: any = $('#container-avg-emotion');
    container.highcharts(this.options);

  }
}
