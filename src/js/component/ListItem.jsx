import React from "react";

const ListItem = ({children, id}) => {
    return (
        <li className="list-item" id={id}>{children}</li>
    )
}

export default ListItem;