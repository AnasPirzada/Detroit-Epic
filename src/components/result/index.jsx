import { Link } from 'react-router-dom';

function Result() {
  return (
    <>
      <div>
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
                    My Plans
                  </a>
                  <a
                    className="text-[#0e161b] text-sm font-medium leading-normal"
                    href="#"
                  >
                    Profile
                  </a>
                </div>
                <div className="flex gap-2">
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e8eef3] text-[#0e161b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <div
                      className="text-[#0e161b]"
                      data-icon="MagnifyingGlass"
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
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
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
                      "url('https://cdn.usegalileo.ai/sdxl10/a4934d7a-7a0b-414b-948f-16ebd4f70f29.png')",
                  }}
                ></div>
              </div>
            </header>
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#0e161b] tracking-light text-[32px] font-bold leading-tight">
                      Your Detroit Epic Weekend
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      Mar 3-5, 2023
                    </p>
                  </div>
                </div>
                <div className="p-4 @container">
                  <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{
                        backgroundImage:
                          "url('https://cdn.usegalileo.ai/sdxl10/76232d24-6160-4a88-93b7-82f55373df23.png')",
                      }}
                    ></div>
                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                      <p className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em]">
                        Detroit Epic Weekend
                      </p>
                      <div className="flex items-end gap-3 justify-between">
                        <p className="text-[#507a95] text-base font-normal leading-normal">
                          Mar 3-5, 2023
                        </p>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#2c99e2] text-[#f8fafb] text-sm font-medium leading-normal">
                          <span className="truncate">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                  Day 1 - Fri, Mar 3
                </h3>
                <div className="flex gap-4 bg-[#f8fafb] px-4 py-3 justify-between">
                  <div className="flex items-start gap-4">
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
                        Dinner at La Taqueria
                      </p>
                      <p className="text-[#507a95] text-sm font-normal leading-normal">
                        123 Main St
                      </p>
                      <p className="text-[#507a95] text-sm font-normal leading-normal">
                        5.0 (123) · Mexican • $$
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <button className="text-base font-medium leading-normal">
                      Add
                    </button>
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
                      La Taqueria
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      123 Main St
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      7:00 PM
                    </p>
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
                      Belle Isle Park
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      123 Main St
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      4.8 (234)
                    </p>
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
                      Belle Isle Park
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      $$
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      9:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#f8fafb] px-4 py-3 justify-between">
                  <div className="flex items-start gap-4">
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
                        Dinner at La Taqueria
                      </p>
                      <p className="text-[#507a95] text-sm font-normal leading-normal">
                        123 Main St
                      </p>
                      <p className="text-[#507a95] text-sm font-normal leading-normal">
                        5.0 (123) · Mexican • $$
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <button className="text-base font-medium leading-normal">
                      Add
                    </button>
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
                      La Taqueria
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      123 Main St
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      7:00 PM
                    </p>
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
                      Belle Isle Park
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      123 Main St
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      4.8 (234)
                    </p>
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
                      Belle Isle Park
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      $$
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      9:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#f8fafb] px-4 py-3 justify-between">
                  <div className="flex items-start gap-4">
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
                        Dinner at La Taqueria
                      </p>
                      <p className="text-[#507a95] text-sm font-normal leading-normal">
                        123 Main St
                      </p>
                      <p className="text-[#507a95] text-sm font-normal leading-normal">
                        5.0 (123) · Mexican • $$
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <button className="text-base font-medium leading-normal">
                      Add
                    </button>
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
                      La Taqueria
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      123 Main St
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      7:00 PM
                    </p>
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
                      Belle Isle Park
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      123 Main St
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      4.8 (234)
                    </p>
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
                      Belle Isle Park
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      $$
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      9:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#f8fafb] px-4 py-3 justify-between">
                  <div className="flex items-start gap-4">
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
                        Dinner at La Taqueria
                      </p>
                      <p className="text-[#507a95] text-sm font-normal leading-normal">
                        123 Main St
                      </p>
                      <p className="text-[#507a95] text-sm font-normal leading-normal">
                        5.0 (123) · Mexican • $$
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <button className="text-base font-medium leading-normal">
                      Add
                    </button>
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
                      La Taqueria
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      123 Main St
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      7:00 PM
                    </p>
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
                      Belle Isle Park
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      123 Main St
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      4.8 (234)
                    </p>
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
                      Belle Isle Park
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      $$
                    </p>
                    <p className="text-[#507a95] text-sm font-normal leading-normal">
                      9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
