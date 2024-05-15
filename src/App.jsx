import { useRef, useState } from "react";
import "./App.css";
import WaveAudio from "./assets/audio/wave.mp3";
import SettingImage from "./assets/img/settings.png";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
import { COLOR } from "./constants/theme";

const App = () => {
  const [theme, setTheme] = useState({
    color: COLOR.BLUE,
  });
  const [todos, setTodos] = useState([]);
  const [settingModal, setSettingModal] = useState(false);

  const audioRef = useRef();

  // todo
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

  // modal
  const showModal = () => setSettingModal(true);
  const closeModal = () => setSettingModal(false);

  // audio
  const playAudio = () => audioRef.current.play();
  const stopAudio = () => audioRef.current.pause();

  const working_todos = todos.filter((todo) => !todo.isDone);
  const done_todos = todos.filter((todo) => todo.isDone);
  const done_rate = todos.length === 0 ? 0 : done_todos.length / todos.length;

  return (
    <div className={`app ${theme.color}`}>
      <audio ref={audioRef} src={WaveAudio} loop></audio>
      <div
        style={{ transform: `translateY(${-75 * (1 - done_rate)}%)` }}
        className="wave-wrap"
      >
        <div className="wave"></div>
      </div>
      {settingModal ? (
        <Modal title="🔨 설정" closeModal={closeModal}>
          <div className="setting-content">
            <div className="theme-sound">
              <h4>배경 음악</h4>
              <div className="setting-options">
                <button onClick={playAudio}>ON</button>
                <button onClick={stopAudio}>OFF</button>
              </div>
            </div>
            <div className="theme-colors">
              <h4>색상</h4>
              <div className="setting-options">
                {Object.values(COLOR).map((c, i) => (
                  <button
                    key={i}
                    className={c}
                    onClick={() => setTheme({ ...theme, color: c })}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
      <header className="header">
        <span style={{ width: "1.5rem" }}></span>
        <span>{`📆 ${
          new Date().getMonth() + 1
        }월 ${new Date().getDate()}일`}</span>
        <button onClick={showModal}>
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
