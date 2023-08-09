import { todoStore } from "./state.ts";
import { useState } from "react";

export const Input = () => {
  const [taskContent, setTaskContent] = useState("");

  const submitTask = () => {
    if (taskContent != "") {
      todoStore.addTask(taskContent);
      setTaskContent("");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setTaskContent(e.currentTarget.value)}
        placeholder="Enter a task"
        value={taskContent}
      />
      <button onClick={submitTask}>Submit</button>
    </div>
  );
};