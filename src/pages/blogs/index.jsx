import { useState } from 'react';

import BlogPostCard from '@/components/blogPoastCard'; // Import BlogPostCard component
import ShareExperienceModal from '@/components/shareExperinceModal'; // Import Modal component
import SearchBar from '@/components/searchbar/SearchBard'; // Import SearchBar component
import { blogPosts } from './data';
export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState(blogPosts);
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    date: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      { ...newPost, slug: newPost.title.toLowerCase().replace(/ /g, '-') },
    ]);
    setNewPost({
      title: '',
      category: '',
      description: '',
      image: '',
      date: '',
    });
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">DEW Blog</h1>

      {/* Share Your Experience Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-black border p-2 rounded mb-6"
      >
        Share Your Experience
      </button>

      {/* Modal for Submission Form */}
      <ShareExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newPost={newPost}
        setNewPost={setNewPost}
        handleSubmit={handleSubmit}
      />

      {/* Search and Category Filter */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Display Filtered Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
