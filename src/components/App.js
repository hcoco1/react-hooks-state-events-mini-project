import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskState, setTaskState] = useState(
    TASKS.map((task) => ({ ...task, id: uuidv4() }))
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(id) {
    setTaskState((prevState) => prevState.filter((task) => task.id !== id));
  }

  function handleTaskFormSubmit(newItem) {
    setTaskState([...taskState, newItem]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = taskState.filter((task) => {
    if (selectedCategory === "All") return true;
    return selectedCategory === task.category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;