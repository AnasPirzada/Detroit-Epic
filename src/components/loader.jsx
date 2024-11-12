const loader = () => {
  return (
    <div>
      <div className='animate-pulse space-y-4'>
        <div className='flex items-center space-x-4'>
          <div className='bg-gray-300 rounded-full h-20 w-20'></div>
          <div className='space-y-2'>
            <div className='h-4 bg-gray-300 rounded w-36'></div>
            <div className='h-4 bg-gray-300 rounded w-48'></div>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='h-4 bg-gray-300 rounded w-32'></div>
          <div className='h-4 bg-gray-300 rounded w-24'></div>
          <div className='h-4 bg-gray-300 rounded w-20'></div>
        </div>
      </div>
    </div>
  );
};
export default loader;
