import React from "react";
import Image from 'next/image';
import Container from '../Layout/Container';
import Col from '../Layout/Col';

type sectionProps = {
  title: string,
  blueText: string,
  standardText: string,
  image: string,
  imageFirst: boolean,
};

const SectionWithImageAndText = ({ title, blueText, standardText, image, imageFirst }: sectionProps) => {
  return (
    <div>
      {imageFirst ? 
        <Container className={`content ${imageFirst ? "image-first" : ""}`}>
          <Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 2, null, 2]} colEnd={[27, null, 12, null, 12]}>
						<Image src={image} alt="image" width={800} height={600} />
					</Col>
          {/* large screen Line col */}
					<Col className="hidden pt-12 pb-8 md:pt-40 xl:max-w-28 xl:flex" colStart={[2, null, 14, null, 14]} colEnd={[26, null, 16, null, 16]}>
						<span className="h-0 border border-white flex w-full"></span>
					</Col>
					{/* Text col */}
          <Col className="pt-12 md:pt-4" colStart={[2, null, 14, null, 16]} colEnd={[26, null, 25, null, 25]}>
						<div className="flex flex-col">
							{/* Title */}
							<h2 className="pb-8 md:pb-10 text-4xl xl:pb-20 md:text-5xl xl:-ml-16">{title}</h2>
							{/* Blue paragraph */}
							<span className="mb-10 h-0 border border-white flex w-28 xl:hidden"></span>
							<div className="flex flex-col xl:ml-14">
								<strong className="font-normal	text-secondaryBlue text-xl pb-10 md:text-2xl">
                {blueText}
								</strong>
								{/* standard paragraph */}
								<p className="text-textBlueGrey">
                {standardText}
								</p>
							</div>
						</div>
					</Col>
        </Container>
    :
      <Container className={`content ${imageFirst ? "image-first" : ""}`}>
        {/* large screen Line col */}
					<Col className="hidden pt-12 pb-8 md:pt-40 xl:max-w-28 xl:flex" colEnd={[26, null, null, null, 4]}>
						<span className="h-0 border border-white flex w-full"></span>
					</Col>
          <Col className="pt-12 md:pt-4" colStart={[2, null, 2, null, 4]} colEnd={[26, null, 14, null, 14]}>
						<div className="flex flex-col">
							{/* Title */}
							<h2 className="pb-8 md:pb-10 text-4xl xl:pb-20 md:text-5xl xl:-ml-16">Commitment</h2>
							{/* Blue paragraph */}
							<span className="mb-10 h-0 border border-white flex w-28 xl:hidden"></span>
							<div className="flex flex-col xl:ml-14">
								<strong className="font-normal	text-secondaryBlue text-xl pb-10 md:text-2xl">
                  {blueText}
								</strong>
								{/* standard paragraph */}
								<p className="text-textBlueGrey">
                  {standardText}
								</p>
							</div>
						</div>
					</Col>
        <Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 16, null, 16]} colEnd={[27, null, 26, null, 26]}>
					<Image src={image} alt="image" width={800} height={600} />
				</Col>
      </Container>
      }
    </div>
  );
};



export default SectionWithImageAndText;
