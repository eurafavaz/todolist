import React, { useState } from "react";
import "../TasksList/TasksList.css";

function TasksList() {
  const [taskSelected, setTaskSelected] = useState({});

  function addNewTask(index) {
    const initValue = (Number = taskSelected[index] || 0);
    const task = {
      [index]: initValue + 1,
    };
    setTaskSelected({ ...taskSelected, ...task });
  }

  return (
    <div>
      <h1>Lista de tarefas aqui</h1>
    </div>
  );
}

export default TasksList;
