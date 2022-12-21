
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
		<div className="App">
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			<div className="max-w-[90%] mx-auto">
				<RouterProvider router={router}></RouterProvider>
			</div>
		</div>
	);
}

export default App;
