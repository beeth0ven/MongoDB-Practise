
const review = {
  _id: ObjectId('ReviewId'),
  product_id: ObjectId('ProductId'),
  date: new Date(2010, 5, 7),
  title: 'Amazing',
  text: 'Has a squeaky wheel, but still a darn good wheelbarrow.',
  rating: 4,
  user_id: ObjectId('UserId'),
  username: 'dgreenthumb',
  helpful_votes: 3,
  voter_ids: [
    ObjectId('UserId_0'),
    ObjectId('UserId_1'),
    ObjectId('UserId_2'),
  ]
}
