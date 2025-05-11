import { ReactNode } from 'react';

function OrbitBackground({
  size = 300,
  rings = 4,
  color = '#383838',
  strokeWidth = 2,
  gap = 28,
  children,
}: {
  size?: number;
  rings?: number;
  color?: string;
  strokeWidth?: number;
  gap?: number;
  children?: ReactNode;
}) {
  const center = size / 2;
  const innerRadius = 64.5;

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
    >
      <div className="pointer-events-none absolute inset-1/8 z-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,transparent_30,#53B1FD_120%,transparent_100%)] blur-[3rem]" />
      <svg
        width={size}
        height={size}
        className="pointer-events-none absolute top-0 left-0 z-0"
      >
        {[...Array(rings)].map((_, i) => {
          const opacity = 1 - i * 0.15;

          return (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={innerRadius + gap * i}
              stroke={typeof color === 'string' ? color : '#383838'}
              strokeWidth={strokeWidth}
              fill="none"
              style={{ opacity }}
            />
          );
        })}
      </svg>
      <div
        className="absolute top-0 left-0 z-10 flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {children}
      </div>
    </div>
  );
}

export default OrbitBackground;
