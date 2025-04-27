import { get, set } from "../components/utils/localStorage";
import { Task } from "../types/task.type";


const getTasks = () => {
    const tasks:Task[] = get("tasks");
    if (!tasks) {
        set("tasks", []);
        return [];
    }
    return tasks;
};

const createTask = (task: Task) => {
    const tasks = getTasks();
    tasks.push(task);
    set("tasks", tasks);
};

const deleteTask = (id: number) => {
    const tasks = getTasks();
    const newTasks = tasks.filter((task) => task.id !== id);
    set("tasks", newTasks);
};

const updateTask = (id: number, newText: string) => {
    const tasks = getTasks();
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, text: newText } : task));
    set("tasks", newTasks);
};

const updateStatusTask = (id: number) => {
    const tasks = getTasks();
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    set("tasks", newTasks);
};

export { getTasks, createTask, deleteTask, updateTask,updateStatusTask };


