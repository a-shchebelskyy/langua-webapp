'use client';
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';

import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';

const Navbar = () => {

  return (
    <nav className="flex flex-row items-center justify-between h-[80px] p-6 bg-slate-50 dark:bg-slate-800">
      <div className="flex flex-row h-[80px] justify-center px-4 py-4 text-slate-950 dark:text-white bg-slate-50 dark:bg-slate-800">
        <button className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold max-sm:hidden">
            LANG<span className="text-blue-500">UA</span>
          </h1>
        </button>
      </div>
      <div className='flex flex-row gap-3'>
        <ThemeToggle/>
        <button className='flex h-[44px] w-[44px] items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-950 dark:hover:bg-slate-900'>
          <Image
            src={'/images/bell.png'}
            alt={''}
            width={28}
            height={28}
          />
        </button>
        <div className='flex items-center justify-center'>
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>

          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
