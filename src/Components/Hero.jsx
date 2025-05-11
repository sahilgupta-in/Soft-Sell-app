import { useEffect } from 'react'
import img from '../images/rightimg.jpg'
import logo from '../images/logotwobg.svg'
import DarkMode from './DarkMode'





const Hero = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    const toggleMenu = () => {
      if (menu) {
        menu.classList.toggle('hidden');
      }
    };

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', toggleMenu);
    }

    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-6 mx-auto ">
        {/* Logo */}
        <a href="#">
          <img className='h-8' src={logo} alt="logo" />
        </a>

        {/* Hamburger Icon */}
        <button id="menu-toggle" className="md:hidden text-gray-600 text-2xl focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <div id="menu" className="hidden md:flex flex-col md:flex-row md:items-center space-x-3 md:space-x-8 text-gray-600 text-base font-normal absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow md:shadow-none z-50">
          <a className="hover:text-gray-900 transition" href="#">
            How Its Work
          </a>
          <a className="hover:text-gray-900 transition" href="#">
            Why Choose Us
          </a>
          <a className="hover:text-gray-900 transition" href="#">
          Testimonials
          </a>
          <a className="bg-blue-600 border text-white hover:bg-blue-700 rounded-md px-5 py-2 text-sm font-semibold transition md:ml-4" href="#">
            Get Started
          </a>
              <DarkMode/>
        </div>
  
      </nav>
  
      <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 bg-blue-50 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 pb-16 min-h-[600px]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 max-md:mb-8 text-center md:text-left">
          
          <h1 className="font-extrabold text-4xl md:text-6xl text-gray-900 mb-4 leading-tight">
          Unlock the Value of Your Unused Software Licenses
          </h1>
          <p className="text-gray-600 text-sm mb-6">
          SoftSell helps businesses sell their excess software licenses for maximum value. Get instant valuations and quick payouts without the hassle.
          </p>
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 justify-center md:justify-start">
            <a className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-blue-700 transition" href="#">
              Get a Free Valuation
            </a>
            <a className="text-sm font-normal flex items-center justify-center space-x-1 hover:underline" href="#">
              <span>
                Learn How It Works
              </span>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" src={img} alt="rightSideImage" />
        </div>
      </div>
    </>
  )
}

export default Hero
