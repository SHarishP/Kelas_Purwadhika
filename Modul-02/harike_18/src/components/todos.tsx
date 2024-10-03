import { memo } from "react";
interface ITodos {
    todos: string[];
    addTodo: () => void;
}

/* 
    Bisa kita lihat pada interface addTodo, kita menggunakan () => void, Jika menggunakan tipe data void, maka kita hanya dapat
    melempar functionnya, dan bukan 'addTodo'. Jika kita ingin langsung menggunakan addTodo, kita menggunakan 
    addTodo: React.Dispatch<React.SetStateAction<boolean>>

*/

function Todos(props: ITodos) {
    const {todos, addTodo } = props;
    /* 
        const {todos, addTodo } = props; berarti kita mempunyai todos dan addTodo yang berasal dari props, dan langsung kita destructure
    */

    console.log("child render");

    return (
        <div>
            <h1>Todo List</h1>
            {todos.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default memo (Todos);