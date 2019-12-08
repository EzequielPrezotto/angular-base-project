import { Component } from '@angular/core';

export class Counter {
  word: string;
  amount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-base-project';
  input = '';
  result = '';

  count() {
    this.result = this.countWords(this.input);
  }

  countWords(phrase: string, word = true): string {
    let count: Array<Counter> = [];
    const words = phrase.split(word ? ' ' : '');

    words.forEach(word => {
      const index = count.findIndex(value => value.word === word);
      if (index > -1) {
        count[index].amount++;
      } else {
        count.push({ word: word, amount: 1 });
      }
    });
    return JSON.stringify(count);
  }
}
