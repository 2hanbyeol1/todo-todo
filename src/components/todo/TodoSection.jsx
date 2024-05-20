import Todo from "../common/todo/Todo";

const TodoSection = ({ id = "", todos, toggleTodo, deleteTodo }) => {
  return (
    <section id={id}>
      <div className="todo-list">
        {todos.length === 0 ? (
          <span>-</span>
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              checked={todo.isDone}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default TodoSection;
