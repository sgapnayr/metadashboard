import React from 'react';
import ReactDOM from 'react-dom/client';
import REIP from './REIP';
import INNERG from './INNERG';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/reip' element={<REIP />} />
        <Route path='/innerg' element={<INNERG />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
