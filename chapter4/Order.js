
const order = {
  _id: ObjectId('OrderId'),
  user_id: ObjectId('UserId'),
  state: 'CART',
  line_items: [
    {
      _id: ObjectId('ProductId_0'),
      sku: '9092',
      name: 'Extra Large Whellbarrow',
      quantity: 1,
      pricing: {
        tetail: 5897,
        sale: 4897,
      }
    },
    {
      _id: ObjectId('ProductId_1'),
      sku: '10027',
      name: 'Rubberized Work Glove, Black',
      quantity: 2,
      pricing: {
        retail: 1499,
        sale: 1299
      }
    }
  ],
  shipping_address: {
    street: '588 5th Street',
    city: 'Brooklyn',
    state: 'NY',
    zip: 11215
  },
  sub_total: 6196
}
