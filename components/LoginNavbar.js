import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';



function Navbar({user}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex md:justify-between flex-col md:flex-row items-center bg-slate-300 w-full h-44 py-5">
      <div className="md:hidden absolute left-5 top-24">
        <button
          onClick={toggleMenu}
          className="text-slate-700 bg-slate-300 py-2 px-4 rounded-md border-slate-400 border-2 hover:bg-blue-500 hover:text-white hover:border-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className=""></div>
      <div className=" md:ml-32">
        <Image src={`/logo_momentum.webp`} alt="" width="200" height="70"/>
      </div>
      <div className="right">
        {!user ? <Link href="/api/auth/login" className="text-white bg-blue-500 py-2 px-4 rounded md:mr-14">Login</Link>: null}
        {user ?  <Link href="/api/auth/logout" className="text-white bg-blue-500 py-2 px-4 rounded md:mr-14">Logout</Link>: null}
      </div>
     
     
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 top-36 w-full">
          {/* Add your menu items here */}
          <ul className="bg-slate-300 py-6 w-full pb-10  text-black rounded-b-lg shadow-lg ">
            <li className='hover:bg-slate-200 w-full pl-14 py-3 hover:text-slate-600'>
              <Link className='hover:text-slate-600' href="/admin">Gallery</Link>
            </li>
            <li className='hover:bg-slate-200 w-full pl-14 py-3 hover:text-slate-600'>
              <Link className='hover:text-slate-600' href="/admin">Testimonials</Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}


    </nav>
  );
}


export default Navbar;



// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = ({user}) => {
//   return (
//     <nav className="flex md:justify-between flex-col md:flex-row items-center bg-slate-300 w-full h-44 py-5">
//         <div className=""></div>
//         <div className=" md:ml-32">
//             <Image src={`/logo_momentum.webp`} alt="" width="200" height="70"/>
//         </div>
//         <div className="right">
//         {!user ? <Link href="/api/auth/login" className="text-white bg-blue-500 py-2 px-4 rounded md:mr-14">Login</Link>: null}
//         {user ?  <Link href="/api/auth/logout" className="text-white bg-blue-500 py-2 px-4 rounded md:mr-14">Logout</Link>: null}
//         </div>
//     </nav>
//   );
// };

// export default Navbar;


