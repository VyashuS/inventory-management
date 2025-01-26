import React, { useState, useEffect } from "react";

function InventoryForm({ onAddItem, onUpdateItem, initialItem }) {
  const [item, setItem] = useState({
    name: "",
    category: "",
    quantity: 0,
    price: 0,
  });

  useEffect(() => {
    if (initialItem) {
      setItem(initialItem);
    } else {
      setItem({
        name: "",
        category: "",
        quantity: 0,
        price: 0,
      });
    }
  }, [initialItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialItem) {
      onUpdateItem(item);
    } else {
      onAddItem({
        ...item,
        id: Date.now(),
        quantity: Number(item.quantity),
        price: Number(item.price),
      });
    }

    // Reset form
    setItem({
      name: "",
      category: "",
      quantity: 0,
      price: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
    >
      <div className="col-span-1 sm:col-span-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Item Name
        </label>
        <input
          type="text"
          placeholder="Item Name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <input
          type="text"
          placeholder="Category"
          value={item.category}
          onChange={(e) => setItem({ ...item, category: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="quantity"
        >
          Quantity
        </label>
        <input
          type="number"
          placeholder="Quantity"
          value={item.quantity}
          onChange={(e) => setItem({ ...item, quantity: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="0"
          required
        />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <input
          type="number"
          placeholder="Price"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-102"
        >
          {initialItem ? "Update Item" : "Add Item"}
        </button>
      </div>
    </form>
  );
}

export default InventoryForm;
