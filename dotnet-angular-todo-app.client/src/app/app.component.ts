import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface TodoItem {
  id: number;
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public todos: TodoItem[] = [];
  newTodo: TodoItem = { id: 0, title: '', isCompleted: false };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.http.get<TodoItem[]>('/api/todo').subscribe(
      (result) => {
        this.todos = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  createTodo() {
    this.http
      .post<TodoItem>('/api/todo', this.newTodo)
      .subscribe((result) => {
        this.todos.push(result);
        this.newTodo = { id: 0, title: '', isCompleted: false };
      });
  }

  updateTodo(todo: TodoItem) {
    this.http
      .put<TodoItem>(`/api/todo/${todo.id}`, todo)
      .subscribe(() => this.getTodos());
  }

  deleteTodo(todo: TodoItem) {
    this.http
      .delete<TodoItem>(`/api/todo/${todo.id}`)
      .subscribe(() => this.getTodos());
  }

  title = 'dotnet-angular-todo-app';
}
