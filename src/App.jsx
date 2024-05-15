import { useState } from "react";
import "./App.css";
import SettingImage from "./assets/settings.png";
import Todo from "./components/Todo";
import { COLOR, MODE } from "./constants/theme";

const App = () => {
  const [theme, setTheme] = useState({ color: COLOR.BLUE, mode: MODE.LIGHT });
  const [todos, setTodos] = useState([]);

  const working_todos = todos.filter((todo) => !todo.isDone);
  const done_todos = todos.filter((todo) => todo.isDone);

  const addTodo = (e) => {
    e.preventDefault();
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    setTodos([
      ...todos,
      { id: id, content: e.target.content.value, isDone: false },
    ]);
    e.target.content.value = "";
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => ({
      ...todo,
      isDone: todo.id === id ? !todo.isDone : todo.isDone,
    }));
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className={`app ${theme.color} ${theme.mode}`}>
      <header className="header">
        <span style={{ width: "1.5rem" }}></span>
        <span>{`📆 ${
          new Date().getMonth() + 1
        }월 ${new Date().getDate()}일`}</span>
        <button>
          <img
            className="header-setting-img"
            src={SettingImage}
            alt="설정 버튼 이미지"
          />
        </button>
      </header>
      <main>
        {/* input form */}
        <form className="todo-form" onSubmit={addTodo}>
          <input
            className="todo-input"
            name="content"
            placeholder="할 일 목록"
          />
          <button className="todo-submit-btn">등록</button>
        </form>
        {/* working section */}
        <section>
          <h3>✏️ working</h3>
          <div className="todo-list">
            {working_todos.length === 0 ? (
              <span>작업 중인 일이 없습니다.</span>
            ) : (
              working_todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ))
            )}
          </div>
        </section>
        {/* done section */}
        <section id="done-section">
          <h3>✅ done</h3>
          <div className="todo-list">
            {done_todos.length === 0 ? (
              <span>완료된 일이 없습니다.</span>
            ) : (
              done_todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  checked
                />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
