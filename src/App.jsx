import React from "react";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import { Route, Routes } from "react-router-dom";
import Employee from "./pages/Employee";
import Profile from "./pages/Profile";
import Customer from "./pages/Customer";
import CustomerDetail from "./pages/CustomerDetail";

const App = () => {
  return (
    <div className="min-h-screen ">
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/:id" element={<CustomerDetail />} />
        </Routes>
      </AdminLayout>
    </div>
  );
};

export default App;
