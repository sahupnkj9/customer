import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiLinkedin, FiFacebook, FiTwitter, FiEdit } from "react-icons/fi";

const CustomerDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("orders");
  const [noteText, setNoteText] = useState("");

  // Mock customer data - in real app, fetch based on ID
  const customer = {
    id: 1,
    name: "Ansolo Lazinatov",
    email: "shatinon@jeemail.com",
    phone: "+1234567890",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    joinedDate: "3 months ago",
    address: {
      street: "Shatinon Mekalan",
      city: "Vancouver",
      state: "British Columbia",
      country: "Canada"
    },
    stats: {
      following: 297,
      projects: 56,
      completion: 97
    },
    orders: [
      {
        id: "#2453",
        total: "$87",
        paymentStatus: "PAID",
        fulfillmentStatus: "ORDER FULFILLED",
        deliveryType: "Cash on delivery",
        date: "Dec 12, 12:56 PM"
      },
      {
        id: "#2452",
        total: "$7264",
        paymentStatus: "CANCELLED",
        fulfillmentStatus: "READY TO PICKUP",
        deliveryType: "Free shipping",
        date: "Dec 9, 2:28PM"
      },
      {
        id: "#2451",
        total: "$375",
        paymentStatus: "PENDING",
        fulfillmentStatus: "PARTIAL FULFILLED",
        deliveryType: "Local pickup",
        date: "Dec 4, 12:56 PM"
      },
      {
        id: "#2450",
        total: "$657",
        paymentStatus: "CANCELLED",
        fulfillmentStatus: "ORDER CANCELLED",
        deliveryType: "Standard shipping",
        date: "Dec 1, 4:07 AM"
      },
      {
        id: "#2449",
        total: "$9562",
        paymentStatus: "FAILED",
        fulfillmentStatus: "ORDER FULFILLED",
        deliveryType: "Express",
        date: "Nov 28, 7:28 PM"
      },
      {
        id: "#2448",
        total: "$46",
        paymentStatus: "PAID",
        fulfillmentStatus: "DELIVERY DELAYED",
        deliveryType: "Local delivery",
        date: "Nov 24, 10:16 AM"
      }
    ],
    wishlist: [
      {
        id: 1,
        name: "Fitbit Sense Advanced Smartwatch wi...",
        color: "Pure matte black",
        size: "42",
        price: "$57",
        total: "$57",
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=60&h=60&fit=crop"
      },
      {
        id: 2,
        name: "2021 Apple 12.9-inch iPad Pro (Wi-Fi, ...",
        color: "Black",
        size: "Pro",
        price: "$1,499",
        total: "$1499",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=60&h=60&fit=crop"
      },
      {
        id: 3,
        name: "PlayStation 5 DualSense Wireless Cont...",
        color: "White",
        size: "Regular",
        price: "$299",
        total: "$459",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=60&h=60&fit=crop"
      }
    ],
    notes: [
      {
        id: 1,
        text: "Gave us a nice feedback",
        date: "12 Nov, 2020"
      },
      {
        id: 2,
        text: "Customer added product to cart and then forgot to checkout. Later knocked the customer support to ask about update on shipping. Later, settled on \"One day Shipping\" though \"Free delivery\" was preferred. Overall good behavior.",
        date: "23 Dec, 2019"
      },
      {
        id: 3,
        text: "User of this support ticket won a 100% off coupon and received top-notch service from the technical support engineer. Along with providing a good review, user highly appreciated the team.",
        date: "2 Oct, 2019"
      },
      {
        id: 4,
        text: "Customer returned and bought 2 related items, which is currently being shipped. Customer chose \"One day Shipping\". Additional notes were added regarding customised wrapping. Customer submitted positive review.",
        date: "26 Apr, 2019"
      }
    ]
  };

  const getStatusColor = (status, type) => {
    if (type === "payment") {
      switch (status) {
        case "PAID":
          return "bg-green-100 text-green-700";
        case "PENDING":
          return "bg-yellow-100 text-yellow-700";
        case "CANCELLED":
        case "FAILED":
          return "bg-red-100 text-red-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    } else {
      switch (status) {
        case "ORDER FULFILLED":
          return "bg-green-100 text-green-700";
        case "READY TO PICKUP":
          return "bg-blue-100 text-blue-700";
        case "PARTIAL FULFILLED":
          return "bg-yellow-100 text-yellow-700";
        case "ORDER CANCELLED":
        case "DELIVERY DELAYED":
          return "bg-red-100 text-red-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    }
  };

  const addNote = () => {
    if (noteText.trim()) {
      // In real app, this would make an API call
      console.log("Adding note:", noteText);
      setNoteText("");
    }
  };

  return (
    <div className="p-6 font-outfit dark:bg-[#101828] dark:text-[#FFFFFF] min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <span className="text-blue-600 cursor-pointer">Page 1</span>
        <span>›</span>
        <span className="text-blue-600 cursor-pointer">Page 2</span>
        <span>›</span>
        <span>Default</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Customer details</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 flex items-center gap-2">
            🗑️ Delete customer
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 dark:border-gray-600 dark:hover:bg-gray-700">
            🔄 Reset password
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Customer Info */}
        <div className="lg:col-span-1">
          {/* Profile Card */}
          <div className="bg-white dark:bg-[#171F2F] rounded-2xl p-6 shadow-sm mb-6">
            <div className="text-center">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-2xl font-bold mb-2">{customer.name}</h2>
              <p className="text-gray-500 mb-4">Joined {customer.joinedDate}</p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3 mb-6">
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <FiLinkedin size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <FiFacebook size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <FiTwitter size={20} />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">{customer.stats.following}</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{customer.stats.projects}</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{customer.stats.completion}</div>
                  <div className="text-sm text-gray-500">Completion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white dark:bg-[#171F2F] rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Default Address</h3>
              <button className="p-2 text-gray-400 hover:text-blue-600">
                <FiEdit size={18} />
              </button>
            </div>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Address</div>
                <div>{customer.address.street}</div>
                <div>{customer.address.city}, {customer.address.state}</div>
                <div>{customer.address.country}</div>
              </div>
              <div className="pt-2">
                <div className="font-medium text-gray-900 dark:text-white">Email</div>
                <div className="text-blue-600">{customer.email}</div>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                <div>{customer.phone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2">
          {/* Notes Section */}
          <div className="bg-white dark:bg-[#171F2F] rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="text-xl font-semibold mb-4">Notes on Customer</h3>
            
            {/* Add Note */}
            <div className="mb-6">
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a note about this customer..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none h-24 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-[#1E293B] dark:border-gray-600"
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={addNote}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  Add Note
                </button>
              </div>
            </div>

            {/* Notes List */}
            <div className="space-y-4">
              {customer.notes.map((note) => (
                <div key={note.id} className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-gray-700 dark:text-gray-300">{note.text}</p>
                    <span className="text-sm text-gray-500 ml-4 flex-shrink-0">{note.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orders Section */}
          <div className="bg-white dark:bg-[#171F2F] rounded-2xl p-6 shadow-sm mb-6">
            <h3 className="text-xl font-semibold mb-4">Orders ({customer.orders.length})</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-gray-600 bg-gray-50 dark:bg-[#1E293B] dark:text-gray-300">
                  <tr>
                    <th className="p-3 text-left font-medium">ORDER ↕</th>
                    <th className="p-3 text-left font-medium">TOTAL ↕</th>
                    <th className="p-3 text-left font-medium">PAYMENT STATUS ↕</th>
                    <th className="p-3 text-left font-medium">FULFILMENT STATUS ↕</th>
                    <th className="p-3 text-left font-medium">DELIVERY TYPE ↕</th>
                    <th className="p-3 text-left font-medium">DATE ↕</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {customer.orders.map((order) => (
                    <tr key={order.id} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="p-3">
                        <span className="text-blue-600 font-medium">{order.id}</span>
                      </td>
                      <td className="p-3 font-medium">{order.total}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(order.paymentStatus, "payment")}`}>
                          {order.paymentStatus} {order.paymentStatus === "PAID" && "✓"}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(order.fulfillmentStatus, "fulfillment")}`}>
                          {order.fulfillmentStatus} {order.fulfillmentStatus === "ORDER FULFILLED" && "✓"}
                        </span>
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-300">{order.deliveryType}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-300">{order.date}</td>
                      <td className="p-3">
                        <button className="text-gray-400 hover:text-gray-600">
                          <IoIosMore size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <span>1 to 6 Items of 15</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">View all →</button>
                <div className="flex gap-1">
                  <button className="w-8 h-8 bg-blue-600 text-white rounded">1</button>
                  <button className="w-8 h-8 hover:bg-gray-100 rounded">2</button>
                  <button className="w-8 h-8 hover:bg-gray-100 rounded">3</button>
                  <button className="w-8 h-8 hover:bg-gray-100 rounded">→</button>
                </div>
              </div>
            </div>
          </div>

          {/* Wishlist Section */}
          <div className="bg-white dark:bg-[#171F2F] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Wishlist ({customer.wishlist.length})</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-gray-600 bg-gray-50 dark:bg-[#1E293B] dark:text-gray-300">
                  <tr>
                    <th className="p-3 text-left font-medium">PRODUCTS ↕</th>
                    <th className="p-3 text-left font-medium">COLOR ↕</th>
                    <th className="p-3 text-left font-medium">SIZE ↕</th>
                    <th className="p-3 text-left font-medium">PRICE ↕</th>
                    <th className="p-3 text-left font-medium">TOTAL ↕</th>
                  </tr>
                </thead>
                <tbody>
                  {customer.wishlist.map((item) => (
                    <tr key={item.id} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-300">{item.color}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-300">{item.size}</td>
                      <td className="p-3 font-medium">{item.price}</td>
                      <td className="p-3 font-medium">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;