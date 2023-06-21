import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
        <h1>
            You have completed {completed} of {total} To Do
        </h1>
    );
}

export { TodoCounter };
