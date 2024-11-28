"use client";

import React from "react";

const RecentOrders: React.FC = () => {
  const orders = [
    {
      id: "#1234",
      client: "Jane Smith",
      service: "Web Development",
      status: "Completed",
      amount: "$200",
    },
    {
      id: "#1235",
      client: "Mike Johnson",
      service: "Logo Design",
      status: "In Progress",
      amount: "$50",
    },
    {
      id: "#1236",
      client: "Sarah Lee",
      service: "SEO Optimization",
      status: "Pending",
      amount: "$150",
    },
  ];

  return (
    <section className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-purple-700 text-white">
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Client</th>
              <th className="py-3 px-4 text-left">Service</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition border-b last:border-b-0"
              >
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.client}</td>
                <td className="py-3 px-4">{order.service}</td>
                <td
                  className={`py-3 px-4 ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "In Progress"
                      ? "text-blue-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </td>
                <td className="py-3 px-4">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentOrders;
