import React from 'react';
import Col from '../Layout/Col';
import Container from '../Layout/Container';
import Arrow from '../Svg/Arrow';
import Phone from '../Svg/Phone';
import Fax from '../Svg/Fax';
import Email from '../Svg/Email';
import BehermanLogo from '../Svg/Beherman';
import CaracalLogo from '../Svg/CaracalLogo';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-tertiaryBlue pb-9">
      <Container className="py-8 md:py-16">
					<Col className="justify-start" colEnd={[26, null, 14, null, 14]}>
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

					<Col className="hidden md:grid" colStart={[2, null, 14, null, 14]} colEnd={[26, null, 18, null, 20]}>
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
					<Col className="tracking-widest pt-14 md:pt-0" colStart={[2, null, 18, null, 20]} colEnd={[26, null, 26, null, 26]}>
						<p className='mb-7'>INDUSTRIEWEG, 3 2880 BORNEM BELGIUM</p>
						<div className="flex flex-col text-sm">
							<span className='flex items-center mb-3'>
								<Phone />
								<a href="tel:+">+32 (0)3 890 91 11</a>
							</span>
							<span className='flex items-center mb-3'>
								<Fax />
								<p>+32 (0)3 890 91 18</p>
							</span>
							<span className="flex items-center mb-3">
								<Email />
								<a href="mailto:jacques.beherman@beherman.com">jacques.beherman@beherman.com</a>
							</span>
						</div>
					</Col>
				</Container>
				<Container>
					<Col className="" colEnd={[26, null, 26, null, 8]}>
						<img src="/logo-beherman-corpo.png" alt="Beherman log" />
					</Col>
					<Col className="text-xs" colStart={[2, null, 2, null, 8]} colEnd={[26, null, 26, null, 26]}>
						<div className="flex flex-col justify-between xl:justify-end gap-4 xl:flex-row">
							<div className="flex py-3 justify-between border-b border-textBlueGrey xl:border-0 xl:py-0 xl:gap-4">
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
  );
};

export default Footer;