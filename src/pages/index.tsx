import type { NextPage } from 'next';
import Head from 'next/head';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import Arrow from '../comps/Svg/Arrow';
import BehermanLogo from '../comps/Svg/Beherman';
import CaracalLogo from '../comps/Svg/CaracalLogo';

const Page: NextPage = () => {
	return (
		<div className="py-2">
			<Head>
				<title>Beherman Group - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="bg-no-repeat bg-center md:bg-hero-pattern">
				<Container className=" nav pt-8 items-center md:pb-16">
					<Col colEnd={[25, null, 14, null, 14]}>
						<a href="#" id="logo">
							<BehermanLogo />
						</a>
					</Col>
					<Col className="hidden md:grid" colStart={[2, null, 14, null, 14]} colEnd={[25, null, 26, null, 26]}>
						<div className="flex justify-between items-center">
							<a href="#" className='underlined__links'>Home</a>
							<a href="#" className="underlined__links">
								About
							</a>
							<a href="#" className="underlined__links">
								History
							</a>
							<a href="#" className="underlined__links">
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
				{/*<MobileMenu />*/}
			</header>

			<section id="section__vision" className="pb-14 md:pb-32">
				<Container>
					<Col className="md:pt-32" colStart={[1, null, 2, null, 2]} colEnd={[27, null, 12, null, 12]}>
						{/*change to next image comonent*/}
						<img src="/Pano2-1.jpg" alt="Beherman Buiding" className="w-full" />
					</Col>
					<Col className="pt-12 pb-8 md:pt-36" colStart={[2, null, 18, null, 13]} colEnd={[26, null, 15, null, 15]}>
						<span className="w-28 h-0 border border-white		"></span>
					</Col>
					<Col className="" colStart={[2, null, 16, null, 16]} colEnd={[26, null, 24, null, 26]}>
						<div className="flex flex-col">
							<h2 className="text-4xl pb-6 md:text-5xl md:pb-20">Our Vision</h2>

							<strong className="font-normal	text-secondaryBlue text-xl pb-10 md:text-2xl">
								Our corporate vision for the future is based on the secure foundation of experience and tradition.
							</strong>
							<p className="text-textBlueGrey">
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools
								and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
							</p>
						</div>
					</Col>
				</Container>
			</section>

			<section id="section__banner" className="md:pb-32">
				<Container>
					<Col className="bg-secondaryBlue p-10 md:py-16" colStart={[1, null, 3, null, 3]} colEnd={[27, null, 27, null, 27]}>
						<Container>
							<Col colEnd={[24, null, 24, null, 20]}>
								<div className="flex flex-col justify-between items-start md:flex-row md:items-center md:pr-10">
									<h3 className="text-4xl border-l border-tertiaryBlue mb-10 px-11 md:max-w-xl md:mb-0">
										Are you looking for a reference partner to develop your mobility activities?
									</h3>
									<a
										href="#"
										className="flex items-center rounded-full bg-black text-white py-6 px-10 btn border border-secondaryBlue font-jetbrains text-sm uppercase  tracking-widest hover:bg-white hover:border-white hover:text-black transition-all whitespace-nowrap"
									>
										<span className="mr-4">Contact us</span>
										<Arrow />
									</a>
								</div>
							</Col>
						</Container>
					</Col>
				</Container>
			</section>

			<section id="section__commitement" className="md:pb-32">
				<Container>
					<Col className="pt-12 pb-8 md:pt-40" colEnd={[26, null, 4, null, 4]}>
						<span className="w-28 h-0 border border-white		"></span>
					</Col>
					<Col className="pt-4" colStart={[2, null, 5, null, 5]} colEnd={[26, null, 14, null, 14]}>
						<div className="flex flex-col">
							<h2 className="pb-6 text-4xl	md:pb-20 md:text-5xl md:-ml-16">Commitment</h2>

							<strong className="font-normal	text-secondaryBlue text-xl pb-10 md:text-2xl">
								In a world committed to the ecological transition, we want to make our contribution by building the mobility solutions of tomorrow.
							</strong>
							<p className="text-textBlueGrey">
								The brands we are working with today, Fuso and Piaggio, are paving the way for new ways of conceiving transportation, on roads all over the world, at city entrances and
								even within urban traffic.
							</p>
						</div>
					</Col>
					<Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 16, null, 16]} colEnd={[27, null, 26, null, 26]}>
						<img src="/blue-truck.jpg" alt="A Beherman blue truck" className="w-full" />
					</Col>
				</Container>
			</section>

			<section id="section__board" className="pt-14 pb-14 md:pt-0 md:pb-32">
				<Container>
					<Col className="pb-6 text-5xl md:pb-20" colStart={[2, null, 3, null, 3]} colEnd={[26, null, 24, null, 26]}>
						<h2 className="text-4xl md:text-5xl ">The Board</h2>
					</Col>
				</Container>
				<Container>
					<Col className="" colStart={[1, null, 3, null, 3]} colEnd={[27, null, 17, null, 17]}>
						<img src="/the-board.jpg" alt="The Beherman Board" className="w-full" />
					</Col>
					<Col className="md:px-24" colStart={[2, null, 18, null, 17]} colEnd={[26, null, 24, null, 26]}>
						<div className="grid grid-cols-2 justify-between  md:flex md:flex-col ">
							<h5 className="uppercase font-jetbrains text-sm py-6 md:pb-12 col-span-2 md:pt-0">Left to right</h5>
							<div className="flex flex-col pb-8">
								<p>Paul Borghgraef</p>
								<small>Director</small>
							</div>
							<div className="flex flex-col pb-8">
								<p>Christian Beherman</p>
								<small>President</small>
							</div>
							<div className="flex flex-col pb-8">
								<p>Jacques P. Beherman</p>
								<small>Managing director</small>
							</div>
							<div className="flex flex-col pb-8">
								<p>Olivier Beherman</p>
								<small>Director</small>
							</div>
							<div className="flex flex-col">
								<p>Etienne Rosseeuw</p>
								<small>Director</small>
							</div>
						</div>
					</Col>
				</Container>
			</section>

			<footer className="bg-tertiaryBlue pb-9">
				<Container className="py-8 md:py-16">
					<Col className="justify-start" colEnd={[26, null, 18, null, 14]}>
						<div className="flex flex-col items-start">
							<h4 className="text-2xl pb-9">
								Want to know more?
								<br />
								Want to meet us?
								<br />
								Be part of the adventure?
							</h4>
							<a
								href="#"
								className="flex items-center rounded-full bg-transparent text-white py-3 px-6 btn border border-secondaryBlue font-jetbrains text-sm uppercase  tracking-widest hover:bg-white hover:border-white hover:text-black transition-all whitespace-nowrap"
							>
								<span className="mr-4">Contact us</span>
								<Arrow />
							</a>
						</div>
					</Col>

					<Col className="hidden md:grid" colStart={[2, null, 18, null, 14]} colEnd={[26, null, 24, null, 20]}>
						<a href="#" className="footer__links ">
							Home
						</a>
						<a href="#" className="footer__links ">
							About
						</a>
						<a href="#" className="footer__links ">
							History
						</a>
						<a href="#" className="footer__links ">
							Contact
						</a>
					</Col>
					<Col className="tracking-widest pt-14 md:pt-0" colStart={[2, null, 18, null, 20]} colEnd={[26, null, 18, null, 26]}>
						<p>INDUSTRIEWEG, 3 2880 BORNEM BELGIUM</p>
						<div className="flex flex-col text-sm">
							<a href="tel:+">+32 (0)3 890 91 11</a>
							<p>+32 (0)3 890 91 18</p>
							<a href="mailto:jacques.beherman@beherman.com">jacques.beherman@beherman.com</a>
						</div>
					</Col>
				</Container>
				<Container>
					<Col className="" colEnd={[26, null, 18, null, 8]}>
						<img src="/logo-beherman-corpo.png" alt="Beherman log" />
					</Col>
					<Col className="text-xs" colStart={[2, null, 18, null, 8]} colEnd={[26, null, 24, null, 26]}>
						<div className="flex flex-col justify-between md:justify-end gap-4 md:flex-row">
							<div className="flex py-3 justify-between border-b border-textBlueGrey md:border-0 md:py-0 md:gap-4">
								<a href="#" className="text-textBlueGrey">
									Cookie settings
								</a>
								<a href="#" className="text-textBlueGrey">
									Terms & conditions
								</a>
								<a href="#" className="text-textBlueGrey">
									Privacy policy
								</a>
							</div>
							<div className="flex justify-between md:gap-4 ">
								<p className="text-textBlueGrey">2022 Beherman Group. All rights reserved</p>
								<a href="https://www.caracal.agency/en">
									<CaracalLogo />
								</a>
							</div>
						</div>
					</Col>
				</Container>
			</footer>
		</div>
	);
};

export default Page;
