import { Component,input,output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-items',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
todo = input.required<Todo>();
todoToggled = output<Todo>();

todoClicked(){
  this.todoToggled.emit(this.todo());
}
}
