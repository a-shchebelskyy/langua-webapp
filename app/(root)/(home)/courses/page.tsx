// import CallList from '@/components/CallList';
"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import data from "../../../../lib/courseInfo.json";

const categories = ["Усі мови", "Англійська", "Польська", "Французька", "Німецька"]

const CoursesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);
  const [sortType, setSortType] = useState('popularity');

  return (
    <section className="flex w-full flex-col p-4 text-slate-950 dark:text-white bg-slate-200 dark:bg-slate-950">
      <div className="flex flex-row p-4">
        <div className='flex flex-col mt-[40px] mb-[16px] max-w-[256px] gap-2'>
          <h1 className="text-4xl font-semibold">Відкрийте нові курси</h1>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 dark:bg-slate-900 border border-slate-950 border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex flex-row gap-4">
            <div className="flex flex-1 flex-row items-center justify-start bg-slate-100 border-slate-950 border">
              <Image
                src={'/icons/search.svg'}
                alt={''}
                width={48}
                height={48}
                className="p-4"
              />
              <input 
                type="text" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Пошук курсів..."
                className="flex w-full text-sm text-slate-950 outline-none bg-transparent"
              />
            </div>
            <button className="flex flex-row items-center justify-center px-3 py-1 text-slate-950 hover:text-slate-50 bg-blue-500 hover:bg-slate-950 border-slate-950 border">
              <p className="text-sm font-bold">ПОШУК</p>
            </button>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2">
              {categories.map((cat, i) => {
                const isActive = activeCategory === i;
                return (
                  <button 
                    key={i} 
                    className={`flex px-3 py-2 rounded-lg ${isActive ? 'bg-blue-500' : 'bg-transparent'}`}
                    onClick={() => setActiveCategory(i)}
                  >
                    <p className={`text-xs ${isActive ? 'text-slate-50 font-medium' : 'text-slate-500 font-regular'}`}>{cat}</p>
                  </button>
                )
              })}
            </div>
            <div className="flex flex-row items-center justify-end px-3 py-1 gap-1 border-slate-950 border">
              <p className="text-xs text-slate-500">Сортувати:</p>
              <select 
                value={sortType} 
                onChange={(e) => setSortType(e.target.value)}
                className="appearance-none outline-none text-xs text-slate-950 dark:text-slate-50 bg-transparent"
              >
                <option value="popularity">Популярність</option>
                <option value="level">Рівень</option>
                <option value="expensive">Дорожче</option>
                <option value="cheap">Дешевше</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap p-4 gap-4 rounded-b-xl bg-slate-200 dark:bg-slate-800">
          {data.map((course) => {
            return (
              <Link 
                key={course.id}
                href={{
                  pathname: `/courses/${course.id}`,
                  query: { id: course.id },
                }}
                className="flex flex-col bg-slate-50 border border-slate-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <Image
                  src={course.bannerUrl}
                  width={356}
                  height={132}
                  alt={''}
                  className={''}
                />
                <div className='flex flex-col px-4 py-6 gap-4 items-start'>
                  <p className="text-sm font-medium text-slate-950">{course.name}</p>
                  <p className="text-xs text-slate-500">{course.teacher}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* <CallList type="recordings" /> */}
    </section>
  );
};

export default CoursesPage;
