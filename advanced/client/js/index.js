const BASE_URL = "http://localhost:3000";

const getTodoList = async () => {
  try {
    const res = await fetch(BASE_URL + "/todo");
    const jsonRes = await res.json();
    console.log(jsonRes.todoList);
    return jsonRes.todoList;
  } catch (error) {
    console.error(error);
  }
};

const createTodoLi = (todo) => {
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-item");

  const todoLabel = document.createElement("label");
  todoLabel.classList.add("todo-toggle__container");

  const todoInput = document.createElement("input");
  todoInput.classList.add("todo-toggle");
  todoInput.setAttribute("type", "checkbox");
  todoInput.setAttribute("value", "checked");
  todoInput.setAttribute("data-to-id", todo.id);

  const todoSpan = document.createElement("span");
  todoSpan.classList.add("todo-toggle__checkmark");

  const todoNameDiv = document.createElement("div");
  todoNameDiv.classList.add("todo-name");
  todoNameDiv.textContent = todo.name;

  const todoBtnDiv = document.createElement("div");
  todoBtnDiv.classList.add("todo-remove-button");
  todoBtnDiv.textContent = "x";

  todoLabel.appendChild(todoInput);
  todoLabel.appendChild(todoSpan);
  todoLi.appendChild(todoLabel);
  todoLi.appendChild(todoNameDiv);
  todoLi.appendChild(todoBtnDiv);

  return todoLi;
}

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
