import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "./TodoItem.css";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            {
                <span
                    className={`Icon Icon-check ${
                        props.completed && "Icon-check--active"
                    }`}
                    onClick={props.onComplete}
                >
                    <FaCheckCircle />
                </span>
            }
            <p
                className={`TodoItem-p ${
                    props.completed && "TodoItem-p--complete"
                }`}
            >
                {props.text}
            </p>
            {
                <span className="Icon Icon-delete" onClick={props.onDelete}>
                    <MdDelete />
                </span>
            }
        </li>
    );
}

export { TodoItem };
