import React from 'react';

interface ProductHuntBadgeProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large' | 'small-plus' | 'chip-height';
}

export default function ProductHuntBadge({ 
  className = "", 
  theme = 'light',
  size = 'medium' 
}: ProductHuntBadgeProps) {
  const sizeClasses = {
    small: 'w-32 h-8',
    'small-plus': 'w-38 h-10', // 20% bigger than small
    'chip-height': 'w-44 h-11', // Match chip height
    medium: 'w-40 h-10',
    large: 'w-48 h-12'
  };

  const badgeUrl = `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=reelmatch&theme=${theme}`;

  const getWidth = () => {
    switch(size) {
      case 'small': return 128;
      case 'small-plus': return 152; // 20% bigger than 128
      case 'chip-height': return 176; // Proportional to height
      case 'medium': return 160;
      case 'large': return 192;
      default: return 160;
    }
  };

  const getHeight = () => {
    switch(size) {
      case 'small': return 32;
      case 'small-plus': return 40; // 20% bigger than 32
      case 'chip-height': return 44; // Match chip height
      case 'medium': return 40;
      case 'large': return 48;
      default: return 40;
    }
  };

  return (
    <a
      href="https://www.producthunt.com/products/reelmatch?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-reelmatch"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-transform hover:scale-105 ${className}`}
      aria-label="ReelMatch - Find movies you both love, fast! | Product Hunt"
    >
      <img
        src={badgeUrl}
        alt="ReelMatch - Find movies you both love, fast! | Product Hunt"
        className={`${sizeClasses[size]} object-contain`}
        width={getWidth()}
        height={getHeight()}
      />
    </a>
  );
} 