import React from "react";
import Image from 'next/image';
import Container from '../Layout/Container';
import Col from '../Layout/Col';

type sectionProps = {
  title: string,
  text: string,
  image: string,
  imageFirst: boolean,
};

const SectionWithImageAndText = ({ title, text, image, imageFirst }: sectionProps) => {
  return (
    <div>
      {imageFirst ? 
        <Container className={`content ${imageFirst ? "image-first" : ""}`}>
          <Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 2, null, 2]} colEnd={[27, null, 12, null, 12]}>
						<Image src="/Pano2-1.jpg" alt="image" width={800} height={600} />
					</Col>
          <Col className="text">
            <h2>{title}</h2>
            <p>{text}</p>
          </Col>
        </Container>
    :
      <Container className={`content ${imageFirst ? "image-first" : ""}`}>
        <Col className="text">
          <h2>{title}</h2>
          <p>{text}</p>
        </Col>
        <Col className="row-start-1 md:row-auto md:pt-36" colStart={[1, null, 16, null, 16]} colEnd={[27, null, 26, null, 26]}>
					<Image src="/blue-truck.jpg" alt="image" width={800} height={600} />
				</Col>
      </Container>
      }
    </div>
  );
};



export default SectionWithImageAndText;
