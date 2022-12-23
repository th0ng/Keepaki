import { Helmet } from "react-helmet";

import { Route, Routes } from "react-router-dom";

import { HomePage, RegisterPage } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
