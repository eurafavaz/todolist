import "../CreateTask/CreateTask.css";
// import { Input } from "../Input/Input";
import { useState } from "react";

export function CreateTask() {
  const [name, setName] = useState([]);
  const [complete, setComplete] = useState([false]);

  return (
    <div>
      <form>
        {/* <Input
          name={"complete-task"}
          setField={setComplete}
          value={complete}
        />
        <Input
          name={"name-task"}
          label={"Taks:"}
          setField={setName}
          value={name} */}
        />
      </form>
    </div>
  );
}
