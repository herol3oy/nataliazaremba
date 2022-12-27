import NextLink from "next/link";
import { Image, SimpleGrid } from "@chakra-ui/react";
import { urlFor } from "@/lib/sanity";

export default function PortfolioProjectsPhotos({
  portfolioProjectsPhotos,
}: any) {
  return (
    <SimpleGrid spacing={3}>
      {portfolioProjectsPhotos.length &&
        portfolioProjectsPhotos.map((portfolioItem: any) => (
          <NextLink
            key={portfolioItem?._id}
            href={`/${portfolioItem?.slug?.current}`}
          >
            <Image
              src={urlFor(portfolioItem?.images[0])?.url() as string}
              alt={`Natalia Zaremba Portfolio Project - ${portfolioItem?.title}`}
              width="100%"
              height="30rem"
              display="block"
              objectFit="cover"
            />
          </NextLink>
        ))}
    </SimpleGrid>
  );
}
