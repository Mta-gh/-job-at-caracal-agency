import React from 'react';
import Col from '../Layout/Col';
import Container from '../Layout/Container';
import BehermanLogo from '../Svg/Beherman';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



const MainNav = () => {

  // Check Page and underline current page in the nav
  const { pathname } = useRouter();

useEffect(() => {
  const links = document.querySelectorAll('.nav__links');
  links.forEach((link) => {
    if (link.getAttribute('href') === pathname) {
      link.classList.add('current__page');
    } else {
      link.classList.remove('current__page');
    }
  });
}, [pathname]);

  return (
				<nav>
					<Container className=" nav pt-8 items-center md:pb-16">
						<Col colEnd={[25, null, 10, null, 14]}>
							<a href="#" id="logo">
								<BehermanLogo />
							</a>
						</Col>
						<Col className="hidden md:grid" colStart={[2, null, 10, null, 14]} colEnd={[25, null, 26, null, 26]}>
							<div className="flex justify-between items-center">
								<a href="/" className='underlined__links nav__links'>Home</a>
								<a href="#" className="underlined__links nav__links">
									About
								</a>
								<a href="#" className="underlined__links nav__links">
									History
								</a>
								<a href="#" className="underlined__links nav__links">
									Philanthropy
								</a>
								<a
									href="#"
									className="flex items-center rounded-full bg-white text-black py-3 px-6 btn border font-jetbrains text-sm uppercase  tracking-widest hover:bg-transparent hover:border-secondaryBlue hover:text-white transition-all"
								>
									Contact
								</a>
							</div>
						</Col>
					</Container>
					<Container>
						<Col className="text-6xl md:text-7xl pt-14 pb-12 md:py-32" colStart={[2, null, 3, null, 3]} colEnd={[25, null, 18, null, 17]}>
							<h2 className="font-jetbrains uppercase font-bold tracking-widest	">Nearly a century driven by a passion for excellence</h2>
						</Col>
					</Container>
				</nav>
  );

};

export default MainNav;