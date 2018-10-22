import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes = [
    new Quotes(1, 'One who laughs, cries', 'Vynnel'),
    new Quotes(2, 'needless to say...', 'Vynnel'),
    new Quotes(3, 'one word, bacon', 'Vynnel'),
  ];
  deleteQuote(isComplete,index){
   if (isComplete){
     const toDelete = confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)

     if(toDelete){
       this.Quotes.splice(index, 1);
     }
   }

   this.deleteQuote(index, 1); {
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
    }
   }

   ngOnInit() {}

}
