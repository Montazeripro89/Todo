import { useState } from "react";
import TodoList from "./TodoList";


export default function Todos() {
    const [ todos , setTodos ] = useState([
        {
            title : 'go to school and read books',
            status: true
        },
        {
            title : 'go to gym at 17:00',
            status : false
        }
    ]);
    const [ newTodoTitle , setNewTodoTitle ] = useState("");


    const onInputNewTodoChangeHandler = (event) => {
        setNewTodoTitle(event.target.value)
    }

    const addNewTodoHandler = (event) => {
        if( event.key === 'Enter' && newTodoTitle !== "") {

            setTodos([
                ...todos,
                {
                    title : newTodoTitle,
                    status : false,
                }
            ])

            setNewTodoTitle("");
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                        onChange={onInputNewTodoChangeHandler}
                        onKeyDown={addNewTodoHandler}
                        value={newTodoTitle}
                        className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <TodoList todos={todos}/>
            </div>
        </div>
    )
}
