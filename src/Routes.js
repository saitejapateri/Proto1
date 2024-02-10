import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/common/Login';
import Root from './Root';
import DashboardPage from './pages/DashboardPage.jsx';
import CoursePage from './pages/CoursePage'
import Pdf from './components/common/Pdf';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route index element={<Login />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/course/:courseId' element={<CoursePage />} />
            <Route path='/pdf' element={ <Pdf /> } />
          </Route>
        </Routes>
    </Router>
  );
};

export default AppRouter;