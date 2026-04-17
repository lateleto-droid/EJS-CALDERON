import { Camera } from 'lucide-react';
import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

export default function ImagePlaceholder({ className = '', text = 'Add Your Photo Here' }: ImagePlaceholderProps) {
  return (
    <div className={`flex flex-col items-center justify-center bg-navy border-2 border-dashed border-orange p-6 text-center ${className}`}>
      <Camera className="w-12 h-12 text-white mb-2 opacity-80" />
      <span className="text-white font-bold tracking-wider text-sm uppercase">[{text}]</span>
      <span className="text-gray-400 text-xs mt-2 max-w-[200px]">Client: Replace with high-res construction photo</span>
    </div>
  );
}
