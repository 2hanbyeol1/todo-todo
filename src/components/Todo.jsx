import TrashImage from "../assets/img/trash.png";
import "./Todo.css";

const Todo = ({ todo, toggleTodo, deleteTodo, checked }) => {
  return (
    <div className="todo-container">
      <input
        id={`check-btn-${todo.id}`}
        className="check-btn"
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        checked={checked}
      />
      <label htmlFor={`check-btn-${todo.id}`}>
        <span className="content">{todo.content}</span>
      </label>
      <button onClick={() => deleteTodo(todo.id)}>
        <img className="del-btn" src={TrashImage} alt="삭제 버튼 이미지" />
      </button>
    </div>
  );
};

export default Todo;
