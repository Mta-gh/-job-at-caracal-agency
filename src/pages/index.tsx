import type { NextPage } from 'next';
import Head from 'next/head';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import Header from '../comps/Layout/Header';
import Footer from '../comps/Layout/Footer';
import Arrow from '../comps/Svg/Arrow';
import Image from 'next/image';

const Page: NextPage = () => {
	return (
		<div className="py-2">
			<Head>
				<title>Beherman Group - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />

			<section id="section__vision" className="pb-14 md:pb-32">
				<Container>
					<Col className="md:pt-32" colStart={[1, null, 2, null, 2]} colEnd={[27, null, 12, null, 12]}>
						{/*change to next image comonent*/}
						<Image src="/Pano2-1.jpg" alt="image" width={800} height={600} />
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
						<Image src="/blue-truck.jpg" alt="image" width={800} height={600} />
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
							<Image src="/the-board.jpg" alt="image" width={800} height={600} />
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
			<Footer />
		</div>
	);
};

export default Page;



