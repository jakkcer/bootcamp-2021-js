const BASE_URL = "http://localhost:3000";

// Todo一覧の取得用
const getTodo = async () => {
  try {
    const res = await fetch(BASE_URL + "/todo");
    const jsonRes = await res.json();
    return jsonRes.todoList;
  } catch (error) {
    console.error(error);
  }
};

export const getTodoList = async () => {
  const getRes = await getTodo();
  return getRes.map(res => {
    if ("id" in res && "name" in res && "done" in res) {
      return { id: res.id, name: res.name, done: res.done };
    }
  });
}

export const postTodo = async (todoName) => {
  try {
    const data = { "name": todoName };
    const res = await fetch(BASE_URL + "/todo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
    });
    const jsonRes = await res.json();
    console.log(jsonRes);
    return jsonRes;
  } catch (error) {
    console.error(error);
  }
}
