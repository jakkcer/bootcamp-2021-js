import { createTodoLi } from "./createView.js";

export class Todo {
  constructor(id, name, done) {
    this.id = id;
    this.name = name;
    this.done = done;
  }
}

class TodoList {
  constructor() {
    this.todos = [];
    this.todoListUl = document.getElementById("todoListUl");
  }

  appendTodo(id, name, done) {
    const newTodo = new Todo(id, name, done);
    this.todos.push(newTodo);
  }

  // Todo一覧を取得してフロントに表示
  showAllTodoList() {
    this.todoListUl.textContent = null;  // 一旦全部削除
    this.todos.map(aTodo => {
      this.todoListUl.appendChild(createTodoLi(aTodo));
    });
  }
}

export default TodoList;
