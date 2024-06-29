import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface CompletedTaskProps {
  tasks: Task[];
}

const CompletedTask: React.FC<CompletedTaskProps> = ({ tasks }) => {
  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.filter(task => task.completed).map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTask;
