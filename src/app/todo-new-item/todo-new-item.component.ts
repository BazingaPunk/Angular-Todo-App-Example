import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.scss']
})
export class TodoNewItemComponent implements OnInit {

  public todoItemArray : Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public keyUpFunction(e) {
    this.todoItemArray.push(e.target.value)
    e.target.value = "";
  }

}
