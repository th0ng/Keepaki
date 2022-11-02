import {Helmet} from "react-helmet";

import { Route, Routes } from 'react-router-dom';

import { HomePage, Register } from './pages';

const App = () => {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keepaki</title>
        <link rel="apple-touch-icon" href="./icons/apple-touch-icon.png" />
      </Helmet>
      <div>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      </div>
    </div>
  ) 
}

export default App;