import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { TodosComponent }   from './todos.component';
import { TodoDetailComponent } from './todo-detail.component';

import { TodoService } from './todo.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, DashboardComponent, TodosComponent, TodoDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoService]
})
export class AppModule { }