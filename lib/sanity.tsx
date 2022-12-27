import imageUrlBuilder from '@sanity/image-url'
import { PortableText as PortableTextComponent } from '@portabletext/react'
import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fw8jg0nk"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-11-16"

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: typeof document !== 'undefined',
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) =>
  builder.image(source)

export const PortableText = (props: any) =>
  <PortableTextComponent components={{}} {...props} />