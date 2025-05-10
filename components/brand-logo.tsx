import { HTMLAttributes } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps extends HTMLAttributes<HTMLImageElement> {
  width: number;
  height: number;
  asLink?: boolean;
}

function BrandLogo({ width, height, asLink = false, className }: BrandLogoProps) {
  const ImageComponent = () => {
    return (
      <Image
        src="/brand-logo.svg"
        alt="Firma Logosu"
        width={width}
        height={height}
        className={className}
      />
    );
  };

  if (asLink) {
    return (
      <Link
        href="/"
        className="block"
      >
        <ImageComponent />
      </Link>
    );
  }

  return <ImageComponent />;
}

export default BrandLogo;
