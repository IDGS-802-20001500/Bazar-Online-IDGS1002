import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ResultsPage />} />
        <Route path="/items/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
