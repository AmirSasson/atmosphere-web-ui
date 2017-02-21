import { Emotion, EmotionsStat } from './shared/models';
import { EmotionsService } from './shared/emotions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emotions-dashboard',
  templateUrl: 'emotions-dashboard.component.html'
})
export class EmotionsDashboardComponent implements OnInit {

  _emotionStats: Array<EmotionsStat>;

  constructor(private _service: EmotionsService) { }

  ngOnInit() {
    this._service.dailyEmotions()
      .subscribe(arg => this._emotionStats = arg);

  }
}
