import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function Todolist() {
	const [input, setInput] = useState({
		description: '',
		date: '',
		priority: '',
	});
	const [todos, setTodos] = useState([]);
	const gridRef = useRef();

	const [columnDefs] = useState([
		{
			field: 'description',
			sortable: true,
			filter: true,
			floatingFilter: true,
		},
		{
			field: 'date',
			sortable: true,
			filter: true,
			floatingFilter: true,
		},
		{
			field: 'priority',
			sortable: true,
			filter: true,
			floatingFilter: true,
			cellStyle: params =>
				params.value === 'High' ? { color: 'red' } : { color: 'black' },
		},
	]);

	function addTodo() {
		setTodos([input, ...todos]);
	}

	function deleteTodo() {
		if (gridRef.current.getSelectedNodes().length === 0) return alert('Select row first');
		setTodos(todos.filter((todo, index) =>
			index !== gridRef.current.getSelectedNodes()[0].childIndex));
	}

	return (
		<div className='App'>
			<div className='inputRow'>
				<input name="description" placeholder="Something to do" value={input.description} onChange={event =>
					setInput({ ...input, [event.target.name]: event.target.value })} />
				<input name="date" type="date" placeholder="dd.mm.yyyy" value={input.date} onChange={event =>
					setInput({ ...input, [event.target.name]: event.target.value })} />
				<input name="priority" placeholder="Priority" value={input.priority} onChange={event =>
					setInput({ ...input, [event.target.name]: event.target.value })} />
				<button onClick={addTodo}>Add</button>
				<button onClick={deleteTodo}>Delete</button>
			</div>
			<div className='ag-theme-material' style={{ margin: 'auto', width: '60', height: 600 }}>
				<AgGridReact
					ref={gridRef}
					onGridReady={params =>
						gridRef.current = params.api}
					rowSelection='single'
					rowData={todos}
					columnDefs={columnDefs}
					animateRows={true} />
			</div>
		</div>
	);
}

export default Todolist;