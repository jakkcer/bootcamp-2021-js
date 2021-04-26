import TodoList from "../todoList.js";

const testTodoListへのTodoの追加 = () => {
  const todoList = TodoList();
  todoList.appendTodo(1, "test1", false);
  console.log(".");
  console.assert(todoList.id == 1, "\nidが正しく設定できていません");
  console.assert(todoList.name == "test1", "\nnameが正しく設定できていません");
  console.assert(todoList.done == false, "\ndoneが正しく設定できていません");
}

const test = () => {
  testTodoListへのTodoの追加();
}

test();
