import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import FeedingRoutine from './components/feedingRoutinePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login';
import LivestockPage from './components/livestockPage';
import AppointmentForm from './components/vetAppointment';
import { Provider } from 'react-redux';
import store from './redux/store'

const App = () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  return (
    <Provider store={store}>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/feeding" element={<FeedingRoutine />} />
          <Route path="/vet" element={<AppointmentForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/livestock" element={<LivestockPage />} />        </Routes>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
