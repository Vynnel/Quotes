import { Component } from '@angular/core';
import {Quotes} from './quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   quotes = [
     new Quote(1, 'The One who cries, has probably been hurt', 'Vynnel', '2018,12,16' )
   ];
  }
}
