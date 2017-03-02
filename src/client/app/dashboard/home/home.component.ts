import { EmotionValue } from './../shared/models';
import { EmotionsRecord, EmotionsStat } from '../shared/models';
import { EmotionsService} from '../shared/emotions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home-cmp',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  /* Carousel Variable */
  myInterval: number = 5000;
  emotionsHighlights: Array<EmotionValue> = [];
  emotionStats: EmotionsStat;
  latestEmotion: EmotionsRecord;

  constructor(private _service: EmotionsService) {


  }

  ngOnInit() {
    this._service.emotionsHighlights()
      .subscribe(arg => this.emotionsHighlights = arg);

    this._service.getEmotionsStats()
      .subscribe(arg => this.emotionStats = arg);

    this._service.getLatest()
      .subscribe(arg => this.latestEmotion = arg);
  }
  ngOnDestroy() {
    //TODO Unsubscribe
  }

}
