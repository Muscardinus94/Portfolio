import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const Header = () => {
  const check = useRef<HTMLDivElement>(null);

  const mouseWheelEvent = () => {
    const top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (check && check.current) {
      top >= 50
        ? check.current.classList.add('header-scroll')
        : check.current.classList.remove('header-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', mouseWheelEvent);
  }, []);

  return (
    <header className="bg-header pt-32">
      <div
        className=" py-4 px-8 fixed top-0 left-0 right-0 ease-linear duration-100 z-50"
        ref={check}
      >
        <h4 className="text-3xl text-white font-bold">Muscardinus</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-16 py-4 px-8">
        <div className="text-white" data-aos="fade-right">
          <h1 className="text-5xl sm:text-6xl font-medium mb-12">
            <Typewriter
              options={{
                strings: ['Hello', '안녕하세요', 'Bonjour', 'Namaste', 'Hola', 'Oi'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h5 className="text-2xl font-medium">Trying to be a</h5>
          <h5 className="text-2xl font-medium">["Professional", "Communicative", "Trendy"]</h5>
          <h5 className="text-2xl font-medium">Software Developer</h5>
        </div>
        <div className="text-white" data-aos="fade-left"></div>
      </div>
    </header>
  );
};

export default Header;
