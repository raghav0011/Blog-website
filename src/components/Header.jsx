import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { images } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/user";

const NavItemInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "About Us", type: "link", href: "/aboutUs" },
  {
    name: "Employer",
    type: "dropdown",
    items: ["Search Candidates", "Job Posting Options"],
  },
  // { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
  { name: "Blog", type: "link", href: "/blog" },
  { name: "Contact Us", type: "link", href: "/contactUs" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = React.useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => !curState);
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href={item.href} className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-1 items-center"
            onClick={toggleDropdownHandler}>
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transiotion-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:tranform lg:translate-y-full lg:group-hover:block w-max`}>
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <a
                  key={index}
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const [profileDropdown, setProfileDropdown] = React.useState(false);
  const userState = useSelector((state) => state.user);

  const navVisibilityHandler = () => {
    setIsNavVisible((curState) => {
      return !curState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-20" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {isNavVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            isNavVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {NavItemInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className="flex gap-1 items-center mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    >
                    <span>Profile</span>
                    <MdKeyboardArrowDown />
                  </button>
                  <div
                    className={`${
                      profileDropdown ? "block" : "hidden"
                    } lg:hidden transiotion-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:tranform lg:translate-y-full lg:group-hover:block w-max`}>
                    <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      <button
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                        Dashboard
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Sign in
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
