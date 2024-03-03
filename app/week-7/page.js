"use client";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import ItemData from "./items.json";
import MealIdeas from "./meal-ideas.js";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(ItemData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const AddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  function handleItemSelect(name) {
    let trimmed = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    const arr = trimmed.split(",");
    trimmed = arr[0];
    console.log(trimmed);
    setSelectedItemName(trimmed);
  }

  return (
    <main className="flex flex-col justify-center">
      <h1 className="font-bold text-4xl text-yellow-500 text-center mb-5">
        Shopping List
      </h1>
      <div className="flex ml-64">
        <div className="flex flex-col items-center">
          <NewItem onAddItem={AddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="ml-5">
          {selectedItemName && (
            <MealIdeas ingredient={selectedItemName}></MealIdeas>
          )}
        </div>
      </div>
    </main>
  );
}
