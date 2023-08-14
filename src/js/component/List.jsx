import React from "react";

const List = ({children}) => {
    return (
        <ul className="card-list">
            {children}
        </ul>
    )
}

export default List;