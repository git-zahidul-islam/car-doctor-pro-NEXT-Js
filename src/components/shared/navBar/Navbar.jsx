import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {

    const navLink = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: 'about'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'BLog',
            path: '/blog'
        },
        {
            title: 'Content',
            path: '/content'
        },
    ]

  return (
    <div className=" ">
      <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
             navLink.map((link)=> <Link href={link.path} key={link.title}><li>{link.title}</li></Link>)
            }
          </ul>
        </div>
        <Link href={'/'}>
        <Image src={'/assets/logo.svg'} width={60} height={35} alt="logo"/>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {
             navLink.map((link)=> <Link className="mx-3 font-semibold hover:text-primary duration-300" href={link.path} key={link.title}><li>{link.title}</li></Link>)
            }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-3 items-center">
        <CiShoppingCart className="text-2xl"/>
        <IoSearch className="text-2xl"/>
        <button className="btn btn-outline btn-primary">Appointment</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
