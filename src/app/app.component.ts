import { Component, } from '@angular/core';
import {Quotes} from './quotes';
import {Quote} from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   Quotes = [
     new Quotes(1, 'One who laughs, cries'),
     new Quotes(2, 'needless to say...'),
     new Quotes(3, 'one word, bacon'),
    ];
}
