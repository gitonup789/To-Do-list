import React, {useState} from "react";
import "./App.css"
const Todos = () => {
    /* `const [value, setValue] = useState("")` is using the `useState` hook in React to create a state
    variable called `value` and a function called `setValue` to update the value. The initial value
    of `value` is set to an empty string `""`. */
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([]) // how to write it in react
    const [update, setUpdate] = useState(null)
    const [edit, setEdit] = useState ("")
    // let vanillaJavaScriptArray = [] //how to write it in vanilla js

    // const trackClick = () => {
    //     setCount((count) => count + 1);
    //   };

    const handleClick =() => {
        setTodo([...todo, value]) //add new value to array in react
        // vanillaJavaScriptArray.push(value) // vanilla js way to add to array

    }

    const deleteBtn = (index) => {
       const deleteItems =[...todo]
       deleteItems.splice(index,1)
       setTodo(deleteItems)
    }

    const updateTb = (index) => {
        setUpdate(index)
        setEdit(todo[index])
    }

    const handleUpdate = () => {
        if(edit !==""){
            const updateValue = [...todo]
            updateValue[update] = edit
            setTodo(updateValue)
            setUpdate(null)
            setEdit("")
        }
    } 

    console.log(todo)

    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleClick}>Add to list</button>
            <div>
                <ol>
                    {todo.map((todoItem, index) => (
                        <li key={index}>
                            {update === index ? (
                                <div>
                                    <input
                                        value={edit}
                                        onChange={(e) => setEdit(e.target.value)}
                                    />
                                    <button onClick={handleUpdate}>Update</button>
                                </div>
                            ) : (
                                <div>
                                    {todoItem}
                                    <button onClick={() => updateTb(index)}>Edit</button>
                                    <button onClick={() => deleteBtn(index)}>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Todos