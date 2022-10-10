import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Borrow from './components/borrow/Borrow';
import Header from './components/header/Header';
import Requirements from './components/requirements/Requirements';
import Collateral from './components/collateral/collateral';

var history = createBrowserHistory();

function App() {
  return (
    <div className="container">
      <Router history={history}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Requirements />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/collateral" element={<Collateral />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
