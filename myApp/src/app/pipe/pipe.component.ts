import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, JsonPipe, PercentPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  currentDate : Date = new Date();

  firstName : string = "This is The demo Session.";

  rupees : number = 150;

  students : any = [
    { name : 'Rohit', age : 15, gender : 'Male'},
    { name : 'Disha', age : 13, gender : 'female'},
    { name : 'Rashmi', age : 15, gender : 'female'},
    { name : 'Satish', age : 16, gender : 'Male'},
    { name : 'Sumit', age : 15, gender : 'Male'},
  ]
  
  percentValue : number = 77.77;
}
