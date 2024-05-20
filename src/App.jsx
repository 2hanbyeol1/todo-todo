import { useState } from "react";
import "./App.css";
import SettingImage from "./assets/img/settings.png";
import Input from "./components/common/input/Input";
import Wave from "./components/common/wave/Wave";
import SettingModal from "./components/setting/SettingModal";
import TodoSection from "./components/todo/TodoSection";
import TAB from "./constants/tab";
import { COLOR } from "./constants/theme";

const App = () => {
  const [theme, setTheme] = useState({
    color: COLOR.BLUE,
  });
  const [todos, setTodos] = useState([]);
  const [settingModal, setSettingModal] = useState(false);
  const [tab, setTab] = useState(TAB.WORKING);

  // todo
  const addTodo = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    if (!title || !content) return;
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    setTodos([
      ...todos,
      { id: id, title: title, content: content, isDone: false },
    ]);
    e.target.title.value = "";
    e.target.content.value = "";
    e.target.title.focus();
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

  // theme
  const setNewColorTheme = (newColor) =>
    setTheme({ ...theme, color: newColor });

  // tab
  const changeTab = (newTab) => {
    setTab(newTab);
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  const doneRate = todos.length === 0 ? 0 : doneTodos.length / todos.length;

  return (
    <div className={`app ${theme.color}`}>
      <Wave doneRate={doneRate} />
      <SettingModal
        visible={settingModal}
        closeModal={closeModal}
        setNewColorTheme={setNewColorTheme}
      />
      <header className="header">
        <div className="header-top">
          <span>{`📆 ${
            new Date().getMonth() + 1
          }월 ${new Date().getDate()}일 - ${Math.floor(
            doneRate * 100
          )}% 완료`}</span>
          <button onClick={showModal}>
            <img
              className="header-setting-img"
              src={SettingImage}
              alt="설정 버튼 이미지"
            />
          </button>
        </div>
        {/* input form */}
        <form className="todo-form" onSubmit={addTodo}>
          <Input borderRadius="left" name="title" placeholder="할 일 제목" />
          <Input name="content" placeholder="할 일 목록" />
          <button className="todo-submit-btn">등록</button>
        </form>
      </header>
      <main>
        <div className="tab">
          <button
            className={tab === TAB.WORKING ? "active" : ""}
            onClick={() => {
              changeTab(TAB.WORKING);
            }}
          >
            ✏️ {TAB.WORKING}
          </button>
          <button
            className={tab === TAB.DONE ? "active" : ""}
            onClick={() => {
              changeTab(TAB.DONE);
            }}
          >
            ✅ {TAB.DONE}
          </button>
        </div>
        <TodoSection
          id={tab}
          todos={tab === TAB.WORKING ? workingTodos : doneTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
};

export default App;
