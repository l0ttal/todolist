import React, { useState } from 'react';

import Home from './Home';
import About from './About';
import Todolist from './Todolist';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabApp() {
	const [value, setValue] = useState('home');

	const handleChange = (event, value) => {
		setValue(value);
	};

	return (
		<div>
			<Tabs value={value} onChange={handleChange} centered>
				<Tab value="home" label="Home" />
				<Tab value="about" label="About" />
				<Tab value="todos" label="Todos" />
			</Tabs>
			{value === 'home' && <Home />}
			{value === 'about' && <About />}
			{value === 'todos' && <Todolist />}
		</div>
	);
}

export default TabApp;