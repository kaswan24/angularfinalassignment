import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {

  output = '';
  outLength = 0;
  onInput(inputValue: string): void {  
    this.output = inputValue;
    this.outLength = inputValue.length;
  }

}
