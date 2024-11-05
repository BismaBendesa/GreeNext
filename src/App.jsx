import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kelas from "./pages/Kelas";
import Tentang from "./pages/Tentang";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route path="/kelas" element={<Kelas />} />
				<Route path="/tentang" element={<Tentang />} />
				<Route path="/footer" element={<Footer />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
