import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CollageGrid from "../components/CollageGrid";
import hero from '../assets/images/hero.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const blurCircleRef = useRef(null);
  const heroImageRef = useRef(null);
  const missionSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const articlesRef = useRef([]);
  const dividerRefs = useRef([]);

  useEffect(() => {
    // Hero entrance animation
    gsap.fromTo(nameRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 2, 
        ease: "power3.out",
        delay: 0.5
      }
    );

    // Blur circle animation
    gsap.fromTo(blurCircleRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { 
        scale: 1, 
        rotation: 0, 
        opacity: 1,
        duration: 2.5, 
        ease: "back.out(1.7)",
        delay: 0.2
      }
    );

    // Hero image parallax
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    // Mission section animation
    gsap.fromTo(missionSectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Projects section animation
    gsap.fromTo(projectsSectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Article cards stagger animation
    gsap.fromTo(articlesRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: articlesRef.current[0],
          start: "top 85%"
        }
      }
    );

    // Divider circles animation
    dividerRefs.current.forEach((divider, index) => {
      if (divider) {
        gsap.fromTo(divider,
          { scale: 0, rotation: 180 },
          {
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: divider,
              start: "top 90%",
            }
          }
        );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Background decoration */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section - Enhanced */}
      <div ref={heroRef} className="relative mt-35">
        <div className="w-full">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black relative h-[100dvh] rounded-[3rem] flex justify-center pt-16 overflow-hidden mb-48 shadow-2xl">
            {/* Animated blur circle */}
            <div className="w-full absolute top-30 left-40 pointer-events-none">
              <div 
                ref={blurCircleRef}
                className="w-[58rem] h-[58rem] relative border-red-500 border-[120px] blur-sm left-20 rounded-full opacity-80"
              />
            </div>
            
            {/* Hero image with parallax */}
            <div className="absolute w-full h-full top-0 pointer-events-none">
              <div 
                ref={heroImageRef}
                className="relative top-14 h-[80rem] left-56 pt-20 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-04/w6VB3xE6ej.png)] bg-no-repeat"
                style={{ backgroundImage: `url(${hero})`, backgroundSize: '60%', backgroundPosition: 'top left' }}
              />
            </div>

            {/* Enhanced name with gradient */}
            <div className="absolute top-[27rem] z-10">
              <h1 
                ref={nameRef}
                className="text-[216px] font-bold text-center bg-gradient-to-br from-white/90 bg-clip-text text-transparent whitespace-nowrap tracking-tight"
              >
                Precious Ebere
              </h1>
              <div className="absolute inset-0 text-[216px] font-bold text-center text-white/20 whitespace-nowrap tracking-tight blur-sm">
                Precious Ebere
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-32 left-32 w-6 h-6 bg-red-500/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-8 h-8 bg-purple-500/30 rounded-full blur-sm animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Introduction Section - Enhanced */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="max-w-4xl">
          <p className="text-5xl font-light text-gray-700 leading-tight tracking-tight relative">
            <span className="text-6xl font-bold text-red-500 float-left mr-4 leading-none">S</span>
            he is a development practitioner, education technology professional, policy analyst, and social innovator on a mission to inspire a billion Africans to take action for sustainable development by 2050. Join the movement for positive change and explore impactful initiatives.
          </p>
          <div className="mt-12 flex items-center space-x-6">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
            <span className="text-lg font-medium text-gray-500 uppercase tracking-wider">Development Leader</span>
          </div>
        </div>
      </section>

      {/* Animated Divider */}
      <div className="flex relative justify-center items-center mb-62 mt-62">
        <div className="bg-gradient-to-r from-transparent via-red-500 to-transparent w-full h-px"></div>
        <div 
          ref={el => dividerRefs.current[0] = el}
          className="absolute"
        >
          <div className="h-20 w-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-full shadow-2xl relative">
            <div className="absolute inset-2 bg-white rounded-full"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-red-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Mission Section - Enhanced */}
      <section 
        ref={missionSectionRef}
        className="max-w-7xl mx-auto px-8 mb-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
          <div className="relative">
            <h2 className="text-[9rem] font-bold text-black/5 leading-none mb-4">
              Mission
            </h2>
            <div className="absolute top-0 left-0 text-6xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Mission
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b bg-black/40 rounded-full"></div>
            <p className="text-4xl font-light text-gray-700 leading-tight tracking-tight pl-12">
              To inspire, mobilize, and empower individuals to drive positive change in their communities while advocating for equality, transparency, and accountability.
            </p>
            <div className="mt-8 pl-12">
            </div>
          </div>
        </div>
      </section>

      {/* Animated Divider */}
      <div className="flex relative justify-center items-center mb-62 mt-62">
        <div className="bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full h-px"></div>
        <div 
          ref={el => dividerRefs.current[1] = el}
          className="absolute"
        >
          <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-red-600 rounded-full shadow-2xl relative">
            <div className="absolute inset-2 bg-white rounded-full"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-red-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Projects Section - Enhanced */}
      <section 
        ref={projectsSectionRef}
        className="max-w-7xl mx-auto px-8 mb-32"
      >
        <div className="mb-16">
          <div className="relative inline-block">
            <h2 className="text-8xl font-bold text-black/5 leading-none">
              Projects
            </h2>
            <div className="absolute top-0 left-0 text-5xl font-bold bg-gradient-to-r text-red-500 bg-clip-text">
              Projects
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl">
            Explore the innovative initiatives and impactful projects that are driving sustainable development across Africa.
          </p>
        </div>
        <CollageGrid />
      </section>

      {/* Animated Divider */}
      <div className="flex relative justify-center items-center mb-62 mt-62">
        <div className="bg-gradient-to-r from-transparent via-red-500 to-transparent w-full h-px"></div>
        <div 
          ref={el => dividerRefs.current[2] = el}
          className="absolute"
        >
          <div className="h-20 w-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-full shadow-2xl relative">
            <div className="absolute inset-2 bg-white rounded-full"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-red-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Featured Articles - Enhanced */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="mb-16">
          <div className="relative inline-block">
            <h2 className="text-8xl font-bold text-black/5 leading-none mb-4">
              Featured Articles
            </h2>
            <div className="absolute top-0 left-0 text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Featured Articles
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl">
            Insights and perspectives on African development, education technology, and social innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            {
              title: "Bridging the Skills Gap in Africa",
              excerpt: "The learning kit is also accompanied by printed take-home activity books, worksheets and assessment cards, designed for parents, caregivers...",
              image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-05/0MSpTqMz3L.png"
            },
            {
              title: "Technology for Social Change",
              excerpt: "Exploring how innovative educational technologies can transform learning outcomes for marginalized communities across the continent...",
              image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-05/0MSpTqMz3L.png"
            }
          ].map((article, index) => (
            <article
              key={index}
              ref={el => articlesRef.current[index] = el}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] h-full relative z-10">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div 
                      className="w-full h-90 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                        Read More
                      </button>
                      <div className="text-sm text-gray-400">
                        5 min read
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-purple-600 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Articles →
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 bg-red-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center py-24 px-8">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent">
            Join the Movement
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Be part of the change. Together, we can build a sustainable future for Africa, 
            one community at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Involved →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-white/60 hover:bg-white/5 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;