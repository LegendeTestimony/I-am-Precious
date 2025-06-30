import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Blog post data (you can replace with your actual blog data)
const blogPosts = [
  {
    id: 1,
    title: "Empowering Young Women in STEM",
    excerpt: "Exploring initiatives that encourage young women to pursue careers in science, technology, engineering, and mathematics.",
    category: "Education",
    date: "June 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Development Goals: A Progress Report",
    excerpt: "An analysis of global progress toward achieving the UN's Sustainable Development Goals by 2030.",
    category: "Sustainability",
    date: "June 10, 2025",
    readTime: "12 min read",
    image: "https://source.unsplash.com/random/800x600?sustainability",
    featured: false
  },
  {
    id: 3,
    title: "The Impact of Community-Led Education Initiatives",
    excerpt: "How grassroots educational programs are transforming communities across Africa.",
    category: "Community",
    date: "June 5, 2025",
    readTime: "10 min read",
    image: "https://source.unsplash.com/random/800x600?education-africa",
    featured: false
  },
  {
    id: 4,
    title: "Digital Literacy in Rural Communities",
    excerpt: "Bridging the digital divide by bringing technology education to underserved rural areas.",
    category: "Technology",
    date: "May 28, 2025",
    readTime: "7 min read",
    image: "https://source.unsplash.com/random/800x600?digital-literacy",
    featured: false
  },
  {
    id: 5,
    title: "The Power of Mentorship in Career Development",
    excerpt: "How mentorship programs are shaping the next generation of leaders in various fields.",
    category: "Career",
    date: "May 20, 2025",
    readTime: "9 min read",
    image: "https://source.unsplash.com/random/800x600?mentorship",
    featured: false
  },
  {
    id: 6,
    title: "Climate Change Adaptation Strategies",
    excerpt: "Innovative approaches to help communities adapt to the changing climate.",
    category: "Environment",
    date: "May 15, 2025",
    readTime: "11 min read",
    image: "https://source.unsplash.com/random/800x600?climate-change",
    featured: false
  }
];

// Filter for featured and regular posts
const featuredPosts = blogPosts.filter(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

// Categories for filter
const categories = ["All", "Education", "Technology", "Sustainability", "Community", "Career", "Environment"];

function BlogPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const circleRef = useRef(null);
  const featuredRef = useRef(null);
  const postsRef = useRef([]);
  const filterRef = useRef(null);
  const searchRef = useRef(null);
  const newsletterRef = useRef(null);
  const categoriesGridRef = useRef(null);
  
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Animation setup
  useEffect(() => {
    // Hero animation - matching about page style
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

    // Search and filter animation
    gsap.fromTo([searchRef.current, filterRef.current],
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 1,
        stagger: 0.2,
        ease: "power3.out" 
      }
    );
    
    // Featured post animation
    gsap.fromTo(featuredRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1.2, 
        delay: 1.2, 
        ease: "power3.out" 
      }
    );
    
    // Regular posts animation with stagger
    postsRef.current.forEach((post, index) => {
      if (post) {
        gsap.fromTo(post,
          { opacity: 0, y: 50, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8, 
            delay: 1.4 + (index * 0.1),
            ease: "back.out(1.7)" 
          }
        );
      }
    });

    // Newsletter section animation
    gsap.fromTo(newsletterRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 80%"
        }
      }
    );

    // Categories grid animation
    gsap.fromTo(categoriesGridRef.current?.children,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: categoriesGridRef.current,
          start: "top 80%"
        }
      }
    );
    
    // Scroll animations for blog posts
    ScrollTrigger.batch(".blog-post", {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, stagger: 0.15, overwrite: true }),
      onLeave: batch => gsap.set(batch, { opacity: 0.3, y: 30, scale: 0.95, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch => gsap.set(batch, { opacity: 0.3, y: 30, scale: 0.95, overwrite: true }),
      start: "top 85%",
      end: "bottom 15%"
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Filter and search posts
  const filteredPosts = regularPosts.filter(post => {
    const matchesFilter = filter === "All" || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  return (
    <div className="relative overflow-hidden">
      {/* Background decoration - matching about page */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="main-container relative z-10 mt-32 pb-32 max-w-7xl mx-auto">
        
        {/* Hero Section - Matching About Page Style */}
        <div ref={heroRef} className="relative mb-40 mt-80">
          <h1 
            ref={titleRef}
            className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 bg-clip-text text-transparent text-center mb-16 tracking-tight"
          >
            Blog & Insights
          </h1>
          
          {/* Animated line with circle - matching about page */}
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

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            Thoughts, stories, and ideas on education, technology, sustainable development, 
            and building communities that drive positive change across Africa.
          </p>
        </div>
        
        
        {/* Featured Post - Enhanced Design */}
        {featuredPosts.length > 0 && (
          <div ref={featuredRef} className="mb-20 max-w-7xl mx-auto">
            <div className="relative overflow-hidden group rounded-3xl shadow-2xl h-[80vh]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              <img 
                src={featuredPosts[0].image} 
                alt={featuredPosts[0].title}
                className="absolute w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20 text-white">
                <div className="max-w-4xl">
                  <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-purple-600 text-white text-sm font-bold mb-6 shadow-lg">
                    FEATURED • {featuredPosts[0].category}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {featuredPosts[0].title}
                  </h2>
                  <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <span className="flex items-center gap-2 text-lg">
                      <i className="fi fi-rr-calendar"></i>
                      {featuredPosts[0].date}
                    </span>
                    <span className="flex items-center gap-2 text-lg">
                      <i className="fi fi-rr-clock"></i>
                      {featuredPosts[0].readTime}
                    </span>
                  </div>
                  <button className="px-8 py-4 rounded-2xl bg-white text-gray-800 font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Read Full Article →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Search and Filter - Enhanced Design */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 items-center justify-between">
            
            <div 
              ref={filterRef}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ${
                    filter === category 
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div 
              ref={searchRef}
              className="relative w-full lg:w-2/5"
            >
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full py-4 pl-14 pr-6 rounded-2xl bg-white border-2 border-gray-100 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fi fi-rr-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-red-500 transition-colors"></i>
              </div>
            </div>

          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Regular Posts Grid - Enhanced Design */}
        <div className="max-w-7xl mx-auto mb-20">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-16 max-w-md mx-auto">
                <i className="fi fi-rr-info-circle text-6xl text-gray-400 mb-6"></i>
                <h3 className="text-2xl font-bold mb-4 text-gray-700">No articles found</h3>
                <p className="text-gray-500 text-lg">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id}
                  ref={el => postsRef.current[index] = el}
                  className="blog-post bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:scale-105"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-purple-100 text-red-700 text-sm font-bold">
                        {post.category}
                      </span>
                      <div className="text-sm text-gray-500 font-medium">
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 line-clamp-2 text-gray-800 group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 font-medium">{post.date}</span>
                      <button className="text-red-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                        Read more 
                        <i className="fi fi-rr-arrow-right text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Newsletter Subscription - Premium Design */}
        <div 
          ref={newsletterRef}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-purple-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 rounded-full blur-2xl transform -translate-x-40 translate-y-40"></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected with My Journey</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  Subscribe to receive my latest insights on education, technology, sustainable development, 
                  and stories from the field. Join a community of change-makers working to transform Africa.
                </p>
              </div>
              <div className="lg:w-1/3 w-full">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full py-5 px-6 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-bold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Categories - Enhanced Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
              Explore by Topic
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div 
            ref={categoriesGridRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {categories.filter(cat => cat !== "All").map((category, index) => (
              <div 
                key={index}
                className="group bg-white hover:bg-gradient-to-br hover:from-red-50 hover:to-purple-50 rounded-2xl p-8 text-center cursor-pointer transition-all duration-500  hover:shadow-xl transform hover:scale-105 border-2 border-gray-100"
                onClick={() => setFilter(category)}
              >
                <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fi fi-rr-${
                    category === "Education" ? "graduation-cap" :
                    category === "Technology" ? "laptop" :
                    category === "Sustainability" ? "leaf" :
                    category === "Community" ? "users" :
                    category === "Career" ? "briefcase" :
                    "globe"
                  } text-3xl`}></i>
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;