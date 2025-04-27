import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import EditTaskModal from "./Modal/EditTaskModal";


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  editingTaskId: number | null;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
  setEditingTaskId: (id: number | null) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  editingTaskId,
  toggleTask,
  deleteTask,
  editTask,
  setEditingTaskId,
}) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="w-[5rem] h-[5rem] accent-[#5A877D] cursor-pointer"
      />
      <Input
        type="text"
        className={`bg-transparent ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
        value={task.text}
        readOnly
        onChange={(e : any) => editTask(task.id, e.target.value)}
      />
      <Button className="bg-red-500 hover:bg-red-600" onClick={() => deleteTask(task.id)}>Delete</Button>
      <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => setEditingTaskId(task.id)}>Edit</Button>

      {editingTaskId === task.id && (
        <EditTaskModal
          isOpen={true}
          task={task}
          onClose={() => setEditingTaskId(null)}
          onSave={(newText:string) => {
            editTask(task.id, newText);
            setEditingTaskId(null);
          }}
        />
      )}
    </div>
  );
};

export default TaskItem;
