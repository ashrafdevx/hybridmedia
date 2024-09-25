export const PromoSection = () => {
  return (
    <div className="grid grid-cols-12 h-full max-h-[424px] gap-8">
      <div className="bg-black sm:order-1 text-white w-full relative col-span-8 rounded-2xl px-8 flex items-center justify-around">
        <img
          src="/Auth/promotionShoesImage.svg"
          alt="promo"
          className="w-[416px] h-[261px] object-cover" // Fixed the width class
        />
        <div>
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold">
            Essential
            <br /> Items for
          </h2>
          <p className="text-[44px] rounded-xl mt-5 text-white w-fit px-6 bg-[#89089F] font-bold">
            $99
          </p>
          <p className="mt-4">
            Nulla accuman malesuada egestas nam <br /> dignissim. Quis vulputate
            blandit duis.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded-xl font-medium mt-4">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="w-full sm:order-2 relative rounded flex col-span-4 items-center border justify-between">
        <img
          src="/Auth/womanRunning.svg"
          className="w-1/2 absolute top-20 md:left-0 left-16 h-auto object-contain z-20"
          alt="Running Woman"
        />
        <img
          src="/Auth/sale.svg"
          alt="promo"
          className="absolute object-cover w-full max-h-[424px] h-full top-0 right-5"
        />
      </div>
    </div>
  );
};
