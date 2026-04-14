import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="flex flex-row h-screen w-full items-center justify-center overflow-hidden">
      <div className="flex h-screen w-[50%] items-start justify-start">
        <img
          src={'/images/auth.jpg'}
          alt={''}
          className={'h-fit'}
        />
      </div>
      <div className="flex h-screen w-[50%] items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
}
