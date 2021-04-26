import { getTodoList, postTodo } from "./fetchAPI.js";
import TodoList from "./todoList.js";

const appendFetchedTodos = async (todoList) => {
  const fetchedTodos = await getTodoList();
  fetchedTodos.map(aTodo => {
    todoList.appendTodo(aTodo.id, aTodo.name, aTodo.done);
  });
}

// 新しいTodoの追加
const listenAddTodo = (todoList) => {
  const newTodoName = document.getElementById("name");
  const addTodoButton = document.getElementById("addTodoBtn");

  addTodoButton.addEventListener("click", async (e) => {
    e.preventDefault();
    if (newTodoName.value.length > 0) {
      const res = await postTodo(newTodoName.value);
      todoList.appendTodo(res.id, res.name, res.done);
      todoList.showAllTodoList();
    }
  });
}

const main = async () => {
  console.log("ここにロジックを記述");
  const todoList = new TodoList();

  // Fetchして表示
  await appendFetchedTodos(todoList);
  todoList.showAllTodoList();

  listenAddTodo(todoList);
};

main();
