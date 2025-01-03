import { useState } from 'react';
import { navItems } from '../../constants';

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navItems.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a">
            {item.name}
          </a>
        </li>
      ))}
      <li className="nav-li">
        <a
          href="/files/CV_CARLOSVELASCO.pdf"
          className="nav-li_a flex items-center justify-center"
          download="CV_CARLOSVELASCO"
        >
          CV
          <img
            src="/assets/arrow-up.png"
            alt="arrow up"
            className="ml-2 field-btn_arrow"
          />
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            <img src="/favicon.png" className="w-16 h-16" />
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="toggle menu"
          >
            <img
              src={!isOpen ? '/assets/menu.svg' : '/assets/close.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
