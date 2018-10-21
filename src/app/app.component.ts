import { Component, } from '@angular/core';
import {Quotes} from './quotes';
import { Quote } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   Quotes = [
     new Quote(1,'One who laughs, cries',), 
     new Quote(2,'needless to say...'),
     new Quote (3,'one word, bacon')
    ]
  }
}
