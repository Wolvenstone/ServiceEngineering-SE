"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TODOS = [
    { id: 11, text: 'Try out angular2' },
    { id: 12, text: 'Checkout website xy' },
    { id: 13, text: 'update npm' },
    { id: 14, text: 'uni treffen bezüglich übung' },
    { id: 15, text: 'Mehr todos überlegen' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Todo App';
        this.todos = TODOS;
    }
    AppComponent.prototype.onSelect = function (todo) {
        this.selectedTodo = todo;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>  \n        <my-todo-detail [todo]=\"selectedTodo\"></my-todo-detail>\n        <h2>My Todos</h2>\n        <ul class=\"todos\">\n            <li *ngFor=\"let todo of todos\" \n                [class.selected]=\"todo === selectedTodo\"\n                (click)=\"onSelect(todo)\">\n                <span class=\"badge\">{{todo.id}}</span> {{todo.text}}\n            </li>\n        </ul>\n    ",
            styles: ["\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n        }\n        .todos {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n        }\n        .todos li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.6em;\n            border-radius: 4px;\n        }\n        .todos li.selected:hover {\n            background-color: #BBD8DC !important;\n            color: white;\n        }\n        .todos li:hover {\n            color: #607D8B;\n            background-color: #DDD;\n            left: .1em;\n        }\n        .todos .text {\n            position: relative;\n            top: -3px;\n        }\n        .todos .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0 0 4px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map