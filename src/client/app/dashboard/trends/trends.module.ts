import { EmotionsService } from '../shared/emotions.service';
import { EmotionsTrendComponent } from './emotions-trend.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [EmotionsTrendComponent],
    exports: [EmotionsTrendComponent],
    providers:[EmotionsService]
})
export class TrendsModule { }
