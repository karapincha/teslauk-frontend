const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function VerifyStripeSubscription(req, res) {
  const { session_id } = req.body
  stripe.checkout.sessions
    .retrieve(session_id)
    .then(session => {
      res.json({ session })
    })
    .catch(e => {
      res.json({ error: e })
    })
}

export default VerifyStripeSubscription
