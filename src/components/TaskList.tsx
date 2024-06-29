import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.filter(task => !task.completed).map(task => (
          <li key={task.id}>
            {task.text} <button onClick={() => onComplete(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
