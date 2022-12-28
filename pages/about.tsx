import type { NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/legacy/image";
import Carousel from "react-multi-carousel";
import { BADGS_FOOTER } from "@/lib/badgs-footer";
import { CAROUSEL_RESPONSIVE } from "@/lib/carousel-responsive";
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
        responsive={CAROUSEL_RESPONSIVE}
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