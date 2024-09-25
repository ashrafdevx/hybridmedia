import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const initialCart = useSelector((st) => st?.cart?.cartItems);
  return (
    <header className="   p-4 flex justify-end items-center">
      <div className="flex items-center justify-center">
        <button
          className=" rounded-full w-[156px] h-14 flex items-center justify-center bg-white text-black p-2 "
          onClick={() => navigate("/cart")}
        >
          <img
            src="/Auth/cart.svg"
            alt="user-profile"
            className="rounded-md mr-2"
          />{" "}
          {initialCart?.length > 0 && (
            <span className="bg-[#89089F] rounded-full flex items-center justify-center text-white h-5 bg- px-2 mr-1">
              {initialCart?.length}
            </span>
          )}{" "}
          My Cart
        </button>
      </div>
    </header>
  );
};
