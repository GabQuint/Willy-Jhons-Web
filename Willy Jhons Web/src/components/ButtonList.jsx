export const ButtonList = ({ categories, filterCategory, selectedCategory }) => {
  return (
    <div className="categories">
      {categories.map(category => (
        <button
          type="button"
          className={`btnCategory ${selectedCategory === category ? 'selected' : ''}`}
          onClick={() => filterCategory(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
