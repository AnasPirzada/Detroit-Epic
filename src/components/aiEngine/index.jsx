import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function AiEngine() {
  const location = useLocation();
  const { suggestions } = location.state || {}; // Safely access the itinerary data

  // Group activities by dayTitle and timeSlot
  const [groupedActivities, setGroupedActivities] = useState({});

  useEffect(() => {
    if (suggestions) {
      const activitiesByDay = suggestions.reduce((acc, item) => {
        if (item.activities && item.activities.length > 0) {
          const dayTitle = item.dayTitle;
          acc[dayTitle] = item.activities.reduce((dayAcc, activity) => {
            const { timeSlot } = activity;
            if (!dayAcc[timeSlot]) dayAcc[timeSlot] = [];
            dayAcc[timeSlot].push(activity);
            return dayAcc;
          }, {});
        }
        return acc;
      }, {});

      setGroupedActivities(activitiesByDay);
    }
  }, [suggestions]);

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  useEffect(() => {
    if (Object.keys(groupedActivities).length > 0) {
      // Set the first day and its first timeSlot as active initially
      const firstDay = Object.keys(groupedActivities)[0];
      const firstTimeSlot = Object.keys(groupedActivities[firstDay])[0];
      setSelectedDay(firstDay);
      setSelectedTimeSlot(firstTimeSlot);
    }
  }, [groupedActivities]);

  const handleClickDay = dayTitle => {
    setSelectedDay(prevDay => (prevDay === dayTitle ? null : dayTitle)); // Toggle day selection
  };

  const handleClickTimeSlot = timeSlot => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <div
      className='relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden'
      style={{ fontFamily: "'Plus Jakarta Sans', 'Noto Sans', sans-serif" }}
    >
      <div className='layout-container flex h-full grow flex-col'>
        <div className='gap-1 px-6 flex flex-1 justify-center py-5'>
          {/* Side panel for day selection */}
          <div className='layout-content-container flex flex-col w-80'>
            <h3 className='text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4'>
              Your Itinerary
            </h3>
            {suggestions && Array.isArray(suggestions) ? (
              suggestions.map((item, index) => {
                const dayTitle = item.dayTitle;
                return (
                  <div
                    key={index}
                    onClick={() => handleClickDay(dayTitle)} // Toggle day selection
                    className='flex items-center gap-4 bg-[#f8fafb] px-4 min-h-[72px] py-2 cursor-pointer'
                  >
                    <div className='text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24px'
                        height='24px'
                        fill='currentColor'
                        viewBox='0 0 256 256'
                      >
                        <path d='M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z'></path>
                      </svg>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <p className='text-[#0e161b] text-base font-medium leading-normal'>
                        {dayTitle || 'No Day Title'}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className='px-4 py-2 text-sm text-gray-500'>
                No itinerary data available.
              </p>
            )}
          </div>

          <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
            {/* Time Slot Navigation */}
            <div className='pb-3'>
              <div className='flex border-b border-[#d1dde6] px-4 gap-8'>
                {selectedDay &&
                  Object.keys(groupedActivities[selectedDay] || {}).map(
                    timeSlot => (
                      <a
                        key={timeSlot}
                        onClick={() => handleClickTimeSlot(timeSlot)}
                        className={`flex flex-col items-center justify-center border-b-[3px] ${
                          selectedTimeSlot === timeSlot
                            ? 'border-b-[#2c99e2] text-[#0e161b]'
                            : 'border-b-transparent text-[#507a95]'
                        } pb-[13px] pt-4 cursor-pointer`}
                      >
                        <p className='text-sm font-bold leading-normal'>
                          {timeSlot}
                        </p>
                      </a>
                    )
                  )}
              </div>
            </div>

            {/* Display selected day and timeSlot activities */}
            {selectedDay && selectedTimeSlot && (
              <div className='p-4'>
                {groupedActivities[selectedDay][selectedTimeSlot]?.map(
                  (activity, index) => (
                    <div key={index} className='mb-4 shadow-lg rounded-lg'>
                      <div className='flex items-center gap-4 py-3 bg-[#f8fafb] px-4 min-h-14'>
                        <div
                          className='text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-10'
                          data-icon='Clock'
                          data-size='24px'
                          data-weight='regular'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24px'
                            height='24px'
                            fill='currentColor'
                            viewBox='0 0 256 256'
                          >
                            <path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z'></path>
                          </svg>
                        </div>
                        <p className='text-[#0e161b] text-base font-normal leading-normal flex-1 truncate'>
                          {activity.timeSlot} {/* Display the Time Slot */}
                        </p>
                      </div>
                      <span className='bg-[#507a95] ms-5  py-2 w-[15%] px-4 rounded-full text-white'>
                        {activity.budget}
                      </span>

                      <div className='p-4'>
                        <div className='flex items-stretch justify-between gap-4 rounded-xl'>
                          <div className='flex flex-[2_2_0px] flex-col gap-4'>
                            <div className='flex flex-col gap-1'>
                              <p className='text-[#0e161b] text-base font-bold leading-tight'>
                                {activity.title}{' '}
                              </p>

                              <p className='text-[#507a95] text-sm font-normal leading-normal'>
                                {activity.description}
                              </p>
                            </div>
                            <div className='py-2'>
                              {' '}
                              <p className='text-[#0e161b] text-base font-bold leading-tight'>
                                {activity.transportationGuide}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiEngine;
