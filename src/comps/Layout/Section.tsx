import React from "react";
import Image from 'next/image';

type sectionProps = {
  title: string,
  text: string,
  image: string,
  imageFirst: boolean,
};

const SectionWithImageAndText = ({ title, text, image, imageFirst }: sectionProps) => {
  return (
    <div className="section">
      <div className={`content ${imageFirst ? "image-first" : ""}`}>
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="image">
          <Image src={image} alt=""  width={800} height={600} />
        </div>
      </div>
    </div>
  );
};



export default SectionWithImageAndText;
