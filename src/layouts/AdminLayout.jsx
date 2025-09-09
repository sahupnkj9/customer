import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Navbar />
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main
        className={`pt-[64px] transition-all duration-300 bg-gray-50 min-h-screen dark:bg-[#101828] ${
          collapsed ? "pl-20" : "pl-72"
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
