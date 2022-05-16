import React from 'react';

const MainHero = () => {
  return (
    <main className="p-28 bg-[#29564B]">
      <div className="flex gap-10 my-10 items-center justify-center">
        <div className="flex-1">
          <h3 className="text-6xl font-extrabold text-white">
            Credit Marketplace
          </h3>
          <p className="text-2xl text-gray-200 mt-6">
            Investors can earn non-speculative sustainable yields against real
            world assets.
          </p>
          <p className="text-2xl text-gray-200 mt-6">
            Borrow against real world assets and create your credit history on
            blockchain.
          </p>
        </div>
        <div className="flex-1">
          <img src="/assets/images/Asset 34.svg" alt="" className="w-full" />
        </div>
      </div>
    </main>
  );
};

export default MainHero;
