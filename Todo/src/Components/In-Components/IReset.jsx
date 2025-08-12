import { useState } from "react";
import DeleteIcon from "../../assets/Icon/DeleteIcon";
import EditIcon from "../../assets/Icon/EditIcon";

function IReset(props) {

    let [Click , setClick] = useState(false);

    let WorkBack = props.Work;
    let ItsID = props.ItsID;

    function Scratch() {
        switch (Click) {
            case true:
                setClick(false)
                break;
            
            default:    setClick(true);
                break;
        }
    }

    return ( 

        <>
        
            <li className="relative flex items-center justify-between px-2 py-6 border-b">
                <div>
                    <input type="checkbox" checked={Click} onChange={() => {}} onClick={Scratch} className=""/>
                    <p className={`inline-block mt-1 ml-2 text-gray-600`} style={{textDecorationLine : Click ? 'line-through' : "none"}}>{props?.Work}</p>
                </div>
                <button type="button" className="absolute right-0 flex items-center space-x-1 cursor-pointer">
                    <EditIcon/>
                    <DeleteIcon onClick={() => console.log([{Click} , {WorkBack} , {ItsID}])}/>
                </button>
             </li>
        
        </>

    );
}

export default IReset;