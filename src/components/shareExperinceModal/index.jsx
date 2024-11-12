import { ToastContainer, toast } from 'react-toastify';
import { userApi } from '../../Apis/index.jsx';

export default function ShareExperienceModal({
  isOpen,
  onClose,
  newPost,
  setNewPost,
}) {
  if (!isOpen) return null;

  const handleSubmit = async e => {
    e.preventDefault();

    // Prepare blog data with a fixed date
    const blogData = {
      ...newPost,
      date: new Date().toISOString().split('T')[0], // Set date to today's date (YYYY-MM-DD)
    };

    try {
      await userApi.CreateBlog(blogData);
      toast.success('Blog created successfully!');
      onClose(); // Close the modal after successful submission
      setNewPost({
        title: '',
        category: '',
        description: '',
        image: '',
        date: '',
      }); // Reset the form
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error('Check the deatil something is missing in it');
    }
  };

  return (
    <>
      <ToastContainer />

      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white p-6 rounded shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Share Your Experience</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Title'
              className='border p-2 rounded w-full mb-2'
              value={newPost.title}
              onChange={e => setNewPost({ ...newPost, title: e.target.value })}
              required
            />
            <select
              className='border p-2 rounded w-full mb-2'
              value={newPost.category}
              onChange={e =>
                setNewPost({ ...newPost, category: e.target.value })
              }
              required
            >
              <option value=''>Select Category</option>
              <option value='Food'>Food</option>
              <option value='Nightlife'>Nightlife</option>
              <option value='Attractions'>Attractions</option>
              <option value='Culture'>Culture</option>
              <option value='Family'>Family</option>
            </select>
            <textarea
              placeholder='Description'
              className='border p-2 rounded w-full mb-2'
              value={newPost.description}
              onChange={e =>
                setNewPost({ ...newPost, description: e.target.value })
              }
              required
            />
            <input
              type='text'
              placeholder='Image URL'
              className='border p-2 rounded w-full mb-4'
              value={newPost.image}
              onChange={e => setNewPost({ ...newPost, image: e.target.value })}
              required
            />
            <div className='flex justify-end gap-2'>
              <button
                type='submit'
                className='bg-blue-500 text-[#414141] border p-2 rounded mr-2'
              >
                Submit
              </button>

              <button
                type='button'
                onClick={onClose}
                className='bg-gray-300 text-black px-4 py-2 rounded'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
