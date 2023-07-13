import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";
import { ToDoList } from "./ToDoList/ToDoList";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import "./App.css";

function App() {
    return (
        <div className="App">
            <ToDoCounter />
            <ToDoSearch />

            <ToDoList>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </ToDoList>

            {/* <CreateToDoSearch /> */}
        </div>
    );
}

export default App;
