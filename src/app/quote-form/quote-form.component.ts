import { Component, OnInit, Output } from '@angular/core';
import { Quote} from '@angular/compiler';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuotes=new Quote(0, '','', new Date());
  @Output() addQuote=new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuotes);
  }

  constructor() { }

  ngOnInit() {
  }

}
