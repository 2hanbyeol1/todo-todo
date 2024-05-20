import "./Input.css";

// borderRadius: all, left, right, top, bottom, none
const Input = ({ name, borderRadius = "none", placeholder }) => {
  return (
    <input
      className={`input ${borderRadius}`}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
