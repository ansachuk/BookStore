import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../../pages/MainPage/MainPage";
import ListPage from "../../pages/ListPage/ListPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path="/list" element={<ListPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
}

export default App;
