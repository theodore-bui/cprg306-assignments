"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault;
    const item = {
      name: { name },
      quantity: { quantity },
      category: { category },
    };

    console.log(item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    () => setName("");
    () => setQuantity(1);
    () => setCategory("Produce");
  }

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center bg-yellow-500 text-black p-1 rounded-lg">
        <form onSubmit={handleSubmit} className="grid justify-items-center">
          <div className="my-2 px-2 grid justify-items-center">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="ml-3 rounded-lg"
              />
            </label>
          </div>
          <div className="grid justify-items-center">
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                min="1"
                max="99"
                className="w-20 rounded-lg px-1 ml-3"
              />
            </label>
            <label>
              Category:
              <select className="my-2 rounded-lg px-1 ml-3">
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <button
            className="bg-black text-yellow-500 px-3 rounded-lg my-1"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
