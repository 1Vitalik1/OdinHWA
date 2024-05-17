import React from 'react';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Catalog from './Catalog.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Catalog} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;