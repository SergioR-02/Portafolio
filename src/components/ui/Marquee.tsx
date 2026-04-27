import React from 'react';

type MarqueeProps = {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  gap?: number;
  className?: string;
};

const Marquee: React.FC<MarqueeProps> = ({ children, duration = 30, reverse = false, gap = 12, className = '' }) => {
  const items = React.Children.toArray(children);

  if (items.length === 0) {
    return null;
  }

  const repeatedItems = [...items, ...items];

  return (
    <div className={`marquee ${className}`}>
      <div
        className="marquee-track"
        style={{
          gap: `${gap}px`,
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {repeatedItems.map((item, index) => (
          <div key={`marquee-item-${index}`} className="marquee-item" aria-hidden={index >= items.length}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;