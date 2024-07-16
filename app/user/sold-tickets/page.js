// sold-tickets.js

import React, { useState, useEffect } from "react";

const SoldTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simulated fetch or hardcoded data for sold tickets
    const fetchSoldTickets = async () => {
      // Replace with actual API fetch or data retrieval logic
      const dummyData = [
        { id: 1, event: "Concert", buyer: "John Doe", price: 50 },
        { id: 2, event: "Sports Game", buyer: "Jane Smith", price: 30 },
        { id: 3, event: "Theater Show", buyer: "Michael Johnson", price: 40 },
      ];
      setTickets(dummyData);
    };

    fetchSoldTickets();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sold Tickets</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Event
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Buyer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {ticket.event}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {ticket.buyer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${ticket.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldTickets;
