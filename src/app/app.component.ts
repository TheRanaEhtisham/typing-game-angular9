import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText = lorem.sentence();
  enteredText: string = '';
  onInput(value: string) {
    this.enteredText = value;
  }
  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    // if (enteredLetter === randomLetter) {
    //   return 'correct'
    // }

    //ternary operator 

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
