const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(req, res) {
  const { item } = req.body

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/membership/supporter'
      : 'https://touk.fe.kp.lk/membership/supporter'

  const transformedItem = {
    price_data: {
      currency: 'gbp',
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: item.quantity,
  }

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ['card'],
  //   line_items: [transformedItem],
  //   mode: 'payment',
  //   success_url: redirectURL + '?status=success',
  //   cancel_url: redirectURL + '?status=cancel',
  //   metadata: {
  //     images: item.image,
  //   },
  // })
  const customer = await stripe.customers.create({
    description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
    payment_method: 'card',
  })

  log

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: 'price_1LLCn3KyFYHOmIqfFrVEzKHB' }],
  })

  res.json({ id: subscription.id })
}

export default CreateStripeSession
