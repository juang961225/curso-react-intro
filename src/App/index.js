import React from "react";
import { useLocalStorageTodos } from "./useLocalStorageTodos";
import { AppUi } from "./AppUi";

// const defaultTodos = [
//     { text: "Cortar cebolla", completed: true },
//     { text: "Tomar el Curso de Intro a React.js", completed: false },
//     { text: "Llorar con la Llorona", completed: false },
//     { text: "LALALALALA", completed: false },
//     { text: "uses", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JOSN.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
    const {
        saveItem: saveTodos,
        item: todos,
        loading,
        error,
    } = useLocalStorageTodos("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState("");

    const completedTodo = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
        return todo.text
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase());
    });

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <AppUi
            loading={loading}
            error={error}
            completedTodo={completedTodo}
            totalTodos={totalTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    );
}

export default App;
