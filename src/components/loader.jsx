const Loader = ({
  width = 'w-36',
  height = 'h-4',
  color = 'bg-gray-300',
  spacing = 'space-y-2',
  round = 'rounded',
}) => {
  return (
    <div className='animate-pulse my-10 flex justify-center items-center'>
      <div className='flex flex-col space-x-4'>
        <div className={spacing}>
          <div className={`${height} ${color} ${round} ${width}`}></div>
          <div className={`${height} ${color} ${round} ${width}`}></div>
          <div className={`${height} ${color} ${round} ${width}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
