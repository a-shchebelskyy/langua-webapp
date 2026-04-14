import Image from "next/image";

const ThemeToggle = () => {

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        // Optionally save preference to localStorage
        if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'light');
        } else {
        localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button 
            className='flex flex-row items-center justify-start p-1 gap-1 rounded-full bg-slate-200 dark:bg-slate-950'
            onClick={toggleTheme}
        >
            <div className={`absolute t-0 ml-10 dark:ml-0 h-[36px] w-[36px] rounded-full bg-slate-50 dark:bg-slate-800 transition-all ease-in-out duration-500`}/>
            <Image
                src={'/images/moon.png'}
                alt={''}
                width={36}
                height={36}
                className={`p-1 opacity-50 dark:opacity-100 transition-opacity duration-1000 z-10`}
            />
            <Image
                src={'/images/sun.png'}
                alt={''}
                width={36}
                height={36}
                className={`p-1 opacity-100 dark:opacity-50 transition-opacity duration-1000 z-10`}
            />
      </button>
    )
};

export default ThemeToggle;