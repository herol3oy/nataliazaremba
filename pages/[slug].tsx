import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { Text, SimpleGrid, Flex, Box, Tag } from "@chakra-ui/react";
import { urlFor, PortableText } from "@/lib/sanity";
import { getPortfolioProject, getPortfolioProjectSlug } from "@/lib/sanityApi";
import { Data } from "@/models/data";
import { PortfolioItemPage } from "@/models/portfolio-item-page";

export default function PortfolioItem({ data }: { data: Data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Box width="100%">
      <Flex flexDir="column" paddingY="24">
        <PortfolioProjectDescriptions
          portfolioProjectDescription={data?.portfolioItemPage}
        />
      </Flex>
      <SimpleGrid columns={[1, 2]} spacing={3}>
        <PortfolioProjectPhotos
          portfolioProjectPhotos={data?.portfolioItemPage}
        />
      </SimpleGrid>
    </Box>
  );
}

const PortfolioProjectDescriptions = ({
  portfolioProjectDescription,
}: {
  portfolioProjectDescription: PortfolioItemPage;
}) => {
  return (
    <>
      <Text
        borderBottomColor="gray.400"
        fontSize={[22, 28, 36, 68]}
        fontWeight="black"
      >
        {portfolioProjectDescription?.title}
      </Text>
      <Text
        as="article"
        borderBottomColor="gray.400"
        fontSize={[18, 22, 36, 48]}
        fontWeight="normal"
        width={["100%", "85%", "65%", "100%"]}
      >
        <PortableText blocks={portfolioProjectDescription?.description} />
      </Text>
      <Flex marginY={3} gap={4} flexWrap="wrap">
        {portfolioProjectDescription?.category.map((category: string) => (
          <Tag
            size="lg"
            key={category}
            variant="solid"
            backgroundColor="var(--chakra-colors-yellow-400)"
            color="gray.700"
          >
            {category}
          </Tag>
        ))}
      </Flex>
    </>
  );
};

const PortfolioProjectPhotos = ({
  portfolioProjectPhotos,
}: {
  portfolioProjectPhotos: PortfolioItemPage;
}) => {
  return (
    <>
      {portfolioProjectPhotos?.images?.map((image: any) => (
        <Image
          key={image?._key}
          src={urlFor(image)?.url() as string}
          alt="Natalia Zaremba Portfolio Project"
          width={800}
          height={600}
          quality={100}
          layout="responsive"
          objectFit="cover"
        />
      ))}
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getPortfolioProjectSlug();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const portfolioItemPage = await getPortfolioProject(slug);
  return {
    props: {
      data: {
        portfolioItemPage,
      },
    },
  };
}
