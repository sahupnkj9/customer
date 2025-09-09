import React, { useRef, useState, useEffect } from "react";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";

const Customer = () => {
  const customers = [
    {
      id: 1,
      name: "Carry Anna",
      email: "annac34@gmail.com",
      phone: "+91 9876543210",
      orders: 89,
      totalSpent: 23987,
      city: "Budapest",
      lastSeen: "34 min ago",
      lastOrder: "Dec 12, 12:56 PM",
      avatar: "https://i.pravatar.cc/150?img=1",
      joinedOn: "Jan 12, 2023",
      address: "123 MG Road, Budapest",
      country: "Hungary"
    },
    {
      id: 2,
      name: "Milind Mikuja",
      email: "mimiku@yahoo.com",
      phone: "+91 9123456780",
      orders: 76,
      totalSpent: 21567,
      city: "Manchester",
      lastSeen: "6 hours ago",
      lastOrder: "Dec 9, 2:28 PM",
      avatar: "https://i.pravatar.cc/150?img=2",
      joinedOn: "Mar 3, 2022",
      address: "456 Park Street, Manchester",
      country: "UK"
    },
    {
      id: 3,
      name: "Stanly Drinkwater",
      email: "stnlwasser@hotmail.com",
      phone: "+91 8765432109",
      orders: 69,
      totalSpent: 19872,
      city: "Smallville",
      lastSeen: "43 min ago",
      lastOrder: "Dec 4, 12:56 PM",
      avatar: "https://i.pravatar.cc/150?img=3",
      joinedOn: "Jun 15, 2022",
      address: "789 Oak Avenue, Smallville",
      country: "USA"
    },
    {
      id: 4,
      name: "Josef Stravinsky",
      email: "Josefsky@sni.it",
      phone: "+91 7654321098",
      orders: 67,
      totalSpent: 17996,
      city: "Metropolis",
      lastSeen: "2 hours ago",
      lastOrder: "Dec 1, 4:07 AM",
      avatar: "https://i.pravatar.cc/150?img=4",
      joinedOn: "Aug 20, 2022",
      address: "321 Elm Street, Metropolis",
      country: "USA"
    },
    {
      id: 5,
      name: "Igor Borvibson",
      email: "vibigorr@technext.it",
      phone: "+91 6543210987",
      orders: 61,
      totalSpent: 16785,
      city: "Central city",
      lastSeen: "5 days ago",
      lastOrder: "Nov 28, 7:28 PM",
      avatar: "https://i.pravatar.cc/150?img=5",
      joinedOn: "Nov 10, 2022",
      address: "654 Pine Road, Central City",
      country: "USA"
    },
    {
      id: 6,
      name: "Katerina Karenin",
      email: "karkat99@gmail.com",
      phone: "+91 5432109876",
      orders: 58,
      totalSpent: 14956,
      city: "Gotham",
      lastSeen: "2 weeks ago",
      lastOrder: "Nov 24, 10:16 AM",
      avatar: "https://i.pravatar.cc/150?img=6",
      joinedOn: "Dec 5, 2022",
      address: "987 Maple Lane, Gotham",
      country: "USA"
    },
    {
      id: 7,
      name: "Roy Anderson",
      email: "andersonroy@netflix.chill",
      phone: "+91 4321098765",
      orders: 52,
      totalSpent: 12509,
      city: "Vancouver",
      lastSeen: "4 days ago",
      lastOrder: "Nov 18, 5:43 PM",
      avatar: "https://i.pravatar.cc/150?img=7",
      joinedOn: "Feb 14, 2023",
      address: "147 Cedar Street, Vancouver",
      country: "Canada"
    }
  ];

  const [menuOpenId, setMenuOpenId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedVIP, setSelectedVIP] = useState("all");
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter customers based on search and filters
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "all" || customer.country.toLowerCase() === selectedCountry.toLowerCase();
    return matchesSearch && matchesCountry;
  });

  const isLastCustomer = (id) => {
    return id === filteredCustomers[filteredCustomers.length - 1]?.id;
  };

  const countries = [...new Set(customers.map(c => c.country))];

  return (
    <div className="p-6 font-outfit dark:bg-[#101828] dark:text-[#FFFFFF] min-h-screen">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span className="text-blue-600 cursor-pointer">Page 1</span>
          <span>›</span>
          <span className="text-blue-600 cursor-pointer">Page 2</span>
          <span>›</span>
          <span>Default</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Customers</h2>
        
        {/* Filter Tabs */}
        <div className="flex gap-6 mb-6 border-b">
          <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
            All (68817)
          </button>
          <button className="pb-2 text-gray-500 hover:text-blue-600">
            New (6)
          </button>
          <button className="pb-2 text-gray-500 hover:text-blue-600">
            Abandoned checkouts (17)
          </button>
          <button className="pb-2 text-gray-500 hover:text-blue-600">
            Locals (6810)
          </button>
          <button className="pb-2 text-gray-500 hover:text-blue-600">
            Email subscribers (8)
          </button>
          <button className="pb-2 text-gray-500 hover:text-blue-600">
            Top reviews (2)
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex justify-between items-center mb-6 gap-4">
        <div className="flex gap-4 flex-1">
          <input
            type="text"
            placeholder="Search customers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition p-3 rounded-lg flex-1 outline-none dark:bg-[#171F2F] dark:border-gray-600"
          />
          <select 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition p-3 rounded-lg outline-none dark:bg-[#171F2F] dark:border-gray-600"
          >
            <option value="all">Country</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <select 
            value={selectedVIP}
            onChange={(e) => setSelectedVIP(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition p-3 rounded-lg outline-none dark:bg-[#171F2F] dark:border-gray-600"
          >
            <option value="all">VIP</option>
            <option value="vip">VIP Only</option>
            <option value="regular">Regular</option>
          </select>
          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
            More filters
          </button>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 dark:border-gray-600 dark:hover:bg-gray-700">
            📊 Export
          </button>
          <button className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            + Add customer
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow bg-white dark:bg-[#171F2F]">
        <table className="min-w-full text-sm">
          <thead className="text-gray-600 bg-gray-50 dark:bg-[#1E293B] dark:text-[#FFFFFF]">
            <tr>
              <th className="p-4 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-4 text-left font-medium">CUSTOMER ↕</th>
              <th className="p-4 text-left font-medium">EMAIL ↕</th>
              <th className="p-4 text-left font-medium">ORDERS ↕</th>
              <th className="p-4 text-left font-medium">TOTAL SPENT ↕</th>
              <th className="p-4 text-left font-medium">CITY ↕</th>
              <th className="p-4 text-left font-medium">LAST SEEN ↕</th>
              <th className="p-4 text-left font-medium">LAST ORDER ↕</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:bg-[#171F2F] dark:text-[#FFFFFF]">
                <td className="p-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{customer.name}</span>
                  </div>
                </td>
                <td className="p-4 text-blue-600">{customer.email}</td>
                <td className="p-4 font-medium">{customer.orders}</td>
                <td className="p-4 font-medium">$ {customer.totalSpent.toLocaleString()}</td>
                <td className="p-4">{customer.city}</td>
                <td className="p-4 text-gray-500">{customer.lastSeen}</td>
                <td className="p-4">{customer.lastOrder}</td>
                <td className="p-4 relative">
                  <button
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
                    onClick={() =>
                      setMenuOpenId(menuOpenId === customer.id ? null : customer.id)
                    }
                  >
                    <IoIosMore size={20} />
                  </button>
                  {menuOpenId === customer.id && (
                    <div
                      ref={menuRef}
                      className={`absolute font-outfit right-8 w-48 bg-white border rounded-xl border-gray-100 shadow-lg z-50 animate-fadeIn dark:text-[#FFFFFF] dark:bg-[#171F2F] ${
                        isLastCustomer(customer.id) ? "bottom-10" : "top-10"
                      }`}
                    >
                      <Link to={`/customer/${customer.id}`}>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl">
                          View Details
                        </button>
                      </Link>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Edit Customer
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-red-500 rounded-b-xl">
                        Delete Customer
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Customer;