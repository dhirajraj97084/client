import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Tutorials from './pages/Tutorials';
import Blog from './pages/Blog';
import Notes from './pages/Notes';
import NoteDetail from './pages/NoteDetail';
import Contact from './pages/Contact';
import MyGear from './pages/MyGear';
import WorkWithUs from './pages/WorkWithUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path="/tutorials" element={<ProtectedRoute><Tutorials /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
          <Route path="/notes/:id" element={<ProtectedRoute><NoteDetail /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/my-gear" element={<ProtectedRoute><MyGear /></ProtectedRoute>} />
          <Route path="/work-with-us" element={<ProtectedRoute><WorkWithUs /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
