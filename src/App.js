import './App.css';
import TaskList from "./components/Tasklist";
import CompletedTask from "./components/completeTask";
import { useState } from "react";

function App() {
  let [inputValue, setInputValue] = useState(" ");        // input value
  let [items, setItems] = useState([]);                   // Add task to new list in TaskList
  let [completeName, setCompleteName] = useState([])      // Add task to completeTask List
  let [edit, setEdit] = useState("")                      // Edit Task
  let [inputChange, setInputChange] = useState("")

  //  get input value
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Add button
  const handleClick = () => {
    setItems([...items, inputValue])
    setInputValue("");
  };

  //  Delete button
  const deleteBtn = (id, listtype) => {
    console.log(id)
    if (listtype == "tasklist") {
      // if condition for  confirmation alter
      if (window.confirm("Do you want to delete?")) {
        // take new variable for
        const newList = items.filter((elem, index) => {
          console.log(elem)
          return id !== index
        })
        setItems(newList)
      }
    }
    else {
      if (window.confirm("Do you want to delete?")) {
        // take new variable for
        const newList = completeName.filter((elem, index) => {
          return id !== index
        })
        setCompleteName(newList)
      }
    }
  }

  //  Checkbox to tranfer list item from Tasklist to complete Tasklist
  const completetask = (id) => {
    console.log(id)
    // for remove elements from Tasklist when click on checkbox
    const List = items.filter((element, index) => {
      console.log(element)
      return id !== index
    })
    setItems(List)

    //  for element tranfer from Tasklist to complete task list
    const deleteItem = items.filter((ele, index) => {
      console.log(ele)
      return id == index
    })
    console.log('deleteItem: ', deleteItem)
    setCompleteName([...completeName, ...deleteItem])
  }



  //  Undo button
  const undofunc = (id) => {
    var backItem = completeName.filter((ele, index) => {
      console.log(ele)
      return id !== index
    })
    setCompleteName(backItem)
    console.log(backItem)

    var undoItem = completeName.filter((ele, index) => {
      console.log(ele)
      return id == index
    })
    setItems([...items, ...undoItem])
    console.log(items)
  }

  // Edit Task
  const editTask = (id) => {
    setEdit(id)
    console.log(id)
  }
  // Check Tick After Edit
  const tick = (id) => {
    console.log(id)
    var newArray = [...items]
    newArray[id] = inputChange
    setItems(newArray)
    setEdit('')
  }

  const newInput = (event) => {
    setInputChange(event.target.value)
    console.log(event)
    console.log(inputChange)
  }

  return (
    <div className="App">
      <h1 className="app-header"> To-Do List </h1>
      <div className="container">
        <div className="add-task">
          <input type="text" value={inputValue} placeholder="Add new Task" onChange={handleChange} id="input" />
          <button onClick={handleClick}> Add </button>
        </div>
        <div className="tasks-row">
          <TaskList task={items}
            callback={deleteBtn}
            complete={completetask}
            tick={tick}
            editTask={editTask}
            edit={edit}
            newInput={newInput}
          />
          <CompletedTask comptask={completeName} undo={undofunc} callback={deleteBtn} />
        </div>
      </div>
    </div>
  );
}

export default App;
