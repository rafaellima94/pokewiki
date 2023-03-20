import React from 'react';
import './App.css';
import Header from 'components/Header';
import { RouterProvider } from 'react-router-dom';
import Routes from 'routes/Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
