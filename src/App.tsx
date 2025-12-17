import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CategorySelect from "./pages/CategorySelect";
import TasteSetup from "./pages/TasteSetup";
import Recommendations from "./pages/Recommendations";
import Details from "./pages/Details";
import Library from "./pages/Library";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/category-select" element={<CategorySelect />} />
				<Route path="/setup" element={<TasteSetup />} />
				<Route path="/recommendations" element={<Recommendations />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="/library" element={<Library />} />
			</Routes>
		</>
	);
}

export default App;
