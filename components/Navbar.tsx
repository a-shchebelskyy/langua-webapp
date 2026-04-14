'use client';
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {

  return (
    <nav className="flex flex-row items-center justify-end gap-3 sticky h-[80px] p-6 border-b border-neutral-700 bg-neutral-800">
      {/* <p className="text-xl font-semibold text-white max-sm:hidden">
        Dashboard
      </p> */}
      <button className='flex px-4 py-3 rounded-full bg-neutral-900 hover:bg-neutral-700'>
        <Image
          src={'/icons/bell.svg'}
          alt={''}
          width={16}
          height={16}
        />
      </button>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
