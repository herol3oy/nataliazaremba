import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fw8jg0nk",
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
