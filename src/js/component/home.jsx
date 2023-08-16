import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import toDoDataList from "../data";


const Home = () => {
	const [task, setTask] = useState(""); // Estado para poder escuchar el value del input.
	const [toDoList, setToDoList] = useState(); // Estado para actualizar la lista.
	
	const handleNewTask = (e) => {  //Función handle para que el input sea "variable", dando valor a value = contenido del input.
		setTask(e.target.value)
	}
	
	const handleDeleteButton = (id) => {
		const toDeleteTask = toDoDataList.map((toDo) => toDo.id)
		const toDeleteTaskIndex = toDeleteTask.findIndex((element) => element === id);
		toDoDataList.splice(toDeleteTaskIndex, 1);
		return (
			setToDoList( // Renderizado del estado de la lista
				toDoDataList.map((toDo) => { 
					const taskId = toDo.id;
					return (
						<ListItem id={`task-${toDo.id}`} isTask={true}  toDelete={() => handleDeleteButton(taskId)}>
							{toDo.task}
						</ListItem>
					)
				})
			)
		)
	}
	
	const handleSubmit = (e) => { // Función handle para el submit. Con esto controlamos la acción del submit del al ejecutarlo.
		e.preventDefault(e);

		const getLastId = () => {
			let ids = toDoDataList.map(toDo => toDo.id);
			if (ids[0] === undefined){
				const lastId = 0
				return lastId;
			};
			const lastId = Math.max(...ids) + 1;
			return lastId
		};

		const newTask = {  //Creo un objeto con el id más alto y con el valor de la key task igual al promt value del input con id o name = taskCreator
			id : getLastId(),
			task : taskCreator.value
		}
		
		toDoDataList.unshift(newTask)

		setToDoList( // Renderizado del estado de la lista
			toDoDataList.map((toDo) => { 
				const taskId = toDo.id;
				return (
					<ListItem id={`task-${toDo.id}`} isTask={true}  toDelete={() => handleDeleteButton(taskId)}>
						{toDo.task}
					</ListItem>
				)
			})
		)
	}

	return (
		<List>
			<ListItem>
				<form onSubmit={handleSubmit} >
				<input
					type="text"
					id="taskCreator"
					name="taskCreato"
					value={task}
					onChange={handleNewTask}
          		/>
				</form>
			</ListItem>
			{toDoList}
			<ListItem id="items-left">
				{toDoDataList.length} items left.
			</ListItem>
		</List>
	);
};

export default Home;
