import Header from '@/components/header/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden"
      style={{
        '--radio-dot-svg':
          "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(44,153,226)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
        fontFamily: "'Plus Jakarta Sans', 'Noto Sans', sans-serif",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-[#0e161b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Lets plan your perfect trip
            </h2>
            <h3 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Whats the purpose of your visit?
            </h3>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="17b59cb0-ae3f-414e-a729-47a9e6da5534"
                  checked=""
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Business
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="17b59cb0-ae3f-414e-a729-47a9e6da5534"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Event
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="17b59cb0-ae3f-414e-a729-47a9e6da5534"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Family
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="17b59cb0-ae3f-414e-a729-47a9e6da5534"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Friends
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="17b59cb0-ae3f-414e-a729-47a9e6da5534"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Solo
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="17b59cb0-ae3f-414e-a729-47a9e6da5534"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Romantic
                  </p>
                </div>
              </label>
            </div>
            <h3 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              How long are you staying?
            </h3>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="0ce5a90b-8bc5-4719-9be1-910bc881763a"
                  checked=""
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    1-3 days
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="0ce5a90b-8bc5-4719-9be1-910bc881763a"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    4-7 days
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="0ce5a90b-8bc5-4719-9be1-910bc881763a"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    8+ days
                  </p>
                </div>
              </label>
            </div>
            <h3 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              What are your interests?
            </h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8eef3] pl-4 pr-4">
                <p className="text-[#0e161b] text-sm font-medium leading-normal">
                  Art
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8eef3] pl-4 pr-4">
                <p className="text-[#0e161b] text-sm font-medium leading-normal">
                  Culture
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8eef3] pl-4 pr-4">
                <p className="text-[#0e161b] text-sm font-medium leading-normal">
                  Dining
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8eef3] pl-4 pr-4">
                <p className="text-[#0e161b] text-sm font-medium leading-normal">
                  History
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8eef3] pl-4 pr-4">
                <p className="text-[#0e161b] text-sm font-medium leading-normal">
                  Music
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8eef3] pl-4 pr-4">
                <p className="text-[#0e161b] text-sm font-medium leading-normal">
                  Nature
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8eef3] pl-4 pr-4">
                <p className="text-[#0e161b] text-sm font-medium leading-normal">
                  Nightlife
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8eef3] pl-4 pr-4">
                <p className="text-[#0e161b] text-sm font-medium leading-normal">
                  Sports
                </p>
              </div>
            </div>
            <h3 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Whats your budget for activities?
            </h3>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="fa7fc650-4a6a-4ae7-9a30-d24b6ad0870b"
                  checked=""
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Budget
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="fa7fc650-4a6a-4ae7-9a30-d24b6ad0870b"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Standard
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="fa7fc650-4a6a-4ae7-9a30-d24b6ad0870b"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Luxury
                  </p>
                </div>
              </label>
            </div>
            <h3 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Whats your budget for dining?
            </h3>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="433edc37-f1f9-4d0d-b71f-aef59d2029b2"
                  checked=""
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Budget
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="433edc37-f1f9-4d0d-b71f-aef59d2029b2"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Standard
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#d1dde6] p-[15px] flex-row-reverse">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#d1dde6] bg-transparent text-transparent checked:border-[#2c99e2] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#2c99e2]"
                  name="433edc37-f1f9-4d0d-b71f-aef59d2029b2"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#0e161b] text-sm font-medium leading-normal">
                    Luxury
                  </p>
                </div>
              </label>
            </div>
            <div className="flex px-4 py-3">
              <Link to={'/ai'}>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#2c99e2] text-[#f8fafb] text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Start planning</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
