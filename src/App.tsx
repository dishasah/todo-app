import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CompletedTask from './components/CompletedTask';
import './App.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn TypeScript', completed: false },
    { id: 3, text: 'Build a ToDo App', completed: false },
  ]);

  const handleComplete = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    ));
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TaskList tasks={tasks} onComplete={handleComplete} />
      <CompletedTask tasks={tasks} />
    </div>
  );
};

export default App;
