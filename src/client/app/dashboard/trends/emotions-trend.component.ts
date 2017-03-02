import { EmotionsRecord, Emotion, EmotionsStat } from '../shared/models';
import { EmotionsService } from '../shared/emotions.service';
import { Options, DataPoint } from 'highcharts';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'emotions-trend',
  template: `<div class="row">
                <div class="card card-block">
                  <div id="container-trends-emotion" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                </div>
              </div>`
})
export class EmotionsTrendComponent implements OnInit {
  _emotions: Array<EmotionsRecord>;
  _emotionValues: Map<string, Array<Array<any>>>;
  options: any;
  title: string;
  constructor(private _service: EmotionsService) {
    this._emotionValues = new Map<string, Array<Array<any>>>();
  }

  public get Emotions(): Array<EmotionsRecord> {
    return this._emotions;

  }
  public set Emotions(v: Array<EmotionsRecord>) {
    this._emotions = v;
    this._emotionValues.clear();
    this._emotionValues.set('fear', this._emotions.map(e => [e.timestamp, e.fear]));
    this._emotionValues.set('sadness', this._emotions.map(e => [e.timestamp, e.sadness]));
    this._emotionValues.set('happiness', this._emotions.map(e => [e.timestamp, e.happiness]));
    this._emotionValues.set('Anger', this._emotions.map(e => [e.timestamp, e.anger]));
    this.title = this.title || 'Emotions Trend';
    this.options = {
      chart: { type: 'line' },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%e. %b',
          year: '%b'
        },
        title: {
          text: 'Date'
        },
      },
      rangeSelector: {
        enabled: true
      },
      title: { text: this.title },
      series: [
        { name: 'fear', data: this._emotionValues.get('fear') },
        { name: 'sadness', data: this._emotionValues.get('sadness') },
        { name: 'happiness', data: this._emotionValues.get('happiness') },
        { name: 'anger', data: this._emotionValues.get('anger') }
      ]
    };

    var container: any = $('#container-trends-emotion');
    container.highcharts(this.options);

  }

  ngOnInit() {
    this._service.getEmotions()
      .subscribe(arg => this.Emotions = arg);


  }
}
