import React, { useEffect, useRef, useState } from 'react';
import { AnimationVariant } from '../types';

interface RevealProps {
  children: React.ReactNode | ((isVisible: boolean) => React.ReactNode);
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  variant = 'fade-up', 
  delay = 0, 
  className = "",
  threshold = 0.15 // Increased slightly to avoid flickering at edges
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on intersection status to allow re-animation
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getTransformStyle = () => {
    switch (variant) {
      case 'fade-up':
        return isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0';
      case 'fade-in':
        return isVisible ? 'opacity-100' : 'opacity-0';
      case 'slide-left':
        return isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0';
      case 'slide-right':
        return isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0';
      case 'scale-in':
        return isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0';
      case 'rotate-fade':
        return isVisible ? 'rotate-0 opacity-100' : 'rotate-2 opacity-0';
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  const transitionStyle = {
    transitionDuration: '800ms',
    transitionDelay: isVisible ? `${delay}ms` : '0ms', // No delay when hiding
    transitionProperty: 'transform, opacity, filter',
    transitionTimingFunction: 'cubic-bezier(0.17, 0.55, 0.55, 1)' 
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${getTransformStyle()}`}
      style={transitionStyle}
    >
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  );
};

export default Reveal;