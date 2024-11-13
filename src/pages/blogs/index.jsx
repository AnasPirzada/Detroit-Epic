import BlogPostCard from '@/components/blogPoastCard';
import SearchBar from '@/components/searchbar/SearchBard';
import ShareExperienceModal from '@/components/shareExperinceModal';
import { useEffect, useState } from 'react';
import { userApi } from '../../Apis/index.jsx';
import Loader from '../../components/loader.jsx';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    date: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await userApi.GetBlogs();
      setPosts(response);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Extract unique categories from the posts
  const categories = Array.from(new Set(posts.map(post => post.category)));

  // Filtered posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().startsWith(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Handle new post submission
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await userApi.CreateBlog(newPost);
      alert('Blog created successfully!');
      setNewPost({
        title: '',
        category: '',
        description: '',
        image: '',
        date: '',
      });
      setIsModalOpen(false);
      await fetchBlogs(); // Refresh blogs after submission
    } catch (error) {
      console.error('Failed to create blog:', error);
      alert('An error occurred while creating the blog. Please try again.');
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>DEW Blog</h1>

      {/* Create blog Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className='bg-blue-500 text-black border p-2 rounded mb-6'
      >
        Create Blog{' '}
      </button>

      {/* Modal for Submission Form */}
      <ShareExperienceModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          fetchBlogs(); // Refresh blogs when modal closes
        }}
        mode='blog'
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
        categories={categories}
      />

      {/* Display Filtered Posts */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredPosts.map(post => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
