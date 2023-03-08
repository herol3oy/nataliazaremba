import type { NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/legacy/image";
import { BADGS_FOOTER } from "@/lib/badgs-footer";

const ABOUT_NATALIA_TEXTS = [
  "Based in Poland.",
  "Graduated from University of Fine Arts in Poznan.",
  "Pronouns: (she/her).",
];

const About: NextPage = () => {
  return (
    <>
      <Flex mt={32} mb={16} gap={6} flexDir="column">
        {ABOUT_NATALIA_TEXTS.map((text) => (
          <Heading size="2xl" fontWeight={"normal"} key={text}>
            {text}
          </Heading>
        ))}
      </Flex>
      <Flex className="wrapper">
        <Flex className="marquee">
          <Flex className="marquee__group">
            {BADGS_FOOTER.map((badge) => (
              <Image
                key={badge.src}
                src={badge.src}
                width={badge.width}
                height={badge.height}
                alt={badge.alt}
              />
            ))}
          </Flex>
          <Flex aria-hidden="true" className="marquee__group">
            {BADGS_FOOTER.map((badge) => (
              <Image
                key={badge.src}
                src={badge.src}
                width={badge.width}
                height={badge.height}
                alt={badge.alt}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>

      <style jsx global>{`
        :root {
          --size: clamp(10rem, 1rem + 40vmin, 30rem);
          --gap: calc(var(--size) / 14);
          --duration: 60s;
          --scroll-start: 0;
          --scroll-end: calc(-100% - var(--gap));
        }

        .marquee {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: var(--gap);
        }

        .marquee__group {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: var(--gap);
          min-width: 100%;
          animation: scroll-x var(--duration) linear infinite;
        }

        .marquee svg {
          display: grid;
          place-items: center;
          width: var(--size);
          fill: var(--color-text);
          aspect-ratio: 16/9;
          padding: calc(var(--size) / 10);
          border-radius: 0.5rem;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--gap);
          margin: auto;
          max-width: 100vw;
        }

        @keyframes scroll-x {
          from {
            transform: translateX(var(--scroll-start));
          }
          to {
            transform: translateX(var(--scroll-end));
          }
        }
      `}</style>
    </>
  );
};

export default About;
