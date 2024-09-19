import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/login';
import { Provider } from 'react-redux';
import store from './redux/store';
import './css/bootstrap.min.css';
import SignUpPage from './components/signUp';
import Dashboard from './components/AdminUser/Dashboard';
import ResourceManagement from './components/AdminUser/resourceManagement';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import FeedingRoutine from './components/AdminUser/feedingRoutine';

const App = () => {
  return (
    <Provider store={store}>
       <ToastContainer />
      <Router>
        <div className="container-fluid mx-0 px-0 row">
          <Routes>
            <Route className="col-lg-12" path="/" element={<HomePage />} />
            <Route className="col-lg-12" path="/dashboard" element={<Dashboard />} />
            <Route path="/feeding" element={<FeedingRoutine />} />
            {/* {/* <Route path="/feeding" element={<FeedingRoutine />} />
            <Route path="/vet" element={<AppointmentForm />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/resource-management" element={<ResourceManagement />} />
            {/* <Route path="/livestock" element={<LivestockPage />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
