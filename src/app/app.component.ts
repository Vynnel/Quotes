import { Component } from '@angular/core';
import {Quotes} from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    quotes: string[];
  constructor(){
    this.quotes = ['The One who cries, has probably been hurt'];
  }
  
}
