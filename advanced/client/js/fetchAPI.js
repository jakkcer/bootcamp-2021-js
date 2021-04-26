const BASE_URL = "http://localhost:3000";

// Todo一覧の取得用
export const getTodoList = async () => {
  try {
    const res = await fetch(BASE_URL + "/todo");
    const jsonRes = await res.json();
    console.log(jsonRes.todoList);
    return jsonRes.todoList;
  } catch (error) {
    console.error(error);
  }
};

