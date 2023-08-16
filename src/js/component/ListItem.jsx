import React from "react";

const ListItem = ({children, id, isTask, toDelete}) => {
    if (isTask) {
        return (
            <li className="list-item" id={id}>
                {children}
                <button className="delete-button" id={`button-${id}`} onClick={toDelete}>X</button>
            </li>
        )
    }
    return (
        <li className="list-item" id={id}>{children}</li>
    )
}

export default ListItem;