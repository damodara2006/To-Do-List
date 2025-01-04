import { useState } from "react";

function ToDoList() {
  const [lists, setlists] = useState(["Homework", "Reading", "Excercise"]);
  const [newTask, setnewTask] = useState("");

  function NewTask() {
    const task = document.getElementById("input");
    const newtask = task.value;
    setnewTask(newtask);
    task.value = "";
  }
  function handlelist() {
    if (newTask.trim() !== "") setlists((l) => [...l, newTask]);
  }
  function deletelist(index) {
    setlists(lists.filter((_, i) => i !== index));
  }
  function handleup(index) {
    if (index > 0) {
      const mylist = [...lists];
      [mylist[index], mylist[index - 1]] = [mylist[index - 1], mylist[index]];
      setlists(mylist);
    } else {
      alert("It is already in first");
    }
  }
  function handledown(index) {
    if (index < lists.length - 1) {
      console.log(lists.length);
      const mylist = [...lists];
      [mylist[index], mylist[index + 1]] = [mylist[index + 1], mylist[index]];
      setlists(mylist);
    } else {
      alert("You are in last list");
    }
  }

  return (
    <div>
      <h1>To-Do-List</h1>
      <span id="adds">
        <input
          type="text"
          id="input"
          value={newTask}
          placeholder="Enter the work"
          onChange={NewTask}
        />
        <button className="add" onClick={handlelist}>
          Add
        </button>
      </span>
      <span className="whole">
        <ol>
          {lists.map((list, index) => (
            <li key={index} className="list">
              <span>
                <span className="text"> {list} </span>{" "}
                <span className="buttons">
                  {" "}
                  <button className="delete" onClick={() => deletelist(index)}>
                    Delete
                  </button>{" "}
                  <button className="upper" onClick={() => handleup(index)}>
                    👆
                  </button>{" "}
                  <button className="down" onClick={() => handledown(index)}>
                    👇
                  </button>
                </span>
              </span>
            </li>
          ))}
        </ol>
      </span>
    </div>
  );
}
export default ToDoList;
