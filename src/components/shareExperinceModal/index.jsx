import { ToastContainer, toast } from 'react-toastify';
import { userApi } from '../../Apis/index.jsx';

export default function ShareExperienceModal({
  isOpen,
  onClose,
  mode, // "blog" or "experience"
  newPost,
  setNewPost,
  newExperiencePost,
  setnewExperiencePost,
}) {
  if (!isOpen) return null;

  const handleSubmit = async e => {
    e.preventDefault();

    // Determine data and API endpoint based on mode
    const data = mode === 'blog' ? newPost : newExperiencePost;
    const createFunction =
      mode === 'blog' ? userApi.CreateBlog : userApi.CreateExperiences;

    const submissionData = {
      ...data,
      date: new Date().toISOString().split('T')[0], // Set date to today's date (YYYY-MM-DD)
    };

    try {
      await createFunction(submissionData);
      toast.success(
        `${mode === 'blog' ? 'Blog' : 'Experience'} created successfully!`
      );
      onClose(); // Close the modal after successful submission

      // Reset the appropriate form fields
      if (mode === 'blog') {
        setNewPost({
          title: '',
          category: '',
          description: '',
          image: '',
          date: '',
        });
      } else {
        setnewExperiencePost({
          title: '',
          category: '',
          description: '',
          image: '',
          date: '',
        });
      }
    } catch (error) {
      console.error(`Error creating ${mode}:`, error);
      toast.error('Check the details; something is missing.');
    }
  };

  // Render form fields based on mode
  const formData = mode === 'blog' ? newPost : newExperiencePost;

  return (
    <>
      <ToastContainer />
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white p-6 rounded shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>
            {mode === 'blog' ? 'Share Your Blog' : 'Share Your Experience'}
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Title'
              className='border p-2 rounded w-full mb-2'
              value={formData?.title || ''}
              onChange={e =>
                mode === 'blog'
                  ? setNewPost({ ...newPost, title: e.target.value })
                  : setnewExperiencePost({
                      ...newExperiencePost,
                      title: e.target.value,
                    })
              }
              required
            />
            <select
              className='border p-2 rounded w-full mb-2'
              value={formData?.category || ''}
              onChange={e =>
                mode === 'blog'
                  ? setNewPost({ ...newPost, category: e.target.value })
                  : setnewExperiencePost({
                      ...newExperiencePost,
                      category: e.target.value,
                    })
              }
              required
            >
              <option value=''>Select Category</option>
              <option value='Food'>Food</option>
              <option value='Nightlife'>Nightlife</option>
              <option value='Attractions'>Attractions</option>
              <option value='Culture'>Culture</option>
              <option value='Family'>Family</option>
              {mode === 'experience' && (
                <>
                  <option value='Adventure'>Adventure</option>
                  <option value='Learning'>Learning</option>
                  <option value='Memorable'>Memorable</option>
                </>
              )}
            </select>
            <textarea
              placeholder='Description'
              className='border p-2 rounded w-full mb-2'
              value={formData?.description || ''}
              onChange={e =>
                mode === 'blog'
                  ? setNewPost({ ...newPost, description: e.target.value })
                  : setnewExperiencePost({
                      ...newExperiencePost,
                      description: e.target.value,
                    })
              }
              required
            />
            <input
              type='text'
              placeholder='Image URL'
              className='border p-2 rounded w-full mb-4'
              value={formData?.image || ''}
              onChange={e =>
                mode === 'blog'
                  ? setNewPost({ ...newPost, image: e.target.value })
                  : setnewExperiencePost({
                      ...newExperiencePost,
                      image: e.target.value,
                    })
              }
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
