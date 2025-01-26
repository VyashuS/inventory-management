import React, { useState, useMemo } from "react";
import InventoryForm from "./components/InventoryForm";
import InventoryTable from "./components/InventoryTable";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      quantity: 15,
      price: 999.99,
    },
    {
      id: 2,
      name: "Keyboard",
      category: "Electronics",
      quantity: 8,
      price: 79.99,
    },
    {
      id: 3,
      name: "Coffee Mug",
      category: "Kitchenware",
      quantity: 25,
      price: 12.5,
    },
    {
      id: 4,
      name: "Office Chair",
      category: "Furniture",
      quantity: 5,
      price: 249.99,
    },
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");
  const [sortDirection, setSortDirection] = useState("desc");

  const categories = useMemo(
    () => [...new Set(inventory.map((item) => item.category))],
    [inventory]
  );

  const filteredItems = useMemo(
    () =>
      inventory.filter(
        (item) => !filterCategory || item.category === filterCategory
      ),
    [inventory, filterCategory]
  );

  const addItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  const updateItem = (updatedItem) => {
    setInventory(
      inventory.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const handleSortBy = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className="w-full px-4 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 sm:p-4">
        <h1 className="text-6xl font-extrabold text-center mb-8 text-purple-700 sm:text-4xl">
          Inventory Management
        </h1>

        <InventoryForm
          onAddItem={addItem}
          onUpdateItem={updateItem}
          initialItem={editingItem}
        />

        <CategoryFilter
          categories={categories}
          onFilterChange={setFilterCategory}
        />

        <InventoryTable
          items={filteredItems}
          onDelete={deleteItem}
          onEdit={setEditingItem}
          sortBy={handleSortBy}
          sortDirection={sortDirection}
        />
      </div>
    </div>
  );
}

export default App;
