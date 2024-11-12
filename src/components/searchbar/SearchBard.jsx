export default function SearchBard({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search articles..."
        className="border p-2 rounded w-full md:w-2/3"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        className="border p-2 rounded w-full md:w-1/3"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category.toLowerCase()}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
