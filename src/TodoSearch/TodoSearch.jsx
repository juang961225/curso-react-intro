import "./TodoSearch.css";
import React from "react";

function TodoSearch({
    state,
    setState
}) {
    return (
        <input
            type="text"
            value={state}
            className="TodoSearch"
            placeholder="cut onion"
            onChange={(event) => {
                setState(event.target.value);
            }}
        />
    );
}

export { TodoSearch };
