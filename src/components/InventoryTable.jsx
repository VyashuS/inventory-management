import React from "react";

function InventoryTable({ items, onDelete, onEdit, sortBy, sortDirection }) {
  const sortedItems = [...items].sort((a, b) => {
    const modifier = sortDirection === "asc" ? 1 : -1;
    return a.quantity > b.quantity ? modifier : -modifier;
  });

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-800">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
              Name
            </th>
            <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
              Category
            </th>
            <th
              scope="col"
              className="px-3 py-2 sm:px-6 sm:py-3 cursor-pointer hover:bg-gray-100"
              onClick={() => sortBy("quantity")}
            >
              Quantity {sortDirection === "asc" ? "▲" : "▼"}
            </th>
            <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
              Price
            </th>
            <th scope="col" className="px-3 py-2 sm:px-6 sm:py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b ${
                index % 2 === 0 ? "bg-purple-100" : "bg-purple-200"
              } hover:bg-purple-300 `}
            >
              <td className="px-3 py-2 sm:px-6 sm:py-4">{item.name}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4">{item.category}</td>
              <td className={`px-3 py-2 sm:px-6 sm:py-4 `}>{item.quantity}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4">
                ${item.price.toFixed(2)}
              </td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 flex space-x-2">
                <button
                  onClick={() => onEdit(item)}
                  className="font-medium text-blue-600 hover:underline hover:scale-105 transform transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="font-medium text-red-600 hover:underline hover:scale-105 transform transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
