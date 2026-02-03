
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'icon' | 'full';
}

const Logo: React.FC<LogoProps> = ({ size = 40, className = "", variant = 'icon' }) => {
  // Icon only ID
  const iconId = "1yJ605VtuFwciqvj92qlS_Vg5MTyjm5vv";
  // Full Branding (Logo + Text) ID
  const fullId = "14UCe-pGmhW6ASzL5zG8wNyCRJtM0l2Wz";
  
  const fileId = variant === 'full' ? fullId : iconId;
  const src = `https://drive.google.com/uc?export=view&id=${fileId}`;
  
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ height: size }}>
      <img 
        src={src} 
        alt="AIMBOT" 
        className="h-full w-auto object-contain"
        style={{ pointerEvents: 'none' }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('lh3.googleusercontent.com')) {
            target.src = `https://lh3.googleusercontent.com/u/0/d/${fileId}`;
          }
        }}
      />
    </div>
  );
};

export default Logo;
