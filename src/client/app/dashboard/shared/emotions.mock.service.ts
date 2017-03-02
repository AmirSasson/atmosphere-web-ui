import { EmotionsRecord, EmotionsStat } from './models';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Injectable } from '@angular/core';

@Injectable()
export class EmotionsService {

  constructor(private _http: Http) { }

  // public dailyEmotions(): Observable<Array<Emotion>> {

  //   return this._http.get("").map(e=> ;

  // }
  public emotionsHighlights(): Observable<Array<EmotionsRecord>> {

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
    //return Observable.of(new Array<Emotion>()).map(o => JSON.stringify(o));
    //return new Observable<Array<Emotion>>();

    //return this._http.get("").map(r=> r.json());

  }

  public getLatest(): Observable<EmotionsRecord> {

    let emotion = <EmotionsRecord>{
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
    };
    return Observable.of(emotion);
    //return Observable.of(new Array<Emotion>()).map(o => JSON.stringify(o));
    //return new Observable<Array<Emotion>>();

    //return this._http.get("").map(r=> r.json());

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
}
