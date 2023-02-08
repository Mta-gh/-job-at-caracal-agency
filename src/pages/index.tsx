import type { NextPage } from 'next';
import Head from 'next/head';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import Header from '../comps/Layout/Header';
import Footer from '../comps/Layout/Footer';
import Arrow from '../comps/Svg/Arrow';
import AnimatedBox from '../comps/Animations/test1';
import AnimatedElement from '../comps/Animations/Scrolltrigger';

import Image from 'next/image';

const Page: NextPage = () => {
	return (
		<div className="py-2">
			<Head>
				<title>Beherman Group - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AnimatedBox />

			<Header />

			<section id="section__vision" className="pb-14 md:pb-32">
			<Container>
					<Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 2, null, 2]} colEnd={[27, null, 12, null, 12]}>
						<Image src="/Pano2-1.jpg" alt="image" width={800} height={600} />
					</Col>
					{/* large screen Line col */}
					<Col className="hidden pt-12 pb-8 md:pt-40 xl:max-w-28 xl:flex" colStart={[2, null, 14, null, 14]} colEnd={[26, null, 16, null, 16]}>
						<span className="h-0 border border-white flex w-full"></span>
					</Col>
					{/* Text col */}
					<Col className="pt-12 md:pt-4" colStart={[2, null, 14, null, 16]} colEnd={[26, null, 25, null, 25]}>
						<div className="flex flex-col">
							{/* Title */}
							<h2 className="pb-8 md:pb-10 text-4xl xl:pb-20 md:text-5xl xl:-ml-16">Our vision</h2>
							{/* Blue paragraph */}
							<span className="mb-10 h-0 border border-white flex w-28 xl:hidden"></span>
							<div className="flex flex-col xl:ml-14">
								<strong className="font-normal	text-secondaryBlue text-xl pb-10 md:text-2xl">
								Our corporate vision for the future is based on the secure foundation of
								experience and tradition.
								</strong>
								{/* standard paragraph */}
								<p className="text-textBlueGrey">
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
								</p>
							</div>
						</div>
					</Col>
				</Container>
			</section>
			<AnimatedElement />
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
					{/* large screen Line col */}
					<Col className="hidden pt-12 pb-8 md:pt-40 xl:max-w-28 xl:flex" colEnd={[26, null, null, null, 4]}>
						<span className="h-0 border border-white flex w-full"></span>
					</Col>
					{/* Text col */}
					<Col className="pt-12 md:pt-4" colStart={[2, null, 2, null, 4]} colEnd={[26, null, 14, null, 14]}>
						<div className="flex flex-col">
							{/* Title */}
							<h2 className="pb-8 md:pb-10 text-4xl xl:pb-20 md:text-5xl xl:-ml-16">Commitment</h2>
							{/* Blue paragraph */}
							<span className="mb-10 h-0 border border-white flex w-28 xl:hidden"></span>
							<div className="flex flex-col xl:ml-14">
								<strong className="font-normal	text-secondaryBlue text-xl pb-10 md:text-2xl">
									In a world committed to the ecological transition, we want to make our contribution by building the mobility solutions of tomorrow.
								</strong>
								{/* standard paragraph */}
								<p className="text-textBlueGrey">
									The brands we are working with today, Fuso and Piaggio, are paving the way for new ways of conceiving transportation, on roads all over the world, at city entrances and
									even within urban traffic.
								</p>
							</div>
						</div>
					</Col>
					<Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 16, null, 16]} colEnd={[27, null, 26, null, 26]}>
						<Image src="/blue-truck.jpg" alt="image" width={800} height={600} />
					</Col>
				</Container>
			</section>

			<section id="section__board" className="pt-14 pb-14 md:pt-0 md:pb-32">
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
			</section>
			<Footer />
		</div>
	);
};

export default Page;



