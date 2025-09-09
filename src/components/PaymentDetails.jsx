import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const EmployeePayments = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const payments = [
    {
      month: "Aug 2025",
      paymentId: "EMPPAY101",
      totalAssignments: 42,
      totalAmount: 25000,
      penalty: 1000,
      netPayable: 24000,
      status: "Paid",
      paymentDate: "2025-09-01",
      details: Array.from({ length: 30 }).map((_, i) => ({
        assignmentId: `ASG20${i + 1}`,
        amount: 1000 + i * 10,
        penalty: i % 3 === 0 ? 50 : 0,
        total: 1000 + i * 10 - (i % 3 === 0 ? 50 : 0),
      })),
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white font-outfit border rounded-2xl p-6 shadow-md dark:bg-[#171F2F] dark:text-[#FFFFFF]">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2 dark:text-[#FFFFFF]">
        👨‍🔧 Invoice
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-[#1E293B] text-left font-medium text-gray-600 dark:text-[#FFFFFF]">
              <th className="px-4 py-2 border-b">Month</th>
              <th className="px-4 py-2 border-b">Invoice ID</th>
              <th className="px-4 py-2 border-b">Amount</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Payment Date</th>
              <th className="px-4 py-2 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr
                key={p.paymentId}
                className="hover:bg-gray-50 dark:hover:bg-[#243045] transition"
              >
                <td className="px-4 py-2 border-b">{p.month}</td>
                <td className="px-4 py-2 border-b">{p.paymentId}</td>
                <td className="px-4 py-2 border-b font-semibold">
                  ₹{p.totalAmount}
                </td>
                <td className="px-4 py-2 border-b">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(
                      p.status
                    )}`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b">
                  {p.paymentDate
                    ? new Date(p.paymentDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "-"}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {p.status === "Paid" ? (
                    <button
                      onClick={() => setSelectedPayment(p)}
                      className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"
                    >
                      View Details
                    </button>
                  ) : (
                    <button className="px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full hover:bg-green-100">
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Popup */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl w-full h-full flex flex-col relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPayment(null)}
              className="absolute top-4 right-4 rounded-full p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-200 dark:hover:bg-[#334155] z-50 dark:hover:text-white"
            >
              <IoMdClose size={22} />
            </button>

            {/* Header - Fixed */}
            <div className="p-6 border-b bg-white dark:bg-[#1E293B] sticky top-0 z-40">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                Payment Details
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Month:</span>{" "}
                {selectedPayment.month} |{" "}
                <span className="font-medium">Payment ID:</span>{" "}
                {selectedPayment.paymentId}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Total Assignments:</span>{" "}
                {selectedPayment.totalAssignments}
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <table className="w-full text-sm border-collapse mb-6">
                <thead>
                  <tr className="bg-gray-100 dark:bg-[#243045] text-gray-700 dark:text-gray-200">
                    <th className="px-3 py-2 border text-left">
                      Assignment ID
                    </th>
                    <th className="px-3 py-2 border text-right">Amount</th>
                    <th className="px-3 py-2 border text-right">Penalty</th>
                    <th className="px-3 py-2 border text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedPayment.details.map((d, i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50 dark:hover:bg-[#334155] transition"
                    >
                      <td className="px-3 py-2 border font-medium">
                        {d.assignmentId}
                      </td>
                      <td className="px-3 py-2 border text-right">
                        ₹{d.amount}
                      </td>
                      <td className="px-3 py-2 border text-right">
                        ₹{d.penalty}
                      </td>
                      <td className="px-3 py-2 border text-right font-semibold">
                        ₹{d.total}
                      </td>
                    </tr>
                  ))}

                  {/* Grand Total Row */}
                  <tr className="bg-gray-50 dark:bg-[#243045] font-semibold">
                    <td className="px-3 py-2 border text-right" colSpan={1}>
                      Grand Total
                    </td>
                    <td className="px-3 py-2 border text-right">
                      ₹{selectedPayment.totalAmount}
                    </td>
                    <td className="px-3 py-2 border text-right">
                      ₹{selectedPayment.penalty}
                    </td>
                    <td className="px-3 py-2 border text-right">
                      ₹{selectedPayment.netPayable}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer - Fixed */}
            <div className="p-6 border-t bg-white dark:bg-[#1E293B] sticky bottom-0 z-40 flex justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p className="mb-1">
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedPayment.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {selectedPayment.status}
                  </span>
                </p>
                <p>
                  <span className="font-medium">Payment Date:</span>{" "}
                  {selectedPayment.paymentDate
                    ? new Date(selectedPayment.paymentDate).toLocaleDateString(
                        "en-IN",
                        { day: "2-digit", month: "short", year: "numeric" }
                      )
                    : "-"}
                </p>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedPayment(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeePayments;
