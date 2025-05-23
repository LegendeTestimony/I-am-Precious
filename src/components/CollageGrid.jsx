import React from 'react';

const CollageGrid = () => {
  const items = [
    { width: 400, height: 500, rotate: 2, zIndex: 10 },
    { width: 350, height: 600, rotate: -3, zIndex: 20 },
    { width: 450, height: 400, rotate: 1, zIndex: 15 },
    { width: 300, height: 450, rotate: -2, zIndex: 25 },
    { width: 380, height: 520, rotate: 0, zIndex: 12 },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-black/10 rounded-2xl shadow-lg transition-transform hover:scale-105"
            style={{
              width: `${item.width}px`,
              height: `${item.height}px`,
              transform: `rotate(${item.rotate}deg)`,
              zIndex: item.zIndex,
              margin: 'auto',
            }}
          >
            {/* Placeholder for content, e.g., images */}
            <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Item {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollageGrid;