import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function Todolist() {
	const [input, setInput] = useState({
		description: '',
		date: '',
		priority: '',
	});
	const [todos, setTodos] = useState([]);
	const [open, setOpen] = useState(false);
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
		setOpen(true);
	}

	return (
		<div className='App'>
			<div className='inputRow'>
				<Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
					<TextField variant="standard" name="description" label="Something to do" value={input.description} onChange={event =>
						setInput({ ...input, [event.target.name]: event.target.value })} />
					<TextField
						variant="standard"
						name="date"
						value={input.date}
						id="datetime-local"
						label="Next appointment"
						type="datetime-local"
						sx={{ width: 250 }}
						InputLabelProps={{
							shrink: true,
						}}
						onChange={event =>
							setInput({ ...input, [event.target.name]: event.target.value })}
					/>
					<TextField variant="standard" name="priority" label="Priority" value={input.priority} onChange={event =>
						setInput({ ...input, [event.target.name]: event.target.value })} />
					<Button variant="contained" startIcon={<AddIcon />} onClick={addTodo}>Add</Button>
					<Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={deleteTodo}>Delete</Button>
					<Snackbar
						open={open}
						autoHideDuration={3000}
						message="Todo deleted"
						onClose={() => setOpen(false)}
					/>
				</Stack>
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