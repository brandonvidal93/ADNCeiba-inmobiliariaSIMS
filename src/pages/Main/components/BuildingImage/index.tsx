import React from 'react';

export interface BuildImageProps {
  cover: string | undefined;
  className?: string;
}

export const BuildImage: React.FC<BuildImageProps> = ({ cover, className }) => {
  if (!cover) {
    return null;
  }
  return <img src={`${cover}`} alt="Build cover" className={className} />;
};
