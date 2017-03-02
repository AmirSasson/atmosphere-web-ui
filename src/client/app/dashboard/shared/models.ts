
export class Emotion {

  anger: number;
  contempt: number;
  disgust: number;
  neutral: number;
  sadness: number;
  happiness: number;
  surprise: number;
  fear: number;
}

export class EmotionsRecord extends Emotion {
  description: string;
  timestamp: number;
  imgUrl: string;
}

export class EmotionValue {
  description: string;
  score: number;
  timestamp: number;
  imgUrl: string;
}

export class EmotionsStat {

  avgEmotion: Emotion;
  timestamp: number;
  totalEmotions: number;
}
