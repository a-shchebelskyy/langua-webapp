'use client';
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';

import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';

const Navbar = () => {

  return (
    <nav className="flex flex-row items-center justify-end gap-3 sticky h-[80px] p-6 bg-slate-50 dark:bg-slate-800">
      {/* <p className="text-xl font-semibold text-white max-sm:hidden">
        Dashboard
      </p> */}
      <ThemeToggle/>
      <button className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700'>
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
