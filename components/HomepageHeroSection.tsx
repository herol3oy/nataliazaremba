import { Text, Flex, HStack } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";

export default function HomepageHeroSection() {
  return (
    <HStack minH={["calc(100vh - 50vh)","calc(100vh - 100px)"]}>
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
              fontSize={[22, 28, 36, 64]}
              fontWeight="black"
              lineHeight={1.2}
            >
              {text}
            </Text>
          ) : (
            <Text key={text} fontSize={[22, 28, 36, 64]}>
              {text}
            </Text>
          )
        )}
      </Flex>
      <Flex display={["none", "none", "flex", "flex"]}>
        <SimpleImageSlider
          width={775}
          height={479}
          slideDuration={1.5}
          images={BADGES}
          showBullets={false}
          showNavs={false}
          autoPlay
          style={{background: 'white'}}
        />
      </Flex>
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

const BADGES = [
  {
    url: "/design-nerd.png",
  },
  {
    url: "/i-am-a-graphic-designer.png",
  },
  {
    url: "/data-visualization-vector.png",
  },
];
