import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      // 간격을 주는 건 flex와 grid 둘 중 선택하여 유연하게 사용
      // className="bg-slate-400 py-10 px-5 flex flex-col space-y-5"
      className="bg-slate-300 py-20 px-10 grid gap-10 min-h-screen"
    >
      <div className="bg-white p-6 rounded-3xl shadow-2xl">
        <span className="font-bold text-2xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div
              key={i}
              className="flex justify-between my-2 odd:bg-slate-100 rounded-lg px-2"
            >
              <span className="text-slate-500">Budding Pack</span>
              <span className="text-slate-900 font-bold">$8.99</span>
            </div>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed px-2">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-lg">$11.98</span>
        </div>
        <button
          className="mt-5 bg-we-red-500 text-white p-3 text-center rounded-xl w-1/2 block mx-auto
        hover:bg-we-red-700 active:bg-we-red-900 active:scale-90 focus:bg-we-red-900 transition
        "
        >
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-2xl">
        <div className="bg-we-red-500 p-6 pb-14 flex justify-between items-center">
          <span className="text-white text-2xl font-bold">Profile</span>
          <button className="group">
          <svg
            className="stroke-white group-active:scale-90 transition"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          </button>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -mt-5 -mb-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-slate-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-slate-300 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-slate-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col -top-10 items-center">
            <span className="text-lg font-semibold">Shawn Choi</span>
            <span className="text-sm text-slate-500">Seoul</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="mb-5 flex justify-between items-center">
          <button className="group">
            <svg
            className="stroke-slate-900 group-active:scale-90 transition"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <div className="flex justify-between items-center space-x-2">
            <span className="text-yellow-400 text-xl">⭑</span>
            <span className="font-semibold">4.9</span>
            <button className="group">
              <svg
                className="stroke-slate-400 group-hover:stroke-we-red-700 group-active:stroke-we-red-700 group-active:fill-we-red-700 group-active:scale-90 group-focus:stroke-we-red-700 group-focus:fill-we-red-700 group-focus:scale-110 transition"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-slate-300 h-72 mb-5 rounded-xl" />
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">Budding Pack</span>
            <button className="group">
              <svg
                className="stroke-slate-700 group-active:stroke-slate-700 group-active:fill-slate-700 group-active:scale-90 group-focus:stroke-slate-700 group-focus:fill-slate-700 group-focus:scale-110 transition"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

          <span className="text-xs text-slate-500">Sticker</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 hover:ring-2 hover:ring-slate-200 active:ring-2 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 hover:ring-2 hover:ring-slate-200 active:ring-2 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 hover:ring-2 hover:ring-slate-200 active:ring-2 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-1 bg-slate-100 flex justify-center items-start aspect-square w-9 rounded-xl font-medium text-slate-700 hover:bg-slate-200 active:bg-slate-400 focus:bg-slate-300 transition">
                -
              </button>
              <span>1</span>
              <button className="p-1 bg-slate-100 flex justify-center items-start aspect-square w-9 rounded-xl font-medium text-slate-700 hover:bg-slate-200 active:bg-slate-400 focus:bg-slate-300 transition">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-2xl">$8.99</span>
            <button className="bg-we-red-500 py-2 px-5 text-center text-white rounded-xl hover:bg-we-red-700 active:bg-we-red-900 active:scale-90 focus:bg-we-red-900 transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
