export default {
  name: "menuCard",
  title: "Menu Card",
  type: "document",
  fields: [
    {
      name: "index",
      title: "Index",
      type: "number",
      description: "Order of the card (1, 2, 3, 4...)",
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading (e.g. 10+)",
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: "paragraph",
      title: "Paragraph",
      type: "text",
      description: "Optional text or description below the title.",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: "Index Order",
      name: "indexAsc",
      by: [{ field: "index", direction: "asc" }],
    },
  ],
};
