import "./CreateTodoButton.css";

function CreateTodoButton() {
    return <button 
    className="CreateTodoButton"
    onClick={
        (event) => {
            console.log(event)
            console.log('clicked Create')
        }
    }>+</button>;
}

export { CreateTodoButton };
