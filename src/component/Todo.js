import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  function onSubmit(e) {
    e.preventDefault();
    setTodoList([...todo]);
    console.log(todoList);
    setTodo("");
  }
  function inputTodo(e) {
    setTodo(e.target.value);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type="text" value={todo} onChange={inputTodo} />
        <button onClick={onSubmit}>투두 만들기</button>
      </form>
      <ul>
        {todoList.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
