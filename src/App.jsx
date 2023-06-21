import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./createTodoButton";
import React from "react";

const defaultTodos = [
    { text: "cute onion", completed: true },
    { text: "study react.js", completed: false },
    { text: "go to the bathroom", completed: false },
    { text: "work in my project", completed: true },
    { text: "winner in my life", completed: true },
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter completed={16} total={25} />
            <TodoSearch />

            <TodoList>
                {defaultTodos.map((todo) => (
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}  
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;
