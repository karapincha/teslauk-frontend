const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const DOMAIN = `${process.env.FRONTEND_DOMAIN}/membership/supporter`

async function CreateStripeSubscription(req, res) {
  const { isWelcomePackIncluded, email, clientRef } = req.body

  const lineItems = isWelcomePackIncluded
    ? [
        {
          price: `price_1LLCn3KyFYHOmIqfFrVEzKHB`,
          quantity: 1,
        },
        {
          price: `price_1LNqfZKyFYHOmIqfh84DrV9m`,
          quantity: 1,
        },
      ]
    : [
        {
          price: `price_1LLCn3KyFYHOmIqfFrVEzKHB`,
          quantity: 1,
        },
      ]

  const subscription = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: lineItems,
    mode: 'subscription',
    customer_email: email,
    success_url: `${DOMAIN}?payment=success&stripe_session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${DOMAIN}?payment=cancelled`,
    client_reference_id: clientRef,
  })

  res.json({ subscription })
}

export default CreateStripeSubscription
