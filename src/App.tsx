import { BrowserRouter, Route, Routes } from 'react-router';
import { useState } from 'react';
import Home from './pages/Home/Home';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
