import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import toDoDataList from "../data";


const Home = () => {
	const [toDoList, setToDoList] = useState(toDoDataList);

	const handleToDo = (e) => e.target.value

	return (
		<List>
			<ListItem>
				<form name="addToDo" target="#toDo">
					<input 
					id="toDo"
					type="text" 
					placeholder="What's need to be done?"
					onChange={handleToDo}
					></input>
				</form>
			</ListItem>
		</List>
	);
};

export default Home;
