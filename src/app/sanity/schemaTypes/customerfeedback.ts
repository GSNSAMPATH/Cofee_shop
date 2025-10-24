export default {
  name: "feedback",
  title: "Customer Feedback",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: "position",
      title: "Customer Position",
      type: "string",
      description: "e.g. Regular Customer, Coffee Lover",
    },
    {
      name: "image",
      title: "Customer Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).max(5),
    },
    {
      name: "text",
      title: "Feedback Text",
      type: "text",
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
};
