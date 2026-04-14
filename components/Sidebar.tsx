'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks, colors } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section className={`sticky left-0 top-0 flex h-screen w-fit flex-col ${isCollapsed ? 'shrink' : 'min-w-[200px]'} ease-in-out duration-700 justify-between border-r-2 border-neutral-700 z-50 bg-neutral-900`}>
      <div className="flex flex-row h-[80px] justify-center px-4 py-4 border-b-2 border-neutral-700">
        <button className="flex items-center gap-3" onClick={() => setIsCollapsed(false)}>
          {/* <Image
            src="/icons/langua-circle.png"
            width={36}
            height={36}
            alt="langua logo"
            className="max-sm:size-10"
          /> */}
          {!isCollapsed && <p className="text-3xl font-semibold text-blue-300 max-sm:hidden">
            LANG<span className="text-amber-300">UA</span>
          </p>}
        </button>
        {/* {!isCollapsed && <button className='p-2 rounded-lg hover:bg-yellow-400'
          onClick={() => setIsCollapsed(true)}
        >
          <Image
            src={'/icons/sidebar.svg'}
            alt={'sidebar'}
            width={20}
            height={20}
          />
        </button>} */}
      </div>
      <div className="flex flex-1 flex-col p-4 text-white">
        {sidebarLinks.map((item, i) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex flex-row gap-3 items-center px-3 py-2 rounded-lg justify-start items-center',
                {
                  'bg-amber-300': isActive,
                  'text-neutral-800': isActive,
                }
              )}
            >
              <div 
                className={`flex p-1 rounded-full ${isActive ? 'bg-white' : colors[i]}`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={16}
                  height={16}
                />
              </div>
              {!isCollapsed && <p className="text-sm font-semibold max-lg:hidden">
                {item.label}
              </p>}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
