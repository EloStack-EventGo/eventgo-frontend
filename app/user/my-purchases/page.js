// my-purchases.js

import React, { useState, useEffect } from "react";

const MyPurchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    // Simulated fetch or hardcoded data for user's purchases
    const fetchMyPurchases = async () => {
      // Replace with actual API fetch or data retrieval logic
      const dummyData = [
        { id: 1, item: "Book", seller: "BookStore", price: 20 },
        { id: 2, item: "Electronics", seller: "GadgetShop", price: 500 },
        { id: 3, item: "Clothing", seller: "FashionHouse", price: 100 },
      ];
      setPurchases(dummyData);
    };

    fetchMyPurchases();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Purchases</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {purchase.item}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {purchase.seller}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${purchase.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchases;
