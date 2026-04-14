"use client";
import {useEffect, useState } from 'react';
import Image from 'next/image';
import { StreamChat } from "stream-chat";
import type { User, Channel as StreamChannel } from 'stream-chat';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { useAuth, useUser } from '@clerk/nextjs';

import 'stream-chat-react/dist/css/v2/index.css';

// const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

// your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'billowing-math-7';
const userName = 'billowing';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmlsbG93aW5nLW1hdGgtNyIsImV4cCI6MTc3MjU0OTY4MH0.Xj9HWwJOzDkFTMhtcEvX2mRYdniw4M603vELqwFe5SU';

const user: User = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const messages = [
  {
    sender: 'Jenny Wilson',
    online: true,
    time: 'Just Now',
    message: 'Hello, Cynthia! Your lesson request has been accepted. Waiting for our meeting :)',
    unread: 1,
  },
  {
    sender: 'Dominick Romaguera',
    online: true,
    time: '10min ago',
    message: 'Hey Jenny, I will prepare some tomorrow',
    unread: 1,
  },
  {
    sender: 'Dolores Raynor',
    online: false,
    time: '27min ago',
    message: 'Already done! Btw I was looking for some',
    unread: 1,
  }
];

const MessagesPage = () => {
  // const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();
  // const token = getToken();
  // const { user } = useUser();
  const hasUnread = useState(true);
  const numUnread = useState(8);
  const [activeThread, setActiveThread] = useState(0);
  const [channel, setChannel] = useState<StreamChannel>();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', 'custom_channel_id', {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Talk about React',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <section className="flex flex-col max-h-screen text-black m-8 gap-8 bg-neutral-50">
      <h1 className="text-xl font-semibold">Chat</h1>
      <div className="flex flex-1 flex-row rounded-xl border border-neutral-100 bg-white shadow-lg">
        <div className="flex flex-1 flex-col max-w-xs border-r border-neutral-100">
          <div className="flex flex-col p-4 gap-3">
            <div className="flex flex-row items-center justify-start gap-3">
              <p className="text-sm text-neutral-600">
                Messages
              </p>
              {hasUnread && (
                <div className="flex items-center justify-center px-2 py-1 rounded-full bg-neutral-200">
                  <p className="text-xs text-neutral-600">
                    • {numUnread} new messages
                  </p>
                </div>
              )}
            </div>
            <div className="flex px-3 py-2 gap-2 items-center justify-start rounded-md border border-neutral-100">
              <Image
                src={'/icons/search.svg'}
                alt={''}
                width={16}
                height={16}
              />
              <p className="text-sm text-neutral-400">Search</p>
            </div>
          </div>
          {messages.map((message) => (
            <button className="flex w-full px-4 py-6 border-t border-neutral-100 bg-white hover:bg-neutral-100">
            <div className="flex w-full items-center gap-4">
              <div className="flex h-[36px] w-[36px] shrink-0 items-end justify-end rounded-xl bg-neutral-600">
                {message.online && (
                  <div className="h-[10px] w-[10px] rounded-full border border-white bg-green-500"/>
                )}
              </div>
              <div className="flex flex-1 flex-col space-y-1 min-w-0">
                <div className="flex justify-between">
                  <p className="text-xs font-medium text-neutral-800">
                    {message.sender}
                  </p>
                  <p className="text-xs text-neutral-400 shrink-0">
                    {message.time}
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <p className="text-xs text-neutral-800 truncate">
                    {message.message}
                  </p>
                  {message.unread > 0 && (
                    <div className="flex items-center justify-center px-2 py-1 rounded-full bg-blue-500">
                      <p className="text-xs font-medium text-white">{message.unread}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </button>          
          ))}
        </div>
        <div className="flex flex-1 flex-col min-w-xl">
          {/* <div className="flex flex-row items-center justify-between p-4 border-b border-neutral-100">
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex h-[48px] w-[48px] shrink-0 items-end justify-end rounded-xl bg-neutral-600">
                {messages[activeThread].online && (
                  <div className="h-[12px] w-[12px] rounded-full border border-white bg-green-500"/>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-sm text-black">{messages[activeThread].sender}</p>
                <div className={`w-fit flex items-center justify-start px-2 py-1 rounded-full ${messages[activeThread].online ? 'bg-green-100' : 'bg-neutral-100'}`}>
                  <p className={`text-xs ${messages[activeThread].online ? 'text-green-700' : 'text-neutral-700'}`}>{messages[activeThread].online ? 'Online' : 'Away'}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-3">
              <button className="flex items-center justify-center px-4 py-3 gap-2 min-w-[96px] text-xs font-medium text-neutral-800 rounded-lg border-2 border-neutral-200 hover:bg-neutral-200">
                <Image
                  src={'/icons/phone-call.svg'}
                  alt={''}
                  width={16}
                  height={16}
                />
                <p>Call</p>
              </button>
              <button className="flex items-center justify-center px-4 py-3 min-w-[96px] text-xs font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-700">
                <p>View Profile</p>
              </button>
            </div>
          </div> */}
          {/* <div className="flex flex-1 flex-col p-4 gap-8 overflow-scroll">
            <div className="flex flex-row items-start justify-start">
              <div className="flex wrap max-w-xs p-3 text-xs text-black shadow-sm">
                <p>{messages[activeThread].message}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center p-4 gap-3 border-t border-neutral-200">
            <button className="flex w-[40px] h-[40px] items-center justify-center rounded-lg border-2 border-neutral-200 hover:bg-neutral-200">
              <Image
                src={'/icons/smile.svg'}
                alt={''}
                width={20}
                height={20}
              />
            </button>
            <button className="flex w-[40px] h-[40px] items-center justify-center rounded-lg border-2 border-neutral-200 hover:bg-neutral-200">
              <Image
                src={'/icons/paperclip.svg'}
                alt={''}
                width={20}
                height={20}
              />
            </button>
            <button className="flex flex-1 flex-row items-center justify-start h-[40px] p-3 rounded-lg border-2 border-neutral-200">
              <p className="text-sm text-neutral-400">Message</p>
            </button>
            <button className="flex w-[40px] h-[40px] items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-700">
              <Image
                src={'/icons/send.svg'}
                alt={''}
                width={20}
                height={20}
              />
            </button>
          </div> */}
          <Chat client={client} theme='str-chat__theme-custom'>
            <Channel channel={channel}>
              <Window>
                <ChannelHeader />
                <div className="max-h-[400px] overflow-scroll">
                  <MessageList />
                </div>
                <MessageInput />
              </Window>
              <Thread />
            </Channel>
          </Chat>
        </div>
      </div>
    </section>
  );
};

export default MessagesPage;
