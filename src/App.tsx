import { useEffect, useState } from 'react'
import './App.css'
import { Input } from './components/Input';
import ToDoItem from './components/ToDoItem';
import { Task, todoStore } from './components/state';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    todoStore.subscribe(setTasks);
    todoStore.init();
  });

  return (
    <div className={"App"}>
      <header className={"header"}>
        <h2>To do list</h2>
        <h5>RxJS</h5>
        <div>
          <Input />
          <ul>
            {tasks.map((task) => (
              <ToDoItem task={task} />
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App
