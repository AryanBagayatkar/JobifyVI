import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarh from './components/Navbarh';
import JobList from './components/JobList';
import Home from './components/Home'
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Notifications from './pages/Notification';
import Associations from './pages/Associations';
import Post from './components/Post';
import JobDetail from './components/JobDetails';
import JobForm from './pages/JobForm';
import PostForm from './components/PostForm';

function App() {
  return (
    <Router>
      <Navbarh />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="job" element={<JobList />} />
          <Route path="posts" element={<Post />} />
          <Route path="/create-post" element={<PostForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/associations" element={<Associations />} />
          <Route path="/add-job" element={<JobForm />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
    </Router>
  );
}

export default App;



