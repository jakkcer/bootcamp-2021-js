import { getTodoList } from "./fetchAPI.js";
import TodoList from "./todoList.js";

const appendFetchedTodos = async (todoList) => {
  const fetchedTodos = await getTodoList();
  fetchedTodos.map(aTodo => {
    todoList.appendTodo(aTodo.id, aTodo.name, aTodo.done);
  });
}

const main = async () => {
  console.log("ここにロジックを記述");
  const todoList = new TodoList();

  // Fetchして表示
  await appendFetchedTodos(todoList);
  todoList.showTodoList();
};

main();
