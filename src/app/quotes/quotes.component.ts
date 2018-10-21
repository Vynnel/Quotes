import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes = [
    new Quotes(1, 'One who laughs, cries', 'Vynnel', new Date(2018, 12, 12)),
    new Quotes(2, 'needless to say...', 'Vynnel', new Date(2018, 12, 10)),
    new Quotes(3, 'one word, bacon', 'Vynnel', new Date(2018, 12, 10)),
  ];
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.Quotes.splice(index, 1);
    }
  }

  choiceMaker(index) {
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
