import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
    moduleId: module.id,
    selector: 'my-todos',
    templateUrl:'todos.component.html',
    styleUrls: [ 'todos.component.css' ]
})

export class TodosComponent implements OnInit {
    todos: Todo[];
    selectedTodo: Todo;

    constructor(
        private router: Router,
        private todoService: TodoService) { }

    ngOnInit(): void {
        this.getTodos();
    }

    getTodos(): void {
        this.todoService.getTodos().then(todos => this.todos = todos);
    }

    onSelect(todo:Todo): void {
        this.selectedTodo = todo;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedTodo.id]);
    }
}