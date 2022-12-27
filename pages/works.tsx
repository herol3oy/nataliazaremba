import { getAllPortfolioProjects } from "@/lib/sanityApi";
import { NextPage } from "next";
import PortfolioProjectsPhotos from "@/components/PortfolioProjectsPhotos";
import { Text } from "@chakra-ui/react";

const Works: NextPage = ({ portfolioItems }: any) => {
  return (
    <>
      <Text
        textAlign={"center"}
        fontSize={[32, 42, 52, 64]}
        fontWeight="black"
        mb={8}
      >
        WORKS
      </Text>
      <PortfolioProjectsPhotos portfolioProjectsPhotos={portfolioItems} />
    </>
  );
};

export default Works;

export async function getStaticProps() {
  const portfolioItems = await getAllPortfolioProjects();
  return {
    props: {
      portfolioItems,
    },
  };
}
