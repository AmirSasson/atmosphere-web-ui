import { EmotionsService } from './shared/emotions.service';
import { Options, DataPoint } from 'highcharts';
import { Emotion, EmotionsStat, EmotionPoint } from './shared/models';
import { Component, OnInit, Input , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'emotions-trend',
  template: `<chart *ngIf="options" [options]="options"></chart>`
})
export class EmotionsTrendComponent implements OnInit {
  _emotions: Array<EmotionsStat>;
  _emotionsPoints: Map<string, Array<Array<any>>>;
  options: Options;
  title: string;
  constructor(private _service: EmotionsService) {
    this._emotionsPoints = new Map();
  }

  public get Emotions(): Array<EmotionsStat> {
    return this._emotions;

  }
  public set Emotions(v: Array<EmotionsStat>) {
    this._emotions = v;
    this._emotionsPoints.clear();
    this._emotionsPoints.set('fear', this._emotions.map(e => [e.timestamp, e.fear]));
    this._emotionsPoints.set('sadness', this._emotions.map(e => [e.timestamp, e.sadness]));
    this._emotionsPoints.set('happiness', this._emotions.map(e => [e.timestamp, e.happiness]));
    this._emotionsPoints.set('Anger', this._emotions.map(e => [e.timestamp, e.anger]));

    let series = [];
    this.title = this.title || "Emotions Trend";
    this.options = {
      chart: { type: 'spline' ,width:1200 },
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
      title: { text: this.title },
      series: [
        { name: 'fear', data: this._emotionsPoints.get('fear') },
        { name: 'sadness', data: this._emotionsPoints.get('sadness') },
        { name: 'happiness', data: this._emotionsPoints.get('happiness') },
        { name: 'anger', data: this._emotionsPoints.get('anger') }
      ]
    };

  }

  ngOnInit() {
    this._service.dailyEmotions()
      .subscribe(arg => this.Emotions = arg);


  }
}
