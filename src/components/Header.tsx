import {
  cartIcon,
  headerMoreBtnData,
  searchIcon,
  userIcon,
} from "../assets/globalUtlities";
// import { useState } from "react";
import logo from "/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export function Header() {
  // const [isHovered, setHovered] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <header className="h-[104px]  bg-[#2874f0] md:bg-white md:h-[66px] flex items-center justify-around  flex-col-reverse md:flex-row  md:justify-between overflow-hidden relative">
      {/* Logo */}
      <Link to={`/`} className="absolute z-50 left-0 md:flex flex-col">
        <img src={logo} alt="logo" className="w-[100px] md:w-[150px]" />
        {/* <h4 className=" text-[#a1a09e] primary-font font-fam2 ">
          Explore<span className="text-[#ffc200]">Plus</span>
          <img src="" alt="" />
        </h4> */}
      </Link>
      {/* Searchbar */}
      <div className="flex items-center border-2 border-none w-[300px] md:w-[600px] bg-[#f0f5ff] h-[40px] px-2 rounded-md">
        <img
          src={searchIcon}
          alt="serach_icon"
          className="w-[22px] opacity-50 mr-2"
        />
        <input
          type="text"
          placeholder="Search for Products,Brands and More"
          className=" border-none bg-transparent outline-none h-[40px]  md:w-[570px] text-[10px] md:text-[18px] placeholder-[#717478]"
        />
      </div>
      {/* third */}
      <div className="flex gap-3 lg:gap-0 items-center justify-between w-full lg:w-[540px] font-fam">
        <button className="flex lg:ml-2 lg:gap-2">
          <AiOutlineHome />
          <p className="hidden lg:block">Become a Seller</p>
        </button>
        <Link
          to={"/login"}
          className="flex p-2 cursor-pointer group primary-bg-h rounded-md"
        >
          <img src={userIcon} alt="user" className=" group-hover:text-white" />
          <button className="hidden lg:block">Sign in </button>
          <span className="transition-transform transform-gpu  ease-in-out group-hover:rotate-180">
            <BiChevronDown />
          </span>
        </Link>

        <Link to={"/cart"}>
          <div className="relative ">
            <img src={cartIcon} alt="cart_icon" />
            <span className="absolute bg-red-500/50 px-1 rounded-full -top-4 -right-2">
              {cart.items.length > 0 && cart.items.length}
            </span>
          </div>
        </Link>

        <div className="group">
          <button>
            <PiDotsThreeVerticalBold />
          </button>
          <ul className="hidden group-hover:flex flex-col w-48  absolute  right-0 top-10 bg-white border border-blue-800 z-50">
            {headerMoreBtnData?.map((data) => (
              <li key={data} className=" border px-5 py-5">
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
