import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex flex-row h-screen w-full items-center justify-center overflow-hidden">
      <div className="flex h-screen w-[50%] items-center justify-start pr-8 bg-blue-500">
        <img
          src={'/images/banner-auth.png'}
          alt={''}
          className={'w-fit'}
        />
      </div>
      <div className="flex h-screen w-[50%] items-center justify-center">
        <SignUp />
      </div>
    </main>
  );
}
