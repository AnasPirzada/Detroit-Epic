/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function BlogPostCard({ post }) {
  return (
    <div className='border rounded overflow-hidden shadow group transition-transform duration-200 hover:scale-105'>
      <img
        src={post.image}
        alt={post.title}
        className='w-full h-48 object-cover'
      />
      <div className='p-4'>
        <h2 className='text-lg font-bold'>{post.title}</h2>
        <p className='text-sm text-gray-500'>{post.category}</p>
        <p className='text-sm mt-2'>{post.description}</p>
        <div className='flex justify-between items-center mt-4'>
          <span className='text-xs text-gray-400'>{post.date}</span>
          <Link
            to={`/blogs/${post._id}`}
            className='no-underline text-blue-500 border px-[10px] py-[5px] text-sm '
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
