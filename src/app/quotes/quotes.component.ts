import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes(1, 'One who laughs, cries', 'Vynnel'),
    new Quotes(2, 'needless to say...', 'Vynnel'),
    new Quotes(3, 'one word, bacon', 'Vynnel'),
  ];
  deleteQuote(isComplete,index){
   if (isComplete){
     const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

     if(toDelete){
       this.quotes.splice(index, 1);
     }
   }

   this.deleteQuote(index, 1); {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
   }
   choiceMaker();

   ngOnInit() {}

}
