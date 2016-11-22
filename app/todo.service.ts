import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable()
export class TodoService {
    getTodos(): Promise<Todo[]> {
        return new Promise<Todo[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => Promise.resolve(TODOS));
    };
    getTodo(id: number): Promise<Todo> {
        return this.getTodos()
            .then(todos => todos.find(todo => todo.id === id));
    }
}