import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
// import image3 from '../assets/images/image3.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const circleRef = useRef(null);
  const statsRefs = useRef([]);
  const imageRefs = useRef([]);
  const textSections = useRef([]);
  const achievementCards = useRef([]);
  const visionBoxRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1.5, 
        ease: "power3.out",
        delay: 0.3
      }
    );

    // Circle animation with rotation
    gsap.fromTo(circleRef.current,
      { scale: 0, rotation: -180 },
      { 
        scale: 1, 
        rotation: 0, 
        duration: 1.2, 
        ease: "back.out(1.7)",
        delay: 0.8
      }
    );

    // Parallax effect for images
    imageRefs.current.forEach((img, index) => {
      if (img) {
        gsap.to(img, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });

        // Image reveal animation
        gsap.fromTo(img,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Text sections animation
    textSections.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Stats counter animation
    statsRefs.current.forEach((stat, index) => {
      if (stat) {
        const number = stat.querySelector('.stat-number');
        if (number) {
          const endValue = parseInt(number.textContent.replace(/[^\d]/g, ''));
          
          gsap.fromTo(number,
            { textContent: 0 },
            {
              textContent: endValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
              }
            }
          );
        }
      }
    });

    // Achievement cards stagger animation
    gsap.fromTo(achievementCards.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: achievementCards.current[0],
          start: "top 80%"
        }
      }
    );

    // Vision box special animation
    if (visionBoxRef.current) {
      gsap.fromTo(visionBoxRef.current,
        { opacity: 0, scale: 0.8, rotationY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionBoxRef.current,
            start: "top 70%"
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="main-container relative z-10 mt-32 pb-32 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div ref={heroRef} className="relative mb-70 mt-80">
          <h1 
            ref={titleRef}
            className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 bg-clip-text text-transparent text-center mb-16 tracking-tight"
          >
            About Me
          </h1>
          
          {/* Animated line with circle */}
          <div className="flex justify-center items-center relative mb-20">
            <div className="bg-gradient-to-r from-transparent via-red-500 to-transparent w-full h-px"></div>
            <div 
              ref={circleRef}
              className="absolute flex justify-center items-center"
            >
              <div className="relative">
                <div className="h-24 w-24 border-4 bg-white border-red-500 rounded-full shadow-2xl flex justify-center items-center">
                  <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-inner"></div>
                </div>
                <div className="absolute inset-0 h-24 w-24 border-2 border-red-300 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* First Section - Enhanced */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-16 items-start mb-32">
          <div 
            ref={el => textSections.current[0] = el}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-purple-500 rounded-full"></div>
            <p className="text-2xl font-light leading-relaxed text-gray-700 pl-8 relative">
              <span className="text-4xl font-bold text-red-500 float-left mr-3 leading-none">P</span>
              recious Ebere is a renowned development practitioner and policy
              analyst with specific interest in EdTech, Democracy, Corruption, Human
              Rights, Governance & Leadership Development; where she strives to
              bridge inequality gaps in African democracy whilst advocating for
              effective interventions that provide equal access to education and
              long-term learning outcomes for marginalized Nigerian children by
              engaging critical stakeholders, encouraging youths to participate
              effectively in pushing for accountability and transparency both at the
              grassroots and National level.
            </p>
          </div>
          
          <div className="relative group">
            <div 
              ref={el => imageRefs.current[0] = el}
              className="w-full h-[600px] rounded-3xl shadow-2xl overflow-hidden relative"
              style={{ backgroundImage: `url(${image1})`, backgroundSize: '110%', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-400 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
          </div>
        </section>

        {/* Second Section - Enhanced */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-16 items-center mb-32">
          <div className="relative group order-2 lg:order-1">
            <div 
              ref={el => imageRefs.current[1] = el}
              className="w-full h-[500px] rounded-3xl shadow-2xl overflow-hidden"
              style={{ backgroundImage: `url(${image2})`, backgroundSize: '110%', backgroundPosition: 'center' }}
            >
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-red-500 rounded-2xl blur-xl opacity-30"></div>
          </div>

          <div 
            ref={el => textSections.current[1] = el}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-red-500 rounded-full"></div>
            <div className="text-xl leading-relaxed text-gray-700 pr-8 space-y-6">
              <p>
                Precious earned a <span className="font-bold text-red-600">Master's degree in Social and Public Policy</span> from
                Cardiff University in Wales, United Kingdom, and she is also a Global
                Ambassador, representing the following organizations on a global scale:
                Their World, One Young World, and Z Zürich Foundation.
              </p>
              
              <p>
                She has headed various youth-led organizations in different capacities
                and sits in leadership and advisory positions of multiple international
                organizations such as the Young African Leaders Initiative, Abuja (an
                initiative of the United States Government in Nigeria), "DO"
                (dotakeaction.org), a UNESCO Read and Earn Federation (UNESCO REF).
                Precious have over 6 years of experience working in the development
                sector with NGOs, INGOs, and Companies in development and local
                governance.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-purple-50 p-6 rounded-2xl border-l-4 border-red-500">
                <p className="font-semibold text-gray-800">
                  The Educational Impact Project won the Organization <span className="text-red-600 font-bold">AU$40,000</span> from the Australian Embassy in 2016
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics - Premium Design */}
        <section className="mb-32">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-20 w-40 h-40 bg-red-500 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent">
              Impact & Recognition
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { number: "10000", suffix: "+", label: "Lives Impacted", color: "from-red-400 to-red-600" },
                { number: "500", suffix: "+", label: "Women Empowered", color: "from-purple-400 to-purple-600" },
                { number: "6", suffix: "", label: "Years Experience", color: "from-blue-400 to-blue-600" },
                { number: "40", suffix: "K", label: "Grant Award (AU$)", color: "from-green-400 to-green-600" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  ref={el => statsRefs.current[index] = el}
                  className="text-center group cursor-pointer"
                >
                  <div className={`inline-block p-6 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <div className="text-4xl lg:text-5xl font-bold text-white">
                      <span className="stat-number">{stat.number}</span>{stat.suffix}
                    </div>
                  </div>
                  <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Story - DO Skill Up */}
        <section 
          ref={el => textSections.current[2] = el}
          className="mb-32"
        >
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
              Innovation Born from Research
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="text-xl leading-relaxed text-gray-700 space-y-8 max-w-5xl mx-auto">
            <p>
              In 2018, following a real-time survey, Precious discovered that Nigeria suffers from reducing 
              <span className="font-bold text-red-600"> 10.2 million out-of-school children</span> to a situation where 
              unemployment rate jumped from <span className="font-bold text-red-600">18.1% to 23.1%</span> between 2017 and 2018.
            </p>

            <div className="bg-gradient-to-r from-red-500 to-purple-600 p-1 rounded-3xl">
              <div className="bg-white p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">DO Skill Up Climb Up Initiative</h3>
                <p className="text-lg text-gray-700">
                  A 10-year human capacity development project designed to impact <span className="font-bold text-red-600">50,000 young people by 2030</span>, 
                  with ongoing projects in Abuja, Rivers and Taraba. This initiative has empowered over 500 women, 
                  50 creatives, and provided employment for 20 creatives.
                </p>
                <a 
                  href="https://dotakeaction.org/skill-up-climb-up/" 
                  className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement - Premium */}
        <section className="mb-32">
          <div 
            ref={visionBoxRef}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-600 via-red-500 to-purple-600 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 rounded-full blur-2xl transform -translate-x-40 translate-y-40"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">Vision Statement</h2>
                <div className="w-32 h-1 bg-white/50 mx-auto rounded-full mb-8"></div>
                <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed max-w-4xl mx-auto">
                  "Change by Africans for Africa: she envisions a Nigeria where every
                  citizen fuels Africa's sustainable development. By 2030, she aims to
                  build a dynamic community that takes action to solve community
                  challenges, spreading impact across Africa."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ALLO Innovation */}
        <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-center mb-32">
          <div 
            ref={el => textSections.current[3] = el}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
              ALLO: Award-Winning Innovation
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              While studying at Cardiff University, Precious developed <span className="font-bold text-red-600">ALLO</span>, 
              which won the Social Impact Award in the UK. This $10 inclusive-interactive audio and visual 
              instructional device contains learner-centered content for STEM subjects, preparing students 
              for examinations like WAEC and NECO.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">Social Impact Award</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">STEM Education</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Affordable Learning</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-purple-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-300 rounded-full blur-lg"></div>
              </div>
              <div className="relative z-10">
                <div className="text-6xl font-bold text-white mb-4">ALLO</div>
                <div className="text-white text-xl mb-2">Social Impact Award Winner</div>
                <div className="text-white/80 text-lg">$10 Interactive Learning Device</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements - Modern Cards */}
        <section className="mb-32">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
            Key Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Founder of DO",
                description: "Civic startup building action-oriented operating system for change",
                icon: "🚀",
                gradient: "from-red-500 to-pink-500"
              },
              {
                title: "Skill-Up-Climb-Up",
                description: "Initiative impacting 50,000 youths by 2030",
                icon: "📈",
                gradient: "from-purple-500 to-blue-500"
              },
              {
                title: "ALLO Device",
                description: "Award-winning interactive learning device for marginalized students",
                icon: "🏆",
                gradient: "from-green-500 to-teal-500"
              }
            ].map((achievement, index) => (
              <div
                key={index}
                ref={el => achievementCards.current[index] = el}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${achievement.gradient} w-0 group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Goals */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
              Future Goals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 2030 Goals */}
            <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-10 border border-red-100 shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-block bg-black text-white px-6 py-3 rounded-full text-xl font-bold">
                  2030 Vision
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "50,000 people taking Individual Action",
                  "500+ Community Development Champions",
                  "Impact 50,000 Nigerians across 500 Communities",
                  "100+ Creators & Innovators for Change"
                ].map((goal, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2050 Vision */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-block bg-white text-black px-6 py-3 rounded-full text-xl font-bold">
                    2050 Vision
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  {[
                    { number: "100", label: "GDCs to reach" },
                    { number: "$50M", label: "Funding Target" },
                    { number: "5000+", label: "Voices Speaking" },
                    { number: "500", label: "Communities" }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl font-bold text-red-400 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Building Africa's Future, One Community at a Time
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Through innovation, dedication, and unwavering commitment to social change, 
              Precious continues to shape the landscape of African development and education.
            </p>
            <div className="inline-block bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              Join the Movement →
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default AboutPage;