import { useParams } from 'react-router-dom';
import { blogPosts } from '../blogs/data';

export default function BlogDetailPage() {
  const { slug } = useParams(); // Get the slug from the URL
  const post = blogPosts.find((post) => post.slug === slug); // Find the specific post based on slug

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <p className="text-lg">{post.description}</p>
    </div>
  );
}
