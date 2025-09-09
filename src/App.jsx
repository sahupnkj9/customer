import React from "react";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import { Route, Routes } from "react-router-dom";
import Employee from "./pages/Employee";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="min-h-screen ">
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </AdminLayout>
    </div>
  );
};

export default App;
