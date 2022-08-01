/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="SignUp" element={<SignUp />} />
						<Route path="Contact" element={<Contact />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
