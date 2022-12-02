import React from 'react';
import './App.css';
import { AppRoutes } from "./core/pages/Routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <AppRoutes />
          </div>
      </BrowserRouter>
  );
}

export default App;
