import { getTodoList } from "./fetchAPI.js";
import { createTodoLi } from "./createView.js";

// Todo一覧を取得してフロントに表示
const showTodoList = async () => {
  const todoArray = await getTodoList();
  const todoListUl = document.getElementById("todoListUl");
  todoArray.map(aTodo => {
    todoListUl.appendChild(createTodoLi(aTodo));
  });
}

const main = () => {
  console.log("ここにロジックを記述");
  showTodoList();
};

main();
