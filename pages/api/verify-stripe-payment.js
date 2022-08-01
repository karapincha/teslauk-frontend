const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const DOMAIN = `${process.env.FRONTEND_DOMAIN}/shop/checkout`

async function verifyStripePayment(req, res) {
  const { sessionId } = req.body

  await stripe.checkout.sessions
    .retrieve(sessionId)
    .then(session => {
      return res.json({
        session,
        status: session?.status,
        customer: session?.customer,
        amount: session?.amount_total / 100,
      })
    })
    .catch(e => {
      return res.json({ error: e })
    })

  return res.json({})
}

export default verifyStripePayment
