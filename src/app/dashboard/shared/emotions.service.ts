import { Emotion, EmotionsStat } from './models';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Injectable } from '@angular/core';

@Injectable()
export class EmotionsService {

  constructor(private _http: Http) { }

  // public dailyEmotions(): Observable<Array<Emotion>> {

  //   return this._http.get("").map(e=> ;

  // }
  public dailyEmotions(): Observable<Array<EmotionsStat>> {
    let emotions: Array<EmotionsStat> = [];
    emotions.push(<EmotionsStat>{
      anger: 2.48253527E-05,
      contempt: 4.821947E-07,
      disgust: 0.000102124344,
      fear: 1.31987588E-09,
      happiness: 0.9998705,
      neutral: 2.02541912E-07,
      sadness: 5.91478E-08,
      surprise: 1.79747155E-06,
      timestamp : Date.now()-1

    });
    emotions.push(<EmotionsStat>{
      anger: 0.9998705,
      contempt: 4.821947E-07,
      disgust: 0.000102124344,
      fear: 1.31987588E-09,
      happiness: 2.48253527E-05,
      neutral: 2.02541912E-07,
      sadness: 5.91478E-08,
      surprise: 1.79747155E-06,
      timestamp : Date.now()
    });
    return Observable.of(emotions);
    //return Observable.of(new Array<Emotion>()).map(o => JSON.stringify(o));
    //return new Observable<Array<Emotion>>();

    //return this._http.get("").map(r=> r.json());

  }
}
