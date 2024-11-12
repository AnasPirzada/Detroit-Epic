import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userApi } from '../../Apis/index.jsx';
import Loader from '../../components/loader.jsx';

export default function BlogDetailPage() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogById = async () => {
      setIsLoading(true);
      try {
        // Fetch all blogs
        const blogs = await userApi.GetBlogs();

        // Find the blog with a matching ID
        const foundBlog = blogs.find(post => post._id === id);
        setBlog(foundBlog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogById();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className='w-full h-64 object-cover mb-4'
      />
      <p className='text-sm text-gray-500 mb-4'>
        {new Date(blog.date).toLocaleDateString()}
      </p>
      <p className='text-lg'>{blog.description}</p>
    </div>
  );
}
