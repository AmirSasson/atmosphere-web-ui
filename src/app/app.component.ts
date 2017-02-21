import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name: string;
  /**
   *
   */
  constructor() {
    this.name = "Natalie!";

  }
}
