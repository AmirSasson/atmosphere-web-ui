
/**
* Emotion
*/
export class Emotion {

  anger: number;
  contempt: number;
  disgust: number;
  neutral: number;
  sadness: number;
  happiness: number;
  surprise: number;
  fear: number;

  constructor() { }
}

export class EmotionsStat extends Emotion {

  timestamp: number;
  urls: Array<string>;

  constructor() {
    super();
  }
}

export class EmotionPoint {
  timestamp: number;
  emotionName: Array<string>;
  emotionValue: number;

}
