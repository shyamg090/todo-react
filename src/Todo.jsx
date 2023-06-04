import React, { useEffect, useState } from "react";
import quill from "../src/images/quill.png";
import trash from "../src/images/trash.png";

function Todo() {
  const get_localStorage = () => {
    const get_todo = localStorage.getItem("todo_items");
    if (get_todo) {
      return JSON.parse(get_todo);
    } else {
      return [];
    }
  };

  const [todo, setTodo] = useState(get_localStorage()); //initially checks in the local storage if empty the assigns []
  const [input, setInput] = useState("");
  console.log(input);

  //---ADD TODO AND ADDING OBJECT WITH UNIQUE KEY AND NAME_OF_TODO---
  const addTodo = (event) => {
    event.preventDefault();
    const input_objs = {
      id: new Date().getTime().toString(),
      name: input,
    };
    // since input_obj is a object to acess name input_obj.name
    setTodo([...todo, input_objs]);
    console.log(todo);
    setInput("");
  };

  // -----DELETING THE TODO WITH THE HELP OF THE FILTER SO THAT IT RETURNS NEW ARRAY BUT OPERATIONS IS SAME AS MAP---
  const deleteTodo = (received_id) => {
    const filteredArr = todo.filter((item) => {
      return item.id !== received_id;
    });
    setTodo(filteredArr);
    console.log(todo);
    setInput("");
  };
  // item is local to this filter here that is each item in array to which filter has to be applied

  //---TO EMPTY THE LIST IN A GO---
  const emptyList = (e) => {
    console.log('eeeha');
    e.preventDefault();
    setTodo([]);
  };

  // --ADD TO LOCALSTORAGE USING SETITEM() ADDING EVERY TIME THE PAGE REFRESHES
  useEffect(() => {
    // console.log(todo);
    // console.log(JSON.stringify(todo));
    try {
      localStorage.setItem("todo_items", JSON.stringify(todo));
    } catch (error) {
      console.log(error);
    }
  }, [todo]);

  // ---RETURN FUNCTION FOR TODO.JSX---
  return (
    <>
      <div className="top">
        <form>
          <input
            type="text"
            value={input}
            placeholder="🐱‍👤Enter the todo🐱‍👤"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <button disabled={!input} onClick={addTodo}>
            Add Todo
          </button>
        </form>
      </div>

      <div className="todoList">
        {todo.map((item) => {
          return (
            <div className="singleList" key={item.id}>
              <div className="img">
                <img src={quill} alt="Rocketimg" />
              </div>
              <div className="h3Tag">
                <h3>{item.name}</h3>
              </div>

              <div className="img">
                <img
                  onClick={() => deleteTodo(item.id)}
                  src={trash}
                  alt="binimg"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="emptyList-button">
        <form>
          <button onClick={event => emptyList(event)}>Empty All</button>
        </form>
      </div>
    </>
  );
}

export default Todo;
