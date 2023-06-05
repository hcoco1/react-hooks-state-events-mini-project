import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")
  
  const newCategories = categories.filter((category)=>{
     return category !== "All"
     
  })

  function handleText(e){
    setText(e.target.value)
  }

  function handleCategory(e){
    setCategory(e.target.value)
    
  }

function onSubmit(e){
  console.log(category)
  e.preventDefault()
  const newItem = 
  {
    id: uuidv4(),
    text: text,
    category: category
  }
  onTaskFormSubmit(newItem)
  
}


  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {newCategories.map((category)=> (
            <option key={category} value={category} >{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
