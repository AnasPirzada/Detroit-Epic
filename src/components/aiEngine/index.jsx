import { Link } from 'react-router-dom';

function AiEngine() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e161b]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <Link to="/">
              <h2 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em]">
                Detroit Epic Weekend
              </h2>
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-[#0e161b] text-sm font-medium leading-normal"
                href="#"
              >
                Explore
              </a>
              <a
                className="text-[#0e161b] text-sm font-medium leading-normal"
                href="#"
              >
                Events
              </a>
              <a
                className="text-[#0e161b] text-sm font-medium leading-normal"
                href="#"
              >
                Stories
              </a>
              <a
                className="text-[#0e161b] text-sm font-medium leading-normal"
                href="#"
              >
                Guides
              </a>
            </div>
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e8eef3] text-[#0e161b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#0e161b]"
                  data-icon="ChatCircleDots"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e8eef3] text-[#0e161b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#0e161b]"
                  data-icon="Bell"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://cdn.usegalileo.ai/stability/e66d48c1-fa4a-43fb-b0d3-4450fa8a6735.png')",
              }}
            ></div>
          </div>
        </header>
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <h3 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Your Itinerary
            </h3>
            <div className="flex items-center gap-4 bg-[#f8fafb] px-4 min-h-[72px] py-2">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="Sun"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal line-clamp-1">
                  Day 1: Friday
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal line-clamp-2">
                  Jun 1, 2023
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fafb] px-4 min-h-[72px] py-2">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="Sun"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal line-clamp-1">
                  Day 2: Saturday
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal line-clamp-2">
                  Jun 2, 2023
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fafb] px-4 min-h-[72px] py-2">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="Sun"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal line-clamp-1">
                  Day 3: Sunday
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal line-clamp-2">
                  Jun 3, 2023
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fafb] px-4 min-h-[72px] py-2">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="Sun"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal line-clamp-1">
                  Day 4: Monday
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal line-clamp-2">
                  Jun 4, 2023
                </p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#e8eef3] text-[#0e161b] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Add Day</span>
              </button>
            </div>
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#e8eef3] text-[#0e161b] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Delete Day</span>
              </button>
            </div>
            <div className="flex px-4 py-3">
              <Link to="/result">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#2c99e2] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Save</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0e161b] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Edit Day 2: Saturday
              </p>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#d1dde6] px-4 gap-8">
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-[#2c99e2] text-[#0e161b] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#0e161b] text-sm font-bold leading-normal tracking-[0.015em]">
                    Morning
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#507a95] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#507a95] text-sm font-bold leading-normal tracking-[0.015em]">
                    Midday
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#507a95] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#507a95] text-sm font-bold leading-normal tracking-[0.015em]">
                    Afternoon
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#507a95] pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-[#507a95] text-sm font-bold leading-normal tracking-[0.015em]">
                    Evening
                  </p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fafb] px-4 min-h-14">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-10"
                data-icon="Clock"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <p className="text-[#0e161b] text-base font-normal leading-normal flex-1 truncate">
                9:00 AM
              </p>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e161b] text-base font-bold leading-tight">
                      Breakfast at The Hudson Cafe
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      $$ • American, Vegetarian Friendly
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#e8eef3] text-[#0e161b] text-sm font-medium leading-normal w-fit">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      "url('https://cdn.usegalileo.ai/sdxl10/aee7c9ac-642d-4fb4-b72b-5f9ce50f9a7b.png')",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8fafb] px-4 py-3">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="MapPin"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal">
                  1241 Woodward Ave, Detroit, MI 48226
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  313-237-1000
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  1241 Woodward Ave, Detroit, MI 48226
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8fafb] px-4 py-3">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="Check"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal">
                  Enjoy a classNameic breakfast or try something new at this
                  popular local spot.
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  Enjoy a classNameic breakfast or try something new at this
                  popular local spot.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fafb] px-4 min-h-14">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-10"
                data-icon="Clock"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <p className="text-[#0e161b] text-base font-normal leading-normal flex-1 truncate">
                11:00 AM
              </p>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e161b] text-base font-bold leading-tight">
                      Visit the Detroit Institute of Arts
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      $ • Art Museum
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#e8eef3] text-[#0e161b] text-sm font-medium leading-normal w-fit">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      "url('https://cdn.usegalileo.ai/sdxl10/389d3cc7-0cb5-40e0-ac37-4c27d45d61c1.png')",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8fafb] px-4 py-3">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="MapPin"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal">
                  5200 Woodward Ave, Detroit, MI 48202
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  313-833-7900
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  5200 Woodward Ave, Detroit, MI 48202
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8fafb] px-4 py-3">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="Check"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal">
                  Explore one of the countrys most comprehensive art museums,
                  featuring over 65,000 works from around the world.
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  Explore one of the countrys most comprehensive art museums,
                  featuring over 65,000 works from around the world.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fafb] px-4 min-h-14">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-10"
                data-icon="Clock"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <p className="text-[#0e161b] text-base font-normal leading-normal flex-1 truncate">
                12:30 PM
              </p>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e161b] text-base font-bold leading-tight">
                      Lunch at Chartreuse Kitchen &amp; Cocktails
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      $$$ • American, Vegetarian Friendly
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#e8eef3] text-[#0e161b] text-sm font-medium leading-normal w-fit">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      "url('https://cdn.usegalileo.ai/sdxl10/606d74fd-c0cd-4300-b876-b53876c0dfa0.png')",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8fafb] px-4 py-3">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="MapPin"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal">
                  15 E Kirby St, Detroit, MI 48202
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  313-818-3915
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  15 E Kirby St, Detroit, MI 48202
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8fafb] px-4 py-3">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="Check"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal">
                  Savor farm-to-table dishes and craft cocktails in a stylish
                  Midtown setting.
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  Savor farm-to-table dishes and craft cocktails in a stylish
                  Midtown setting.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#f8fafb] px-4 min-h-14">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-10"
                data-icon="Clock"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <p className="text-[#0e161b] text-base font-normal leading-normal flex-1 truncate">
                2:00 PM
              </p>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#0e161b] text-base font-bold leading-tight">
                      Tour the Motown Museum
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      $$ • Music Museum
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#e8eef3] text-[#0e161b] text-sm font-medium leading-normal w-fit">
                    <span className="truncate">View Details</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      "url('https://cdn.usegalileo.ai/sdxl10/ba921ee5-3eac-4f98-8335-201c1a7a2cf3.png')",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8fafb] px-4 py-3">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="MapPin"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal">
                  2648 W Grand Blvd, Detroit, MI 48208
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  313-875-2264
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  2648 W Grand Blvd, Detroit, MI 48208
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8fafb] px-4 py-3">
              <div
                className="text-[#0e161b] flex items-center justify-center rounded-lg bg-[#e8eef3] shrink-0 size-12"
                data-icon="Check"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#0e161b] text-base font-medium leading-normal">
                  Step into the birthplace of Motown Records and learn about the
                  legendary artists who got their start here.
                </p>
                <p className="text-[#507a95] text-sm font-normal leading-normal">
                  Step into the birthplace of Motown Records and learn about the
                  legendary artists who got their start here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiEngine;
