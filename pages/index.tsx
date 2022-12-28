import type { NextPage } from "next";
import HomepageHeroSection from "@/components/HomepageHeroSection";
import PortfolioProjectsPhotos from "@/components/PortfolioProjectsPhotos";
import { getAllPortfolioProjects } from "@/lib/sanityApi";

const Home: NextPage = ({ portfolioItems }: any) => {
  return (
    <>
      <HomepageHeroSection />
      <PortfolioProjectsPhotos portfolioProjectsPhotos={portfolioItems} />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const portfolioItems = await getAllPortfolioProjects();
  return {
    props: {
      portfolioItems,
    },
  };
}
