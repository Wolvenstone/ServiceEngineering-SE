import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
    moduleId: module.id,
    selector: 'my-todo-detail',
    templateUrl: 'todo-detail.component.html',
    styleUrls: [ 'todo-detail.component.css' ]
})
export class TodoDetailComponent implements OnInit {
    constructor(
        private todoService: TodoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    todo: Todo;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.todoService.getTodo(id)
            .then(todo => this.todo = todo);
        });
    }

    goBack(): void {
        this.location.back();
    }
}