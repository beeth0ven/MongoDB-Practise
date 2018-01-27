
const user = {
  _id: ObjectId('UserId'),
  username: 'kbanker',
  email: 'kylebanker@gmail.com',
  first_name: 'Kyle',
  last_name: 'Banker',
  hashed_password: 'hashed_password',
  addresses: [
    {
      name: 'home',
      street: '588 5th Street',
      city: 'Brooklyn',
      states: 'NY',
      zip: 11215
    },
    {
      name: 'work',
      street: '1 E. 23rd Street',
      city: 'New York',
      state: 'NY',
      zip: 10010
    }
  ],
  payment_methods: [
    {
      name: 'VISA',
      payment_token: 'PAYMENT_TOKEN'
    }
  ]
}
