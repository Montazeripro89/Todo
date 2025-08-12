import { useState } from "react";
import IReset from "./In-Components/IReset";
import ListReset from "./In-Components/ListReset";
import { v4 as uuidv4 } from 'uuid';

function Todos() {

    let [Works , setWorks] = useState(  
        [
            {
                id : uuidv4() ,
                Work : 'Go to school 1'
            } , 

            {
                id : uuidv4() ,
                Work : 'Go to school 2'
            }
        ]
    )

    function addTodo(Event) {
        if (Event.key === 'Enter' && Event.target.value != '') {
            let Value = Event.target.value;
            setWorks([
                ...Works , 
                {
                    Work : Value,
                }
            ]) 

            Event.target.value = '';
        }
    
    }

    return ( 

        <>
        
            <div className="bg-gray-100">
                <div className="flex items-center justify-center h-screen">
                    <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                        <div className="flex items-center mb-6">
                            <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                        </div>
                        <div className="relative">
                            <input type="text" placeholder="What needs to be done today?"
                            onKeyDown={addTodo}
                            className="w-full px-2 py-3 border rounded outline-none border-grey-600"/>
                        </div>
                            <ListReset>
                                {
                                    Works.map((Works , index) => <IReset Work={Works.Work} ItsID={Works.id} key={index}/>)
                                }
                            </ListReset>  
                    </div>
                </div>
            </div>
        
        </>

    );
}

export default Todos;