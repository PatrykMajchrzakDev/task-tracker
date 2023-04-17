import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  };
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Math.floor(Math.random() * 10000) + 1, ...task };
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    getTasksFromLocalStorage()
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: !task.reminder } : task
        )
      )
    );
  };

  return (
    <div className="container" lang="pl">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks added"
      )}
    </div>
  );
}

export default App;
