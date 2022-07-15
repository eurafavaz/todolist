import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [taskList, setTaskList] = useState([]);

  async function getAllTasks() {
    const response = await fetch("http://localhost:8000/tasks");
    const allTasks = await response.json();
    setTaskList([...allTasks]);
  }

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="home">
      {taskList.map((task) => (
        <div className="cards">
          <div className="elements-line" key={task.id}>
            <input type="checkbox" />
            {task.complete}
            <label className="task" htmlFor="">{task.name}</label>
            <div className="bttn">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
