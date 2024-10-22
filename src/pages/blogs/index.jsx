/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

function BlogPostCard({ post }) {
  return (
    <div className="border rounded overflow-hidden shadow">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{post.title}</h2>
        <p className="text-sm text-gray-500">{post.category}</p>
        <p className="text-sm mt-2">{post.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-400">{post.date}</span>
          <Link to={`/blogs/${post.slug}`}>
            <a className="text-blue-500 text-sm underline">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">DEW Blog</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          className="border p-2 rounded w-full md:w-2/3"
        />
        <select className="border p-2 rounded w-full md:w-1/3">
          <option value="all">All Categories</option>
          <option value="food">Food</option>
          <option value="nightlife">Nightlife</option>
          <option value="attractions">Attractions</option>
          <option value="culture">Culture</option>
          <option value="family">Family</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export const blogPosts = [
  {
    slug: 'top-10-detroit-restaurants',
    title: 'Top 10 Detroit Restaurants',
    category: 'Food',
    description:
      'Discover the best culinary experiences Detroit has to offer...',
    date: '2023-05-15',
    image:
      'https://plus.unsplash.com/premium_photo-1712029139205-1275ecd1641f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'detroits-vibrant-nightlife-scene',
    title: "Detroit's Vibrant Nightlife Scene",
    category: 'Nightlife',
    description: 'Explore the exciting nightlife options in the Motor City...',
    date: '2023-05-22',
    image:
      'https://images.unsplash.com/photo-1729548318266-cf976ceee756?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'hidden-gems-detroits-secret-spots',
    title: "Hidden Gems: Detroit's Secret Spots",
    category: 'Attractions',
    description: 'Uncover the lesser-known attractions that locals love...',
    date: '2023-06-05',
    image:
      'https://plus.unsplash.com/premium_photo-1676139292747-1d98a819dfc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'detroits-music-history-tour',
    title: "Detroit's Music History Tour",
    category: 'Culture',
    description: "Take a journey through Detroit's rich musical heritage...",
    date: '2023-04-30',
    image:
      'https://images.unsplash.com/photo-1721332155484-5aa73a54c6d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'family-friendly-activities-in-detroit',
    title: 'Family-Friendly Activities in Detroit',
    category: 'Family',
    description: 'Discover fun activities for the whole family in Detroit...',
    date: '2023-04-25',
    image:
      'https://images.unsplash.com/photo-1729457497659-9700bfb4d506?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    slug: 'detroits-best-coffee-shops',
    title: "Detroit's Best Coffee Shops",
    category: 'Food',
    description: "Explore the city's thriving coffee scene...",
    date: '2023-04-20',
    image:
      'https://images.unsplash.com/photo-1729429954653-1be892c4682d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
