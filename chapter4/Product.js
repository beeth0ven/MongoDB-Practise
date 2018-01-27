
const product = {
  _id: ObjectId("ProductId"),
  slug: "wheelbarrow-9092",
  sku: "9092",
  name: "Extra Large Weelbarrow",
  description: "Heavy duty wheelbarrow...",
  details: {
    weight: 47,
    weight_units: "lbs",
    model_num: 4039283402,
    manufacturer: "Acme",
    color: "Green"
  },
  total_reviews: 4,
  average_reviews: 4.5,
  pricing: {
    retail: 589700,
    sale: 489700,
  },
  price_history: [
    {
      retail: 529700,
      sale: 429700,
      start: new Date(2010, 4, 1),
      end: new Date(2010, 4, 8)
    },
    {
      retail: 529700,
      sale: 529700,
      start: new Date(2010, 4, 9),
      end: new Date(2010, 4, 16)
    },
  ],
  primary_category: ObjectId("CategoryId_0"),
  category_ids: [
    ObjectId("CategoryId_0"),
    ObjectId("CategoryId_1")
  ],
  main_cat_id: ObjectId("MainCatId"),
  tags: ["tools", "gardening", "soil"],
}
