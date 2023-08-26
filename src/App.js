import { useState } from "react";
import Todo from "./component/Todo";

function App() {
  const [showTodo, setShowTodo] = useState(false);
  const showTodoFn = () => {
    setShowTodo((prev) => !prev);
  };
  return (
    <div>
      <button onClick={showTodoFn}>
        {showTodo ? "투두리스트 숨기기" : "투두리스트 보기"}
      </button>
      {showTodo ? <Todo /> : null}
    </div>
  );
}

export default App;
