export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className="p-2 m-4 bg-gray-800 text-yellow-500 max-w-sm rounded-lg"
    >
      <h2 className="font-bold text-xl">{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
