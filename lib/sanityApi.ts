import { sanityClient } from "@/lib/sanity";

const portfolioProjectsQuery = `
    _id,
    title,
    slug,
    images
  `;

const portfolioItemQuery = `
    _id,
    slug,
    title,
    description,
    images,
    category
  `;

const portfolioProjectSlug = `
    "params": {
    "slug": slug.current
    }
  `;

export async function getAllPortfolioProjects() {
  return await sanityClient.fetch(`*[_type == "portfolioItem"]{
          ${portfolioProjectsQuery}
      }`);
}

export async function getPortfolioProjectSlug() {
  return await sanityClient.fetch(`*[_type == "portfolioItem" && defined(slug.current)]{
      ${portfolioProjectSlug}
      }`);
}

export async function getPortfolioWorks() {
  return await sanityClient.fetch(
    `*[_type == "portfolioItem" {
        ${portfolioItemQuery}
    }`
  );
}

export async function getPortfolioProject(slug: string) {
  return await sanityClient.fetch(
    `*[_type == "portfolioItem" && slug.current == $slug][0]{
        ${portfolioItemQuery}
    }`,
    { slug }
  );
}
