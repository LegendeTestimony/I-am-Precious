import React, { useState } from 'react';

const articles = [
  {
    image: 'https://source.unsplash.com/random/800x600?education',
    header: 'Bridging the Skills Gap in Africa',
    description: 'The learning kit is accompanied by printed take-home activity books, worksheets, and assessment cards designed for parents and caregivers.',
    buttonText: 'Read',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?technology',
    header: 'Empowering Youth Through Technology',
    description: 'Innovative coding bootcamps and tech workshops equip young minds with skills for the digital future.',
    buttonText: 'Explore',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?health',
    header: 'Advancing Healthcare Access',
    description: 'Community health programs provide essential medical services and education to underserved regions.',
    buttonText: 'Learn More',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?environment',
    header: 'Sustainable Future Initiatives',
    description: 'Eco-friendly projects promote renewable energy and conservation to protect our planet.',
    buttonText: 'Discover',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?culture',
    header: 'Preserving Cultural Heritage',
    description: 'Efforts to document and celebrate traditional arts and practices strengthen community identity.',
    buttonText: 'Read',
  },
];

const ArticleCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="w-full mx-auto py-8 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />

      {/* Carousel Container */}
      <div className="flex animate-scroll" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
        {/* Render articles twice for seamless looping */}
        {[...articles, ...articles].map((article, index) => (
          <div
            key={`${article.header}-${index}`}
            className="main-container w-full h-[481px] relative  flex-shrink-0"
          >
            {/* Background Overlay */}
            <div className="w-[692.556px] h-[481px] bg-gray-200 rounded-[51.489px] opacity-10 absolute top-0 left-0" />

            {/* Image */}
            <div
              className="w-[398.904px] h-[423.112px] bg-cover bg-no-repeat rounded-[39.787px] absolute top-[30.523px] left-[28.418px] z-[1]"
              style={{ backgroundImage: `url(${article.image})` }}
            />

            {/* Header */}
            <span className="flex w-[224.186px] h-[64.203px] justify-start items-start font-['Inter'] text-[30.612px] font-semibold leading-[30.751px] text-black absolute top-[30.523px] left-[461.003px] text-left z-[2]">
              {article.header}
            </span>

            {/* Description */}
            <span className="flex w-[221.028px] h-[158.93px] justify-start items-start font-['Inter'] text-[22.421px] font-light opacity-60 leading-[22.522px] text-black absolute top-[137.88px] left-[461.003px] text-left z-[3]">
              {article.description}
            </span>

            {/* Read Button */}
            <div className="flex w-[112.619px] h-[41.048px] pt-[11.702px] pr-[35.106px] pb-[11.702px] pl-[35.106px] gap-[11.702px] justify-center items-center flex-nowrap bg-[#fd0000] rounded-[43.298px] absolute top-[412.586px] left-[461.003px] z-[4] hover:bg-[#e50000] transition-colors duration-300">
              <span className="h-[23px] shrink-0 basis-auto font-['Inter'] text-[22.421px] font-semibold leading-[22.522px] text-white relative text-left whitespace-nowrap z-[5]">
                {article.buttonText}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${articles.length * 692.556}px);
          }
        }

        .animate-scroll {
          animation: scroll ${articles.length * 5}s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default ArticleCarousel;