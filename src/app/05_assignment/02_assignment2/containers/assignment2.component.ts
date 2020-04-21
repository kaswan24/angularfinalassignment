import { Component } from '@angular/core';
import {AssignmentComponent} from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  selected:any;
  newComponent:AssignmentComponent = new AssignmentComponent();
  list =null;

  constructor(){
    this.list = this.newComponent.todos;
  }

}
