import { useState } from "react";
import React, { useState } from 'react';

// Card component for the left panel
const Card = ({ item, onItemClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 cursor-pointer" onClick={() => onItemClick(item)}>
      <img className="h-48 w-full object-cover" src={item.imageUrl} alt={item.name} />
      <div className="p-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.name}</div>
        <p className="mt-2 text-gray-500">{item.description}</p>
      </div>
    </div>
  );
};

// Right panel component
const LargeBox = ({ selectedItem }) => {
  return (
    <div className="bg-gray-200 p-4 h-full">
      {selectedItem ? (
        <div>
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.details}</p>
          {/* Add more details here as needed */}
        </div>
      ) : (
        <p>No item selected</p>
      )}
    </div>
  );
};

// App component
const App = () => {
  // Dummy data for cards
  const [items] = useState([
    { id: 1, name: 'Item 1', description: 'Description for item 1', imageUrl: 'https://via.placeholder.com/150', details: 'Details for item 1' },
    { id: 2, name: 'Item 2', description: 'Description for item 2', imageUrl: 'https://via.placeholder.com/150', details: 'Details for item 2' },
    { id: 3, name: 'Item 3', description: 'Description for item 3', imageUrl: 'https://via.placeholder.com/150', details: 'Details for item 3' },
  ]);

  // State to manage selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex p-4">
      <div className="flex-1 overflow-y-auto pr-4">
        {items.map(item => (
          <Card key={item.id} item={item} onItemClick={handleItemClick} />
        ))}
      </div>
      <div className="flex-1">
        <LargeBox selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default App;
