export default function ShareExperienceModal({ isOpen, onClose, newPost, setNewPost, handleSubmit }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              className="border p-2 rounded w-full mb-2"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              required
            />
            <select
              className="border p-2 rounded w-full mb-2"
              value={newPost.category}
              onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
              required
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Nightlife">Nightlife</option>
              <option value="Attractions">Attractions</option>
              <option value="Culture">Culture</option>
              <option value="Family">Family</option>
            </select>
            <textarea
              placeholder="Description"
              className="border p-2 rounded w-full mb-2"
              value={newPost.description}
              onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              className="border p-2 rounded w-full mb-2"
              value={newPost.image}
              onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              required
            />
            <input
              type="date"
              className="border p-2 rounded w-full mb-4"
              value={newPost.date}
              onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
              required
            />
            <button type="submit" className="bg-blue-500 text-[#414141] border p-2 rounded mr-2">Submit</button>
            <button type="button" onClick={onClose} className="bg-gray-300 text-black p-2 rounded">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
  