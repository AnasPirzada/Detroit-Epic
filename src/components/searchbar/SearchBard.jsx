export default function SearchBar({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) {
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
          <option value="food">Food</option>
          <option value="nightlife">Nightlife</option>
          <option value="attractions">Attractions</option>
          <option value="culture">Culture</option>
          <option value="family">Family</option>
        </select>
      </div>
    );
  }
  