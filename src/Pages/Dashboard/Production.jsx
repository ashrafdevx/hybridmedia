import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";

export const ProductSection = () => {
  const dispatch = useDispatch();
  const productImages = [
    {
      id: 1,
      img: "/Auth/shoes-1.svg",
      price: "35",
      name: "Sneaker",
      type: "Running",
      quantity: 1,
    },
    {
      id: 2,
      img: "/Auth/shoes-2.svg",
      price: "95",
      name: "Sneaker",
      type: "Running",
      quantity: 1,
    },
    {
      id: 3,
      img: "/Auth/shoes-3.svg",
      price: "235",
      name: "Sneaker",
      type: "Running",
      quantity: 1,
    },
    {
      id: 4,
      img: "/Auth/shoes-4.svg",
      price: "66",
      name: "Sneaker",
      type: "Running",
      quantity: 1,
    },
    {
      id: 5,
      img: "/Auth/shoes-5.svg",
      price: "69",
      name: "Sneaker",
      type: "Running",
      quantity: 1,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 mt-8">
      {productImages.map((cart, index) => (
        <ProductCard key={index} cart={cart} />
      ))}
    </div>
  );
};
const ProductCard = ({ cart }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (arg) => {
    dispatch(addToCart(arg));
  };
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={cart.img}
        alt={cart.name}
        className="w-full h-56 object-cover mb-4"
      />

      <div className="flex h-[49px] justify-between mt-4">
        <button
          className="bg-black w-full  text-white py-1 px-2  "
          onClick={() => handleAddToCart(cart)}
        >
          Add to Cart
        </button>
        <button className="bg-[#89089F]  w-full text-white py-1 px-2  ">
          Quick View
        </button>
      </div>

      <div className="flex border-t  justify-between mt-1">
        <p className="text-black w-full py-1 px-2 font-bold uppercase">
          {cart.name}
        </p>
        <p className="text-black w-full py-1 px-2 font-bold gap-1 flex justify-end items-center  text-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#89089F"
            width="24px"
            height="18px"
            className="mt-1"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          ${cart.price}.00
        </p>
      </div>
      <div className="flex border-t  justify-between mt-1">
        <p className="text-black w-full py-1 px-2 italic">{cart.type}</p>
        <p className="text-black w-full py-1 px-2 font-bold flex justify-end items-center  text-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
            width="24px"
            height="18px"
          >
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
            width="24px"
            height="18px"
          >
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
            width="24px"
            height="18px"
          >
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000000"
            width="24px"
            height="18px"
          >
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </p>
      </div>
    </div>
  );
};
