import { Component, } from '@angular/core';
import {Quotes} from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   quotes = [
     new Quotes(1, 'One who laughs, cries', 'Vynnel'),
     new Quotes(2, 'needless to say...', 'Vynnel'),
     new Quotes(3, 'one word, bacon', 'Vynnel'),
    ];
}
