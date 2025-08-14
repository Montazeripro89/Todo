import TodoListItem from "./TodoListItem";


export default function TodoList({ todos }) {


    return (
        <ul className="list-reset">
            { todos.map( (todo, index) => <TodoListItem key={index} todo={todo} />) }
        </ul>
    )
}
