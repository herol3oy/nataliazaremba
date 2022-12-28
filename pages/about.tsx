import type { NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/legacy/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ABOUT_NATALIA_TEXTS = [
  "Based in Poland.",
  "Graduated from University of Fine Arts in Poznan.",
  "Pronouns: (she/her).",
];

const About: NextPage = () => {
  return (
    <>
      <Flex mt={32} gap={6} flexDir="column">
        {ABOUT_NATALIA_TEXTS.map((text) => (
          <Heading size="2xl" fontWeight={"normal"} key={text}>
            {text}
          </Heading>
        ))}
      </Flex>
      <Carousel
        ssr={false}
        showDots={false}
        swipeable={false}
        infinite
        autoPlay
        centerMode
        autoPlaySpeed={3000}
        responsive={responsive}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
      >
        {BADGS_FOOTER.map((badge) => (
          <Image
            key={badge.alt}
            src={badge.src}
            width={badge.width}
            height={badge.height}
            alt={badge.alt}
          />
        ))}
      </Carousel>
      <style jsx global>{`
        .carousel-container {
          margin-top: 6rem;
        }
      `}</style>
    </>
  );
};

export default About;

const BADGS_FOOTER = [
  {
    src: "/about-badges/badges_final_more_about.svg",
    width: 150,
    height: 150,
    alt: "More about me badge",
  },
  {
    src: "/about-badges/badges_final_bicycle.svg",
    width: 150,
    height: 150,
    alt: "Bicycle badge",
  },
  {
    src: "/about-badges/badges_final_mountains.svg",
    width: 150,
    height: 150,
    alt: "Bicycle badge",
  },
  {
    src: "/about-badges/badges_final_paws.svg",
    width: 150,
    height: 150,
    alt: "Bicycle badge",
  },
  {
    src: "/about-badges/badges_final_pride.svg",
    width: 150,
    height: 150,
    alt: "Pride badge",
  },
  {
    src: "/about-badges/badges_final_green_thumg.svg",
    width: 150,
    height: 150,
    alt: "Green thumb badge",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
