import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import OrbitBackground from './orbit-background';

const avatars = [
  { label: 'P', image: '/avatars/1.svg', angle: 270 },
  { label: 'M', image: '/avatars/2.svg', angle: 315 },
  { label: 'A', image: '/avatars/3.svg', angle: 0 },
  { label: 'W', image: '/avatars/4.svg', angle: 45 },
  { label: 'C', image: '/avatars/5.svg', angle: 90 },
  { label: 'G', image: '/avatars/6.svg', angle: 135 },
  { label: 'S', image: '/avatars/7.svg', angle: 180 },
  { label: 'F', image: '/avatars/8.svg', angle: 225 },
];

function OrbitAvatars() {
  const size = 300;
  const center = size / 2;
  const gap = 15;
  const radius = 135;
  const avatarSize = 52;
  const avatarOffset = avatarSize / 2;

  return (
    <OrbitBackground
      size={size}
      rings={5}
      gap={gap}
      color="#FFFFFF1F"
    >
      <div className="bg-background-default/5 flex size-[8.125rem] rounded-full">
        <Image
          src="/logo.svg"
          alt="Firma logosu"
          width={84}
          height={84}
          className="m-auto"
        />
      </div>

      <div
        className="repeat-infinite absolute inset-0 h-full w-full -rotate-[360deg] animate-spin duration-[24s] ease-linear"
        style={{ pointerEvents: 'none' }}
      >
        {avatars.map(item => {
          const rad = (item.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(rad) - avatarOffset;
          const y = center + radius * Math.sin(rad) - avatarOffset;

          return (
            <div
              key={item.label}
              className="repeat-infinite animate-spin-reverse absolute animate-[spin_reverse] duration-[24s] ease-linear"
              style={{ left: x, top: y, pointerEvents: 'auto' }}
            >
              <Avatar className="size-[3.25rem] select-none">
                <AvatarImage
                  src={item.image}
                  alt={item.label}
                />
                <AvatarFallback>{item.label}</AvatarFallback>
              </Avatar>
            </div>
          );
        })}
      </div>
    </OrbitBackground>
  );
}

export default OrbitAvatars;
