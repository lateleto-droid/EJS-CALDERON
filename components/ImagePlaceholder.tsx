import { Camera } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
  prompt?: string;
}

export default function ImagePlaceholder({ className = '', text = 'Add Your Photo Here', prompt }: ImagePlaceholderProps) {
  if (prompt) {
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=800&nologo=true`;
    
    const wrapperClass = className.includes('absolute') || className.includes('relative') || className.includes('fixed') 
      ? className 
      : `relative w-full h-full ${className}`;

    return (
      <div className={wrapperClass}>
        <Image src={imageUrl} alt={text} fill className="object-cover" unoptimized />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center bg-navy border-2 border-dashed border-orange p-6 text-center ${className}`}>
      <Camera className="w-12 h-12 text-white mb-2 opacity-80" />
      <span className="text-white font-bold tracking-wider text-sm uppercase">[{text}]</span>
      <span className="text-gray-400 text-xs mt-2 max-w-[200px]">Client: Replace with high-res construction photo</span>
    </div>
  );
}
