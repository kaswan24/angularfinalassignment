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
  list = null;
  totalRecords = 0;
  selectedId:any;

  constructor(){
    this.list = this.newComponent.todos;
    this.totalRecords = this.list.length;
  }

  select(item) {
    this.selected = (this.selected === item ? null : item); 
    this.selectedId = (this.selected === item ? this.selected.id : null);
  };
  
  isActive(item) {
    return this.selected === item;
  };

}
