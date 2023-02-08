import React from 'react';
import Col from '../Layout/Col';
import Container from '../Layout/Container';
import BehermanLogo from '../Svg/Beherman';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';



const MainNav = () => {

  // Check Page and underline current page in the nav
  const { pathname } = useRouter();
	
	const divVariant2 ={
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: .1,
        duration: .3,
      }
    }
  };

	const fromLeftAnim ={
    hidden: { 
			opacity: 0,
			x: -100
		},
		visible: {
      opacity: 1,
			x: 0,
      transition: {
        duration: .5,
      }
    }
	}

	const item ={
	  hidden: {
	    opacity: 0,
	    y: -100
	  },
	  visible: {
	    opacity: 1,
	    y: 0,
	  }
	}
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
							<motion.a href="#" id="logo" initial="hidden" animate="visible" variants={fromLeftAnim}>
								<BehermanLogo />
							</motion.a>
						</Col>
						<Col className="hidden md:grid" colStart={[2, null, 10, null, 14]} colEnd={[25, null, 26, null, 26]}>
							<motion.div initial="hidden" animate="visible" variants={divVariant2} className="flex justify-between items-center">
								<motion.a href="/" className='underlined__links nav__links' variants={item}>
									Home
									</motion.a>
								<motion.a href="#" className="underlined__links nav__links" variants={item}>
									About
								</motion.a>
								<motion.a href="#" className="underlined__links nav__links" variants={item}>
									History
								</motion.a>
								<motion.a href="#" className="underlined__links nav__links" variants={item}>
									Philanthropy
								</motion.a>
								<motion.a
									href="#"
									className="flex items-center rounded-full bg-white text-black py-3 px-6 btn border font-jetbrains text-sm uppercase  tracking-widest hover:bg-transparent hover:border-secondaryBlue hover:text-white transition-all" variants={item}
								>
									Contact
								</motion.a>
							</motion.div>
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