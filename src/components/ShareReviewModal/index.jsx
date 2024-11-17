import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { userApi } from '../../Apis/index.jsx';

export default function ShareExperienceModal({
  isOpen,
  onClose,
  refreshReviews,
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // API call to create a new review
      await userApi.CreateReviews({
        title,
        description,
      });

      // Success notification
      toast.success('Review submitted successfully!');

      // Clear the form inputs
      setTitle('');
      setDescription('');

      // Close the modal
      onClose();

      // Refresh reviews to display the latest data
      refreshReviews();
    } catch (error) {
      // Error notification
      console.error('Failed to create review:', error);
      toast.error('Failed to submit review. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white p-6 rounded shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Share Your Review</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              className='border p-2 rounded w-full mb-2'
              required
            />

            <textarea
              placeholder='Description'
              value={description}
              onChange={e => setDescription(e.target.value)}
              className='border p-2 rounded w-full mb-2'
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
