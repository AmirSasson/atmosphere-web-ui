import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';
import { EnvConfig } from '../../shared/config/env.config';
import { Config } from '../../shared/config/env.config';
import * as moment from 'moment';

import { EmotionsRecord, EmotionsStat, EmotionValue } from './models';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Injectable } from '@angular/core';

@Injectable()
export class EmotionsService {

  constructor(private _http: Http, private config: EnvConfig) {
    console.log('EmotionsService!!');
    console.dir(config);
  }

  public emotionsHighlights(from?: number, to?: number): Observable<Array<EmotionValue>> {
    from = from || new Date().getDate() - 1;
    to = to || Date.now();
    let url = this.config.API;

    return this._http.get(`${url}/highlights?from=${moment(from).format('MM-dd-yyyy')}&to=${moment(to).format('MM-dd-yyyy')}`)
      .map((response: Response) => this.mapToRecords(response.json()));
  }

  public getLatest(count = 1): Observable<EmotionsRecord> {
    let url = this.config.API;

    return this._http.get(`${url}/latest-significants?amount=${count}}`)
      .map((response: Response) => this.toEmotionsRecord(response.json()));
  }

  public getEmotionsStats(): Observable<EmotionsStat> {
    let stat = <EmotionsStat>{
      avgEmotion: {
        anger: 2.48253527E-05,
        contempt: 4.821947E-07,
        disgust: 0.000102124344,
        fear: 1.31987588E-09,
        happiness: 0.80,
        neutral: 2.02541912E-07,
        sadness: 0.2,
        surprise: 1.79747155E-06
      },
      totalEmotions: 200,
      timestamp: 1487779407406
    };

    return Observable.of(stat);
  }
  public getEmotions(): Observable<Array<EmotionsRecord>> {
    let emotions: Array<EmotionsRecord> = [];
    emotions.push(<EmotionsRecord>{
      description: 'Most Happy Emotion',
      anger: 2.48253527E-05,
      contempt: 4.821947E-07,
      disgust: 0.000102124344,
      fear: 1.31987588E-09,
      happiness: 0.80,
      neutral: 2.02541912E-07,
      sadness: 0.2,
      surprise: 1.79747155E-06,
      timestamp: 1487779407406,
      imgUrl: 'http://i2.wp.com/www.marcandangel.com/images/9-not-need-happy.jpg?resize=500%2C333'
    });
    emotions.push(<EmotionsRecord>{
      description: 'saddest person ever',
      anger: 2.48253527E-05,
      contempt: 4.821947E-07,
      disgust: 0.000102124344,
      fear: 1.31987588E-09,
      happiness: 0.7,
      neutral: 2.02541912E-07,
      sadness: 0.3,
      surprise: 1.79747155E-06,
      timestamp: 1487700390618,
      imgUrl: 'http://i2.wp.com/www.marcandangel.com/images/9-not-need-happy.jpg?resize=500%2C333'
    });
    emotions.push(<EmotionsRecord>{
      description: 'faceless !',
      anger: 2.48253527E-05,
      contempt: 4.821947E-07,
      disgust: 0.000102124344,
      fear: 1.31987588E-09,
      happiness: 0.9,
      neutral: 2.02541912E-07,
      sadness: 0.1,
      surprise: 1.79747155E-06,
      timestamp: 1487600390618,
      imgUrl: 'http://i2.wp.com/www.marcandangel.com/images/9-not-need-happy.jpg?resize=500%2C333'
    });
    return Observable.of(emotions);
  }

  private toEmotionsRecord(response: any): EmotionsRecord {
    return <EmotionsRecord>{
      description: response.Name,
      timestamp: Date.parse(response.TIme),
      imgUrl: response.Image,
      anger: response.Anger,
      contempt: response.Contempt,
      disgust: response.Disgust,
      neutral: response.Neutral,
      sadness: response.Sadness,
      happiness: response.Happiness,
      surprise: response.Surprise,
      fear: response.Fnger
    };
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
