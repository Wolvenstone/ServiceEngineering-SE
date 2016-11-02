import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'my-todo-detail',
    template: `
    <div *ngIf="todo">
        <h2>{{todo.text}} details!</h2>
        <div><label>id: </label>{{todo.id}}</div>
        <div>
            <label>text: </label>
            <input [(ngModel)]="todo.text" placeholder="text"/>
        </div>
    </div>
    `
})
export class TodoDetailComponent {
    @Input()
    todo: Todo;
}