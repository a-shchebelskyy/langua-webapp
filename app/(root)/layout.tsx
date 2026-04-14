import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';
// import { Chat, useCreateChatClient } from 'stream-chat-react';

// const apiKey = 'dz5f4d5kzrue';
// const userId = 'lingering-sun-0';
// const userName = 'lingering';
// const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGluZ2VyaW5nLXN1bi0wIiwiZXhwIjoxNzcyMDUzODczfQ.bKgYpcrdDBiXnVtRr9vhAuXo_ifSZ_2jh0RGtRvhF2Q';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {

  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
