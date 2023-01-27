import React from 'react';
import MainNav from '../Navigation/MainNav';
import MobileMenu from '../Navigation/MobileMenu';


const Header = () => {
  return (
    <header className="bg-no-repeat bg-center md:bg-hero-pattern">
				<MainNav />
				<MobileMenu />
			</header>
  );
};

export default Header;