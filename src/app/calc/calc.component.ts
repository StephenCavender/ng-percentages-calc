import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.sass']
})
export class CalcComponent {
  private percentagesToCalculate: Array<number> = [];
  percentages: Map<number, number> = new Map();

  constructor() {
    for (let i = 95; i > 50; i-=5) {
      this.percentagesToCalculate.push(i);
    }
    this.percentagesToCalculate.sort();
  }

  calculate(event) {
    if (!event.target.value) {return;}

    const inputVal = event.target.value;
    this.percentages.clear();
    this.percentagesToCalculate.forEach(percentage => {
      this.percentages.set(percentage, calculatePercentage(inputVal, percentage));
    });
  }
}

const calculatePercentage = (num: number, percentage: number) => (num * percentage) / 100;