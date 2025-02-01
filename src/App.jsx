import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LaunchScreen from './components/LaunchScreen';
import MyTasks from './components/MyTasks';
import CommercialManagement from './components/CommercialManagement';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/launch" element={<LaunchScreen />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/commercial-management" element={<CommercialManagement />} />
      </Routes>
    </div>
  );
}

export default App;
