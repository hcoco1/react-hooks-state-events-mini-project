import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {


  
  return (
    <div className="tasks">
      {tasks.map((task) => (
          <Task key={task.id} {...task} handleDelete={handleDelete}/>
        ))}
    </div>
  );
}

export default TaskList;