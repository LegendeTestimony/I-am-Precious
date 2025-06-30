import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CollageGrid = () => {
  const gridRef = useRef(null);
  const itemRefs = useRef([]);

  const projects = [
    {
      title: "DO Skill Up Climb Up",
      description: "10-year human capacity development project",
      category: "Education",
      impact: "50,000 Youth",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      gradient: "from-red-500 to-pink-500",
      size: "large"
    },
    {
      title: "ALLO Learning Device",
      description: "Interactive audio-visual learning kit",
      category: "EdTech",
      impact: "Award Winner",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop",
      gradient: "from-purple-500 to-blue-500",
      size: "medium"
    },
    {
      title: "Educational Impact Project",
      description: "Quality education in schools initiative",
      category: "SDG 4",
      impact: "AU$40,000 Grant",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      gradient: "from-green-500 to-teal-500",
      size: "medium"
    },
    {
      title: "Smart Agriculture",
      description: "Computer skills for farmers' children",
      category: "Agriculture",
      impact: "30+ Children",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      gradient: "from-yellow-500 to-orange-500",
      size: "small"
    },
    {
      title: "Commonwealth Students Association",
      description: "First female Nigerian coordinator",
      category: "Leadership",
      impact: "UK Network",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
      gradient: "from-indigo-500 to-purple-500",
      size: "medium"
    },
    {
      title: "COVID-19 Response",
      description: "600+ Grassroot Development Champions",
      category: "Crisis Response",
      impact: "5,000 Families",
      image: "https://images.unsplash.com/photo-1584432743501-7d5c27a39189?w=600&h=400&fit=crop",
      gradient: "from-red-500 to-purple-500",
      size: "large"
    }
  ];

  const getGridClasses = (size, index) => {
    const baseClasses = "group cursor-pointer relative overflow-hidden rounded-3xl shadow-xl";
    
    switch (size) {
      case 'large':
        return `${baseClasses} col-span-2 row-span-2`;
      case 'medium':
        return `${baseClasses} col-span-1 row-span-2`;
      case 'small':
        return `${baseClasses} col-span-1 row-span-1`;
      default:
        return `${baseClasses} col-span-1 row-span-1`;
    }
  };

  const getHeightClass = (size) => {
    switch (size) {
      case 'large':
        return 'h-96 lg:h-[500px]';
      case 'medium':
        return 'h-80 lg:h-96';
      case 'small':
        return 'h-64';
      default:
        return 'h-80';
    }
  };

  useEffect(() => {
    // Stagger animation for grid items
    gsap.fromTo(itemRefs.current,
      { 
        opacity: 0, 
        y: 60, 
        scale: 0.9,
        rotation: (index) => (Math.random() - 0.5) * 10
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: {
          amount: 1.2,
          from: "random"
        },
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations
    itemRefs.current.forEach((item, index) => {
      if (item) {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(item, {
          scale: 1.05,
          rotation: (Math.random() - 0.5) * 3,
          duration: 0.3,
          ease: "power2.out"
        });

        item.addEventListener('mouseenter', () => tl.play());
        item.addEventListener('mouseleave', () => tl.reverse());
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-min relative z-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => itemRefs.current[index] = el}
            className={`${getGridClasses(project.size, index)} ${getHeightClass(project.size)}`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
              {/* Top Section */}
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>
              </div>
              
              {/* Bottom Section */}
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm lg:text-base mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
                
                {/* Impact Badge */}
                <div className="flex items-center justify-between">
                  <span className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {project.impact}
                  </span>
                  
                  {/* Arrow Icon */}
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform translate-x-4 group-hover:translate-x-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-3xl transition-colors duration-300" />
            
            {/* Floating Accent */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300" />
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-16">
        <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <span className="relative z-10">View All Projects</span>
          <svg className="relative z-10 w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { number: "6", label: "Major Projects", suffix: "+" },
          { number: "50K", label: "Lives Impacted", suffix: "" },
          { number: "40K", label: "Grant Funding", suffix: " AU$" },
          { number: "600", label: "Champions Led", suffix: "+" }
        ].map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="relative">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
              
              {/* Animated underline */}
              <div className="mx-auto mt-2 h-1 w-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-full group-hover:w-12 transition-all duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollageGrid;