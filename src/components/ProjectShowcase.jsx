import React, { useState, useEffect } from 'react';

const projects = [
  {
    header: 'Nature Photography',
    description: 'A collection of stunning landscapes captured across the globe, showcasing the beauty of untouched wilderness.',
    images: Array(15).fill().map((_, i) => `https://source.unsplash.com/random/800x600?nature,${i}`),
  },
  {
    header: 'Urban Exploration',
    description: 'Vibrant cityscapes and architectural marvels, highlighting the energy of urban life.',
    images: Array(15).fill().map((_, i) => `https://source.unsplash.com/random/800x600?city,${i}`),
  },
  {
    header: 'Abstract Art',
    description: 'Creative digital artworks blending colors and shapes to evoke emotion and imagination.',
    images: Array(15).fill().map((_, i) => `https://source.unsplash.com/random/800x600?abstract,${i}`),
  },
];

const ProjectShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => {
        if (prev + 1 >= projects[currentProject].images.length) {
          setTimeout(() => {
            setCurrentProject((prevProj) => (prevProj + 1) % projects.length);
            setCurrentImage(0);
          }, 1000); // 1-second pause before switching projects
          return prev;
        }
        return prev + 1;
      });
    }, 200); // Images change every 200ms

    return () => clearInterval(imageInterval);
  }, [currentProject, isPaused]);

  return (
    <div
      className="w-full mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@800&display=swap" rel="stylesheet" />

      {/* Image Sequence */}
      <div className="flex-1 h-[400px] lg:h-[500px] w-[1700px] relative overflow-hidden rounded-xl shadow-lg">
        <img
          key={`${currentProject}-${currentImage}`}
          src={projects[currentProject].images[currentImage]}
          alt={`Project ${currentProject + 1} Image ${currentImage + 1}`}
          className="absolute inset-0 w-full h-full object-cover image-flip"
        />
      </div>

      {/* Text Content */}
      <div key={currentProject} className="flex-1 flex flex-col justify-center lg:text-left">
        <h2 className={`text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 text-slide-in project-${currentProject}`}>
          {projects[currentProject].header}
        </h2>
        <p className={`text-lg text-gray-600 text-slide-in project-${currentProject}`}>
          {projects[currentProject].description}
        </p>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        .image-flip {
          animation: image-flip 200ms ease-in-out forwards;
        }

        .text-slide-in {
          opacity: 0;
          transform: translateX(50px);
          animation: text-slide-in 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .project-0 { animation-delay: 0ms; }
        .project-1 { animation-delay: 0ms; }
        .project-2 { animation-delay: 0ms; }

        @keyframes image-flip {
          0% {
            opacity: 0;
            transform: scale(1.1) translateY(20px);
            filter: blur(3px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes text-slide-in {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;