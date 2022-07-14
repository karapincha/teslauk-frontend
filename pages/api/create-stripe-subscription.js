const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const DOMAIN = 'http://localhost:3000/membership/supporter'

async function CreateStripeSubscription(req, res) {
  const { name, email, orderId } = req.body

  const subscription = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [
      {
        price: `price_1LLCn3KyFYHOmIqfFrVEzKHB`,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    customer_email: email,
    success_url: `${DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${DOMAIN}?canceled=true`,
    client_reference_id: orderId,
  })

  res.json({ subscription })
}

export default CreateStripeSubscription
