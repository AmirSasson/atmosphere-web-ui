import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import { EnvConfig } from '../../shared/config/env.config';
import { Config } from '../../shared/config/env.config';
import * as moment from 'moment';

import { EmotionsRecord, EmotionsStat, EmotionValue } from './models';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Injectable } from '@angular/core';

export enum GroupLevel {
  Hourly,
  Daily,
  WeekDay,
  Monthly
}


@Injectable()
export class EmotionsService {

  constructor(private _http: Http, private config: EnvConfig) {
    console.log('EmotionsService!!');
    console.dir(config);
  }

  public emotionsHighlights(from?: number, to?: number): Observable<Array<EmotionValue>> {

    from = from || moment().subtract(1, 'days').valueOf();
    to = to || Date.now();

    let url = this.config.API;

    return this._http.get(`${url}/highlights?from=${moment(from).format('MM-DD-YYYY')}&to=${moment(to).format('MM-DD-YYYY')}`)
      .map((response: Response) => this.mapToRecords(response.json()));
  }

  public getLatest(count = 1): Observable<EmotionsRecord> {
    let url = this.config.API;

    return this._http.get(`${url}/latest-significants?amount=${count}`)
      .map((response: Response) => this.toEmotionsRecord(response.json()[0]));
  }

  public getEmotionsStats(): Observable<EmotionsStat> {

    let url = this.config.API;

    let from = moment().subtract(1, 'days').valueOf();
    let to = Date.now();
    let group = GroupLevel.Daily;

    return this._http
      .get(`${url}/timeseries?from=${moment(from).format('MM-DD-YYYY')}&to=${moment(to).format('MM-DD-YYYY')}&group=${group}&`)
      .map((response: Response) => this.toEmotionStats(response.json()[0]));


  }
  public getEmotions(from?: number, to?: number, group?: GroupLevel): Observable<Array<EmotionsRecord>> {

    let url = this.config.API;

    from = from || moment().subtract(7, 'days').valueOf();
    to = to || Date.now();
    group = group || GroupLevel.Daily;

    return this._http
      .get(`${url}/timeseries?from=${moment(from).format('MM-DD-YYYY')}&to=${moment(to).format('MM-DD-YYYY')}&group=${group}&`)
      .map((response: Response) => this.toEmotionsRecords(response.json()));
  }

  private toEmotionStats(r: any): EmotionsStat {
    let stat = <EmotionsStat>{
      avgEmotion: {
        timestamp: Date.parse(r.Time || moment().valueOf()),
        anger: r.AvgAnger,
        contempt: r.AvgContempt,
        disgust: r.AvgDisgust,
        neutral: r.AvgNeutral,
        sadness: r.AvgSadness,
        happiness: r.AvgHappiness,
        surprise: r.AvgSurprise,
        fear: r.AvgFear,

      },
      totalEmotions: r.GroupCount,
      timestamp: Date.parse(r.Time || moment().valueOf()),
    };
    return stat;
  }

  private toEmotionsRecords(response: Array<any>): Array<EmotionsRecord> {
    let records: Array<EmotionsRecord> = [];

    response.forEach(r => {
      let rec = <EmotionsRecord>{
        //description: response.Name,
        timestamp: Date.parse(r.Time || moment().valueOf()),
        anger: r.AvgAnger,
        contempt: r.AvgContempt,
        disgust: r.AvgDisgust,
        neutral: r.AvgNeutral,
        sadness: r.AvgSadness,
        happiness: r.AvgHappiness,
        surprise: r.AvgSurprise,
        fear: r.AvgFear
      };
      records.push(rec);
    });

    return records;
  }

  private toEmotionsRecord(response: any): EmotionsRecord {
    let record = <EmotionsRecord>{
      description: response.Name,
      timestamp: Date.parse(response.Time),
      imgUrl: response.Image,
      anger: response.Anger,
      contempt: response.Contempt,
      disgust: response.Disgust,
      neutral: response.Neutral,
      sadness: response.Sadness,
      happiness: response.Happiness,
      surprise: response.Surprise,
      fear: response.Faer
    };
    return record;
  }

  private mapToRecords(result: any): Array<EmotionValue> {
    let emotions: Array<any> = result.Emotions;
    let records: Array<EmotionValue> = [];

    emotions.forEach(e => {
      records.push(<EmotionValue>{
        description: e.Name,
        score: e.Score,
        imgUrl: e.Image,
        timestamp: Date.parse(e.Time)
      });
    });

    return records;
  }
}
