import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { href: "/about", text: "About me", hasBr: false },
    { href: "/projects", text: "Projects", hasBr: false },
    { href: "/gallery", text: "Gallery", hasBr: false },
    { href: "/blog", text: "Blog", hasBr: false },
    { href: "/impact", text: "Impact metrics", hasBr: false },
    { href: "/reports", text: "Report and Publications", hasBr: false },
    { href: "/community", text: "Community Representatives", hasBr: false },
  ];

  // Logo component to avoid repetition
  const Logo = ({ className = "", iconSize = "w-12 h-12", textSize = "text-3xl" }) => (
    <div className={`flex items-center ${className}`}>
      <div
        className={`${iconSize} bg-cover bg-no-repeat`}
        style={{ backgroundImage: "url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-04/D0AWKyUYTF.png)" }}
      />
      <div className="ml-4">
        <span className={`font-thin ${textSize} text-white`}>Precious</span>
        <span className={`font-medium ${textSize} text-white`}>-Ebere</span>
      </div>
    </div>
  );

  // Phone icon component
  const PhoneIcon = ({ color = "white", bgColor = "bg-black", size = "w-14 h-14" }) => (
    <a href="tel:+1234567890" className={`flex items-center justify-center ${size} bg-black rounded-full`}>
      <i className={`fi fi-ss-phone-flip text-${color} text-2xl pt-1`}></i>
    </a>
  );

  return (
    <div className="navbar-container w-full flex justify-between font-dmsans items-center gap-96 my-8 mx-auto">
      {/* Left logo section - always visible */}
      <div className="logo-section flex-shrink-0 bg-black rounded-full px-10 py-4 flex items-center z-10">
        <a href="/" className="flex items-center">
          <Logo />
        </a>
      </div>

      {/* Desktop menu */}
      {!isMobile && (
        <div className="menu-items flex-grow h-20 bg-red rounded-full px-10 flex items-center justify-baseline z-0">
          <nav className="flex justify-between items-center h-full w-full">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className=" text-center text-base w-fit flex text-white gap-16 hover:text-gray-200 whitespace-wrap"
              >
                {link.text.split(" ").map((word, i, arr) => (
                  <React.Fragment key={i}>
                    {word}
                    {i < arr.length - 1 && (link.hasBr ? <br /> : " ")}
                  </React.Fragment>
                ))}
              </a>
            ))}
            
            {/* Phone icon */}
            <PhoneIcon color="white" bgColor="bg-white" />
          </nav>
        </div>
      )}

      {/* Mobile layout */}
      {isMobile && (
        <div className="flex justify-between items-center w-full">
          {/* Mobile hamburger menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-btn w-12 h-12 bg-red rounded-full flex items-center justify-center ml-4 z-30"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </>
              )}
            </svg>
          </button>
          
          {/* Phone icon for mobile */}
          <PhoneIcon size="w-12 h-12" />
        </div>
      )}

      {/* Mobile menu overlay */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu fixed top-0 left-0 w-full h-screen bg-red z-50 overflow-y-auto">
          <div className="container mx-auto py-6 px-6">
            <div className="flex justify-between items-center mb-8">
              {/* Logo in mobile menu */}
              <Logo textSize="text-2xl" />
              
              {/* Close button */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="close-btn w-12 h-12 bg-black rounded-full flex items-center justify-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <nav className="mobile-nav flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-white text-xl text-nowrap py-3 border-b border-white/20 flex items-center"
                >
                  {link.text}
                </a>
              ))}
            </nav>

            <div className="mt-8">
              <a href="tel:+234 813 051 8751" className="text-white text-xl flex items-center">
                <i className="fi fi-rr-phone-call mr-2 "></i>
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;