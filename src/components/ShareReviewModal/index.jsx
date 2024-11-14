import { ToastContainer } from 'react-toastify';

export default function ShareExperienceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <ToastContainer />
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <div className='bg-white p-6 rounded shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Shear your Review </h2>
          <form>
            <input
              type='text'
              placeholder='Title'
              className='border p-2 rounded w-full mb-2'
              required
            />

            <textarea
              placeholder='Description'
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
