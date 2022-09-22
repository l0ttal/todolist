import React, { useState } from 'react';

function Todolist() {
	const [description, setDescription] = useState('');
	const [todos, setTodos] = useState([]);

	function addTodo() {
		setTodos([description, ...todos]);
	}

	return (
		<div className='App'>
			<input placeholder="Something to do" value={description} onChange={event => setDescription(event.target.value)} />
			<button onClick={addTodo}>Add</button>
			<table>
				<tbody>
					{
						todos.map(todo =>
							<tr>
								<td>{todo}</td>
							</tr>
						)
					}
				</tbody>
			</table>
		</div>
	);
}

export default Todolist;