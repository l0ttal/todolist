import React, { useState } from 'react';

function Todolist() {
	const [input, setInput] = useState({
		description: '',
		date: '',
	});
	const [todos, setTodos] = useState([]);

	function addTodo() {
		setTodos([input, ...todos]);
	}

	return (
		<div className='App'>
			<h2>Add todo:</h2>
			Date:
			<input name="date" placeholder="dd.mm.yyyy" value={input.date} onChange={event => setInput({ ...input, [event.target.name]: event.target.value })} />
			Description:
			<input name="description" placeholder="Something to do" value={input.description} onChange={event => setInput({ ...input, [event.target.name]: event.target.value })} />
			<button onClick={addTodo}>Add</button>
			<table>
				<tbody>
					<tr>
						<th>Date</th>
						<th>Description</th>
					</tr>
					{
						todos.map((todo) =>
							<tr key={todo.description}>
								<td>{todo.date}</td>
								<td>{todo.description}</td>
							</tr>
						)
					}
				</tbody>
			</table>
		</div>
	);
}

export default Todolist;