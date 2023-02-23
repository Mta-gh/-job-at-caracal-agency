import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

import Head from 'next/head';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import Header from '../comps/Layout/Header';
import Footer from '../comps/Layout/Footer';
import SectionWithImageAndText from '../comps/Layout/Section';
import Arrow from '../comps/Svg/Arrow';
import AnimatedBox from '../comps/Animations/test1';
import AnimatedElement from '../comps/Animations/Scrolltrigger';
import AnimTest from '../comps/Animations/test2'
import Image from 'next/image';

const Page: NextPage = () => {
	let sectionAnimLeft ={};
	let sectionAnimRight ={};
	if (typeof window !== "undefined") {
		const isMobile = window.innerWidth < 768;
		if (!isMobile) {
			sectionAnimLeft ={
				hidden: {opacity:0, x:-100},
				visible: {
					opacity:1, 
					x:0,
					transition: {
						delay: .2
					}
				}
			}
		
			sectionAnimRight ={
				hidden: {opacity: 0, x: 100},
				visible: {
					opacity:1, 
					x:0,
					transition: {
						delay: .2
					}
				}
			}
		}
	}

	return (
		<div className="py-2 overflow-x-hidden	">
			<Head>
				<title>Beherman Group - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{/* Try and make a customisable section component */}
			<motion.section id="section__vision" className="pb-14 md:pb-32" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnimRight}>
				<SectionWithImageAndText
					title="Our vision"
					blueText='Our corporate vision for the future is based on the secure foundation of
					experience and tradition.'
					standardText='Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.'
					image="/Pano2-1.jpg"
					imageFirst={true}
				/>
			</motion.section>
			
			<motion.section id="section__banner" className="md:pb-32" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnimRight}>
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
			</motion.section>

			<motion.section id="section__commitement" className="md:pb-32" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnimLeft}>
				<SectionWithImageAndText
					title="Title 1"
					blueText='In a world committed to the ecological transition, we want to make our contribution by building the mobility solutions of tomorrow.'
					standardText='The brands we are working with today, Fuso and Piaggio, are paving the way for new ways of conceiving transportation, on roads all over the world, at city entrances and
					even within urban traffic.'
					image="/blue-truck.jpg"
					imageFirst={false}
				/>
			</motion.section>

			<motion.section id="section__board" className="pt-14 pb-14 md:pt-0 md:pb-32" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionAnimLeft}>
				<Container>
					<Col className="pb-6 text-5xl md:pb-20" colStart={[2, null, 2, null, 3]} colEnd={[26, null, 24, null, 26]}>
						<h2 className="text-4xl md:text-5xl ">The Board</h2>
					</Col>
				</Container>
				<Container>
					<Col className="items-center" colStart={[1, null, 2, null, 3]} colEnd={[27, null, 26, null, 17]}>
							<Image src="/the-board.jpg" alt="image" width={1300} height={600} />
					</Col>
					<Col className="md:pl-10 xl:ml-10 xl:border-l" colStart={[2, null, 2, null, 17]} colEnd={[26, null, 24, null, 26]}>
						<div className="grid grid-cols-2 justify-between  xl:flex xl:flex-col ">
							<h5 className="uppercase font-jetbrains text-sm py-6 md:pb-12 col-span-2 xl:pt-0">Left to right</h5>
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
			</motion.section>
			<Footer />
		</div>
	);
};

export default Page;



