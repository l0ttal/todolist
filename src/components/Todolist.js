import React, { useState } from 'react';
import TodoTable from './TodoTable';

function Todolist() {
	const [input, setInput] = useState({
		description: '',
		date: '',
	});
	const [todos, setTodos] = useState([]);

	function addTodo() {
		setTodos([input, ...todos]);
	}

	function deleteTodo(row) {
		setTodos(todos.filter((item, i) => row !== i));
	}

	return (
		<div className='App'>
			<h2>Add todo:</h2>
			Date:
			<input name="date" placeholder="dd.mm.yyyy" value={input.date} onChange={event => setInput({ ...input, [event.target.name]: event.target.value })} />
			Description:
			<input name="description" placeholder="Something to do" value={input.description} onChange={event => setInput({ ...input, [event.target.name]: event.target.value })} />
			<button onClick={addTodo}>Add</button>
			<TodoTable todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
}

export default Todolist;