import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<>Login</>}></Route>
				<Route path="/checkout" element={<><Header /><h1>Checkout</h1></>}></Route>
				<Route path="/home" element={<><Home /></>}></Route>
				<Route path="/" element={<Header />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
