
const category = {
  _id: ObjectId('CategoryId_0'),
  slug: 'gardening-tools',
  name: 'Gardening-Tools',
  description: 'Gardening gadgets galors!',
  parent_id: ObjectId('CategoryId_10'),
  ancestors: [
    {
      _id: ObjectId('CategoryId_11')
      slug: 'home',
      name: 'Home',
    },
    {
      _id: ObjectId('CategoryId_10'),
      slug: 'outdoors',
      name: 'Outdoors',
    }
  ]
}
