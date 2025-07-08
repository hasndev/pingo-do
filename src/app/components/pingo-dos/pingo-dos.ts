import { Component } from '@angular/core';
import { deleteTodo, todos, toggleTodo, filter, type Filter, filteredTodos } from '../../signals/todos.signal';

@Component({
  selector: 'app-pingo-dos',
  imports: [],
  templateUrl: './pingo-dos.html',
  styleUrls: ['./pingo-dos.css']
})
export class PingoDos {
  todos = filteredTodos;
  toggleTodo = toggleTodo;
  deleteTodo = deleteTodo;
  filter = filter;

  deletingIds = new Set<number>();

  handleDelete(id: number) {
    this.deletingIds.add(id);
    setTimeout(() => {
      deleteTodo(id);
      this.deletingIds.delete(id);
    }, 300);
  }

  isDeleting(id: number) {
    return this.deletingIds.has(id);
  }

  setFilter(f: Filter) {
    this.filter.set(f);
  }
}
