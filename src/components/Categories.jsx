import "../styles/Categories.css";

export default function Categories({
  setActiveCategory,
  categories,
  activeCategory,
}) {
  return (
    <div className="lmj-categories">
      <h2>Tous les categories des plantes</h2>
      <select
        onChange={(e) => setActiveCategory(e.target.value)}
        value={activeCategory}
      >
        <option value="">Tous les plantes</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </div>
  );
}

