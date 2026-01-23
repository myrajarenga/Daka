import React from 'react';

const Logo = ({ className = "h-8 w-auto" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer Triangle / Play Shape Construction */}
            {/* Orange Segments - mimicking the segmented play button look */}
            <path
                d="M20 20 L20 80 L80 50 Z"
                className="fill-daka-orange"
                stroke="currentColor"
                strokeWidth="2"
            />
            {/* 
         Note: This is a placeholder geometric shape. 
         Ideally, we would trace the exact SVG paths from the source vector file.
         For now, this simply draws an 'Orange Play Button' style logo.
      */}
        </svg>
    );
};

export default Logo;
