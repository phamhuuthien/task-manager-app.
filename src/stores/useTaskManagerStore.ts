import { create } from 'zustand';
import { Task } from '../types/task.type';
import { createTask, deleteTask, getTasks, updateStatusTask, updateTask } from '../services/TaskService';

interface TaskStore {
  tasks: Task[];
  fetchTasks: () => void;
  addTaskStore: (task:Task) => void;
  toggleTaskStore: (id: number) => void;
  removeTaskStore: (id: number) => void;
  editTaskStore: (id: number, newText: string) => void;
}

export const useTaskStore = create<TaskStore>()(
    (set, get) => ({
      tasks: [],

      fetchTasks: () => {
        const tasks:Task[] = getTasks();
        set({ tasks });
      },

      addTaskStore: (task:Task) => {
        // giả sử call api
        createTask(task);
        set({ tasks: [task, ...get().tasks] });
      },

      toggleTaskStore: (id) => {
        updateStatusTask(id);
        set({
          tasks: get().tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        });
      },

      removeTaskStore: (id) => {
        deleteTask(id);
        set({
          tasks: get().tasks.filter((t) => t.id !== id),
        });
      },

      editTaskStore: (id, newText) => {
        updateTask(id, newText);
        set({
          tasks: get().tasks.map((t) =>
            t.id === id ? { ...t, text: newText } : t
          ),
        });
      },
    }),
);
