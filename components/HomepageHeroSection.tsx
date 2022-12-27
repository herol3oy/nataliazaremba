import { Text, Image, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";

export default function HomepageHeroSection() {
  const [imageIndex, imageIndexSet] = useState(0);

  const nextImage = () =>
    imageIndex === BADGS.length - 1
      ? imageIndexSet(0)
      : imageIndexSet(imageIndex + 1);

  return (
    <HStack minH="calc(100vh - 100px)">
      <Flex
        width={["100%", "100%", "75%", "70%"]}
        justifyContent="center"
        flexDir="column"
        mt={[8, 0]}
        whiteSpace="nowrap"
      >
        {HERO_PAGE_TEXTS.map(({ text }, i) =>
          i === 0 ? (
            <Text
              key={text}
              fontSize={[32, 42, 52, 64]}
              fontWeight="black"
              lineHeight={1.2}
            >
              {text}
            </Text>
          ) : (
            <Text key={text} fontSize={[32, 42, 52, 64]}>
              {text}
            </Text>
          )
        )}
      </Flex>
      <Image
        onClick={nextImage}
        display={["none", "none", "flex", "flex"]}
        cursor={"pointer"}
        key={BADGS[imageIndex].alt}
        src={BADGS[imageIndex].src}
        width={BADGS[imageIndex].width}
        height={BADGS[imageIndex].height}
        alt={BADGS[imageIndex].alt}
      />
    </HStack>
  );
}

const HERO_PAGE_TEXTS = [
  {
    text: "Hello!",
  },
  {
    text: "My name is Natalia.",
  },
  {
    text: "This is my portfolio.",
  },
];

const BADGS = [
  {
    src: "/design-nerd.svg",
    width: 500,
    height: 500,
    alt: "Brush and pen badge",
  },
  {
    src: "/i-am-a-graphic-designer.svg",
    width: 500,
    height: 500,
    alt: "Design nerd",
    className: "spin",
  },
  {
    src: "/data-visualization-vector.svg",
    width: 500,
    height: 500,
    alt: "Logo maker",
  },
];
