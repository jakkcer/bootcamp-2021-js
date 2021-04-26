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

  pushTodo(id, name, done) {
    const newTodo = new Todo(id, name, done);
    this.todos.push(newTodo);
    return newTodo;
  }

  // Todo1件追加してフロントに表示
  pushAndShowTodo(id, name, done) {
    const newTodo = this.pushTodo(id, name, done);
    this.todoListUl.appendChild(createTodoLi(newTodo));
  }

  // TodoListの更新
  refreshTodoList() {
    this.todoListUl.textContent = null;  // 一旦全部削除
    this.todos.map(aTodo => {
      this.todoListUl.appendChild(createTodoLi(aTodo));
    });
  }
}

export default TodoList;
