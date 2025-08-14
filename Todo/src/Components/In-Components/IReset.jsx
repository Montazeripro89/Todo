import { useState } from "react";
import DeleteIcon from "../../assets/Icon/DeleteIcon";
import EditIcon from "../../assets/Icon/EditIcon";

function IReset(props) {
    const Works = props.Works;
    const allWorks = props.allWorks;
    const { deleteTodoHandler, editTodoHandler } = props;

    const [Click, setClick] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [textValue, setTextValue] = useState(Works.Work);

    function Scratch() {
        setClick((prev) => !prev);
    }

    function editModeHandler() {
        setEditMode(!editMode);
    }

    function editTodoHandlerIn(e) {
        let ValueForEdit = e.target.value.trim();

        if (e.key === 'Enter') {
            if (ValueForEdit === '') {
                alert('متن خالی مجاز نیست!');
                return;
            }

            let isDuplicateForEdit = allWorks.some(
                (item) =>
                    item.id !== Works.id &&
                    item.Work.toLowerCase() === ValueForEdit.toLowerCase()
            );

            if (isDuplicateForEdit) {
                alert('این کار قبلاً اضافه شده!');
                return;
            }

            editTodoHandler(Works.id, ValueForEdit);
            setEditMode(false);
        }
    }

    return (
        <>
            {editMode ? (
                <li className="relative flex items-center justify-between px-2 py-6 border-b">
                    <div>
                        <input
                            type="text"
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                            onKeyDown={(e) => editTodoHandlerIn(e)}
                            className="w-full px-4 py-2 border border-gray-200 rounded"
                        />
                    </div>
                    <button
                        type="button"
                        className="absolute right-0 flex items-center space-x-1 cursor-pointer"
                    >
                        <DeleteIcon onClick={() => setEditMode(false)} />
                    </button>
                </li>
            ) : (
                <li className="relative flex items-center justify-between px-2 py-6 border-b">
                    <div>
                        <input
                            type="checkbox"
                            checked={Click}
                            onChange={() => {}}
                            onClick={Scratch}
                        />
                        <p
                            className={`inline-block mt-1 ml-2 text-gray-600`}
                            style={{
                                textDecorationLine: Click ? "line-through" : "none"
                            }}
                        >
                            {Works.Work}
                        </p>
                    </div>
                    <button
                        type="button"
                        className="absolute right-0 flex items-center space-x-1 cursor-pointer"
                    >
                        <EditIcon onClick={editModeHandler} />
                        <DeleteIcon onClick={() => deleteTodoHandler(Works)} />
                    </button>
                </li>
            )}
        </>
    );
}

export default IReset;
