export default {
    name: "portfolioItem",
    title: "Portfolio",
    type: "document",
    fields: [
      {
        name: "title",
        type: "string",
      },
      {
        name: "category",
        title: "Category",
        type: "array",
        of: [
          {
            type: "string",
          },
        ],
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: (doc) => doc.title.split(" ").join("-").toLowerCase(),
        },
      },
      {
        name: "description",
        title: "Description",
        type: "array",
        of: [
          {
            type: "block",
            styles: [{ title: "Normal", value: "normal" }],
          },
        ],
      },
      {
        name: "images",
        title: "Portfolio Images",
        type: "array",
        of: [
          {
            title: "Portfolio Images",
            name: "portfolioImage",
            type: "image",
          },
        ],
      },
    ],
  };
  