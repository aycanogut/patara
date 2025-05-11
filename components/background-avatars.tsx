const avatars = [
  { letter: 'P', top: '7.25%', left: '11%' },
  { letter: 'M', top: '7.25%', left: '89.25%' },
  { letter: 'S', top: '37.5%', left: '8%' },
  { letter: 'F', top: '58.5%', left: '21%' },
  { letter: 'G', top: '81.75%', left: '5.25%' },
  { letter: 'C', top: '32.5%', left: '73.50%' },
  { letter: 'W', top: '52%', left: '86.35%' },
  { letter: 'A', top: '81.75%', left: '83.75%' },
];

function BackgroundAvatars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {avatars.map((a, i) => (
        <div
          key={i}
          className="absolute flex size-[3.75rem] items-center justify-center rounded-full bg-[linear-gradient(to_bottom,#282832,#212121,#121212)] text-3xl font-bold text-[#C4C4C8] blur-[0.21875rem]"
          style={{
            top: a.top,
            left: a.left,
          }}
        >
          {a.letter}
        </div>
      ))}
    </div>
  );
}

export default BackgroundAvatars;
