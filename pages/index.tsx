import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Layout from '@/layout';

export default function Home() {
  return (
    <Layout meta={{ title: 'Anasayfa' }}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar 1"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="https://github.com/radix-ui.png"
              alt="Avatar 2"
            />
            <AvatarFallback>RU</AvatarFallback>
          </Avatar>
          <Avatar className="h-20 w-20">
            <AvatarImage
              src="https://github.com/vercel.png"
              alt="Avatar 3"
            />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="border-primary h-8 w-8 rounded-full border-2">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar 4"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="ring-primary h-10 w-10 rounded-full ring-2">
            <AvatarImage
              src="https://github.com/radix-ui.png"
              alt="Avatar 5"
            />
            <AvatarFallback>RU</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12 rounded-full shadow-lg">
            <AvatarImage
              src="https://github.com/vercel.png"
              alt="Avatar 6"
            />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </Layout>
  );
}
