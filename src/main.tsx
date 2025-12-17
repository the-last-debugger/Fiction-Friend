import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TasteProvider } from "./context/TasteContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<TasteProvider>
			<App />
		</TasteProvider>
	</BrowserRouter>
);
