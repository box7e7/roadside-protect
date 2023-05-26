import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({user}) => {
  return (
    <nav className="flex md:justify-between flex-col md:flex-row items-center bg-slate-300 w-full h-44 py-5">
        <div className=""></div>
        <div className=" md:ml-32">
            <Image src={`/logo_momentum.webp`} alt="" width="200" height="70"/>
        </div>
        <div className="right">
        {!user ? <Link href="/api/auth/login" className="text-white bg-blue-500 py-2 px-4 rounded md:mr-14">Login</Link>: null}
        {user ?  <Link href="/api/auth/logout" className="text-white bg-blue-500 py-2 px-4 rounded md:mr-14">Logout</Link>: null}
        </div>
    </nav>
  );
};

export default Navbar;


