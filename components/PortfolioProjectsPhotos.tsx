import NextLink from "next/link";
import { Image } from "@chakra-ui/react";
import { urlFor } from "@/lib/sanity";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function PortfolioProjectsPhotos({
  portfolioProjectsPhotos,
}: any) {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry gutter="10px">
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
                  display="block"
                />
              </NextLink>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}
