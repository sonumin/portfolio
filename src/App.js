import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ScrollToTop from "./componets/common/ScrollToTop";
import RecFoodPage from "./pages/RecFoodPage";
import ReadOnlyPage from "./pages/ReadOnlyPage";
import DogiaryPage from "./pages/DogiaryPage";

function App() {
	return (
		<>
			<HashRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route element={<ResumePage />} path="/resume" />
					<Route element={<RecFoodPage />} path="/recfood" />
					<Route element={<ReadOnlyPage />} path="/readonly" />
					<Route element={<DogiaryPage />} path="/dogiary" />
					<Route element={<PortfolioPage />} path="/portfolio" />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
