import React from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';

const Header = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <header className="py-4 px-8 bg-header">
      <div className="mb-32">
        <h4 className="text-3xl text-white font-bold">Muscardinus</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-16">
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
        <div className="text-white" data-aos="fade-left">
          1
        </div>
      </div>
    </header>
  );
};

export default Header;
