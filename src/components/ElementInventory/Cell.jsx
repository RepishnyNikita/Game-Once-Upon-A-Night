import { inventoryItem } from "./inventory";
import CardOfValuables from "../CardOfValuables/CardOfValuables";
import { useState } from "react";

export default function Cell({ itemId }) {
    const [items, setItems] = useState(inventoryItem)
    function handleDelete(cell) {
      const newItems = items.filter((_, index) => index !== cell); //
      setItems(newItems.map(item => ({ ...item })));
      console.log(newItems);
  }

  return (
    <li className="inventory-cell" key={itemId}>
      {items[itemId] && (  
        <div key={items[itemId].id}>
          <CardOfValuables
            style={items[itemId].style}
            icon={items[itemId].icon}
            name={items[itemId].name}
          />
          
          <button
            id={items[itemId].id}
            onClick={() => handleDelete(itemId)}
            className="inventory-dell"
          >
            -1
          </button>
        </div>
      )}
    </li>
  );
}
