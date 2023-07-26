import React from "react";
import styles from "./UserInput.module.css";

function UserInput(props) {
  const inputChangeHandler = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div className={styles.userInput}>
      <label htmlFor={props.id}>{props.label}:</label>
      <input
        className={styles.input}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={inputChangeHandler}
      />
    </div>
  );
}

export default UserInput;
