import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { TaskList } from "../../components/ui/TaskList";
import TaskItem from "../../components/ui/TaskItem";
import { useTaskStore } from "../../stores/useTaskManagerStore";
import { FilterTask } from "../../enums/StatusTask.enum";

const TaskManager = () => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const { tasks,fetchTasks, addTaskStore, toggleTaskStore, removeTaskStore, editTaskStore } = useTaskStore();

    useEffect(() => {
        fetchTasks()
    }, []);


  const addTask = () => {
    if (!input.trim()) return;
    setLoading(true);

    // feth data from api
    setTimeout(() => {
      addTaskStore({ id: Date.now(), text: input.trim(), completed: false });

      setInput("");
      setLoading(false);
    }, 1000);
  };

  const toggleTask = (id: number) => {
    toggleTaskStore(id);

  };

  const removeTask = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmDelete) return;

    removeTaskStore(id);
  };

  const editTask = (id: number, newText: string) => {
    editTaskStore(id, newText);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === FilterTask.COMPLETED) return task.completed;
    if (filter === FilterTask.PENDING) return !task.completed;
    return true;
  });


  return (
    <div className="w-full md:w-[80%] xl:w-[50%] mx-auto bg-[#F1F3EE] my-[3rem] p-[3rem] space-y-[3rem] rounded-[2rem]">
      <h1 className="text-[3rem] font-bold text-black">Task Manager</h1>

      <div className="flex gap-[1rem] justify-center items-center">
        <Input
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white"
        />
        <Button loading={loading} loadingText="Adding..." onClick={addTask}>
          Add
        </Button>
      </div>

      <div className="flex  justify-center space-x-2">
        <Button
          className="bg-gray-500 hover:bg-gray-600"
          onClick={() => setFilter(FilterTask.ALL)}
        >
          All
        </Button>
        <Button
          className="bg-emerald-600 hover:bg-emerald-700"
          onClick={() => setFilter(FilterTask.COMPLETED)}
        >
          Completed
        </Button>
        <Button
          className="bg-yellow-500 hover:bg-yellow-600 "
          onClick={() => setFilter(FilterTask.PENDING)}
        >
          Pending
        </Button>
      </div>

      <TaskList className="max-h-[300px] !mt-[5rem]">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editingTaskId={editingTaskId}
            toggleTask={toggleTask}
            deleteTask={removeTask}
            editTask={editTask}
            setEditingTaskId={setEditingTaskId}
          />
        ))}
      </TaskList>
    </div>
  );
};

export default TaskManager;
