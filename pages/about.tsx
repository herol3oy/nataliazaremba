import type { NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/legacy/image";
import { BADGS_FOOTER } from "@/lib/badgs-footer";
import Marquee from "react-fast-marquee";

const ABOUT_NATALIA_TEXTS = [
  "Based in Poland.",
  "Graduated from University of Fine Arts in Poznan.",
  "Pronouns: (she/her).",
];

const About: NextPage = () => {
  return (
    <Flex mt={32} mb={16} gap={6} flexDir="column">
      {ABOUT_NATALIA_TEXTS.map((text) => (
        <Heading size="2xl" fontWeight={"normal"} key={text}>
          {text}
        </Heading>
      ))}
      <Marquee gradientWidth={150}>
        {BADGS_FOOTER.map((badge) => (
          <Image
            key={badge.src}
            src={badge.src}
            width={badge.width}
            height={badge.height}
            alt={badge.alt}
          />
        ))}
      </Marquee>
    </Flex>
  );
};

export default About;
