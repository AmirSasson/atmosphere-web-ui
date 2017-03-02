import { EmotionsDashboardComponent } from './emotions-dashboard.component';
import { Route } from '@angular/router';

export const HomeRoutes: Route[] = [
  	{
    	path: 'emotions',
    	component: EmotionsDashboardComponent
  	}
];
