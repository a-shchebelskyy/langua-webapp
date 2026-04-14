'use client'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image';

import { days, months } from '@/constants';

const Home = () => {
  const { user } = useUser();

  // const now = new Date();

  // const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  // const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  // const dayName: string = days[new Date().getDay()];
  // const dayNumber = new Date().getDate();
  // const monthName: string = months[new Date().getMonth()];
  // const yearNumber = new Date().getFullYear();


  return (
    <section className="flex w-full flex-row p-6 text-white bg-neutral-900">
      <div className="flex flex-1 flex-col min-h-screen">
        <div className='flex flex-row'>
          <div className='absolute flex flex-col ml-[112px] mt-[32px] max-w-[256px] gap-2'>
            <h1 className="text-4xl font-semibold">Вітаємо,<span className="text-amber-300"> {user.firstName}</span>!</h1>
            <p className='text-neutral-300 text-xs'>Натисніть на &quot;Курси&quot;, щоб розпочати свою навчальну подорож!</p>
          </div>
          <Image
            src="/images/banner-hero.png"
            width={800}
            height={400}
            alt={''}
          />
        </div>
        <div className='flex flex-row items-center justify-between'>
          <div className="flex flex-col p-6 gap-6">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-semibold">Ваші Курси</h1>
              <a href='/courses' className="text-sm font-medium text-amber-300">Переглянути всі</a>
            </div>
            <div className='flex flex-row grow gap-6'>
              <div className="flex flex-col rounded-xl bg-neutral-800">
                <Image
                  src="/images/banner-english.jpg"
                  width={405}
                  height={270}
                  alt={''}
                  className={'rounded-xl'}
                />
                <div className='flex flex-col px-4 py-6 gap-4 items-start'>
                  <p className="text-lg font-semibold text-white">Англійська</p>
                  <p className="text-xs font-medium text-amber-300">з Марією Михайлівною</p>
                </div>
              </div>
              <div className="flex flex-col rounded-xl bg-neutral-800">
                <Image
                  src="/images/banner-polish.png"
                  width={405}
                  height={270}
                  alt={''}
                  className={'rounded-xl'}
                />
                <div className='flex flex-col px-4 py-6 gap-4 items-start'>
                  <p className="text-lg font-semibold text-white">Польська</p>
                  <p className="text-xs font-medium text-amber-300">з Марією Михайлівною</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[256px] p-6 gap-6">
        <h2 className='text-white text-xl font-semibold'>Майбутні Уроки</h2>
        <div className='flex flex-col gap-3'>
          <div>

          </div>

        </div>
        {/* <div className="flex flex-row items-center justify-between"> */}
          {/* <div>
            <p className="text-base text-white">{dayName}</p>
            <p className="text-xs text-neutral-500">{dayNumber} {monthName}, {yearNumber}</p>
          </div> */}
          {/* <div className="flex flex-row space-x-4">
            <button className="flex w-[44px] h-[44px] items-center justify-center rounded-xl hover:bg-neutral-100">
              <Image
                src={'/icons/bell.svg'}
                alt={''}
                width={20}
                height={20}
              />
            </button>
            <button className="flex w-[32px] h-[32px] items-center justify-center rounded-xl bg-neutral-100"/>
          </div> */}
        {/* </div> */}
        {/* <div className="flex h-[160px] w-[375px] rounded-xl border-2 border-neutral-100">
          
        </div> */}
      </div>
      {/* <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList /> */}
    </section>
  );
};

export default Home;
