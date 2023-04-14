import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Eat breakfast",
      day: "14 May 2023 7:30am",
      reminder: true,
    },
    {
      id: 2,
      text: "Go to work",
      day: "14 May 2023 8:30am",
      reminder: true,
    },
    {
      id: 3,
      text: "Buy groceries",
      day: "15 May 2023 4:30pm",
      reminder: false,
    },
  ]);

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        ///...task gets me all task properties and then reminder is changed
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
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
