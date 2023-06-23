import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateButton/createTodoButton";
import React from "react";

const defaultTodos = [
    { text: "cute onion", completed: true },
    { text: "study react.js", completed: false },
    { text: "go to the bathroom", completed: false },
    { text: "work in my project", completed: true },
    { text: "Winner in my life", completed: true },
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState("");

    const completedTodo = todos.filter((todo) => !!todo.completed).length;
    const allTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const todoSearch = searchValue.toLocaleLowerCase();
        return todoText.includes(todoSearch);
    });

    const doneTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text == text
        );

        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text == text
        );

        newTodos.splice(todoIndex, 1)
        setTodos(newTodos);
    };

    return (
        <React.Fragment>
            <TodoCounter completed={completedTodo} total={allTodos} />
            <TodoSearch state={searchValue} setState={setSearchValue} />

            <TodoList>
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => doneTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;
