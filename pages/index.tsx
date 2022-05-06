import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      // 간격을 주는 건 flex와 grid 둘 중 선택하여 유연하게 사용
      // className="bg-slate-400 py-10 px-5 flex flex-col space-y-5"
      className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen"
    >
      <div className="bg-white p-6 rounded-3xl shadow-2xl">
        <span className="font-bold text-2xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-bold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-bold">$20</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-bold">$39</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-2xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl font-bold">Profile</span>
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
      <div className="bg-white p-10 rounded-2xl shadow-2xl">
        <div className="mb-5 flex justify-between items-center">
          <span className="text-2xl font-thin">←</span>
          <div className="space-x-2">
            <span className="text-yellow-400 text-xl">⭑</span>
            <span className="font-semibold">4.9</span>
            <span className="text-red-500 shadow-xl p-2 rounded-lg">♥️</span>
          </div>
        </div>
        <div className="bg-slate-300 h-72 mb-5 rounded-xl" />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Swoon Lounge</span>
          <span className="text-xs text-slate-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div>
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-1 bg-blue-200 flex justify-center items-start aspect-square w-9 rounded-xl font-medium text-slate-700">-</button>
              <span>1</span>
              <button className="p-1 bg-blue-200 flex justify-center items-start aspect-square w-9 rounded-xl font-medium text-slate-700">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-5 text-center text-white rounded-lg">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
