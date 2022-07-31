const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const DOMAIN = `${process.env.FRONTEND_DOMAIN}/shop/checkout`

async function getStripePayment(req, res) {
  const { cart, email } = req.body

  const prepItems = cart?.contents?.nodes?.map(item => {
    return {
      price_data: {
        currency: 'gbp',
        product_data: {
          images: [item.product.node.image.mediaItemUrl],
          name: item.product.node.name,
        },
        unit_amount: item.product.node.price.substring(1) * 100,
      },
      quantity: item.quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: prepItems,
    mode: 'payment',
    success_url: DOMAIN + '?payment=success&stripe_session_id={CHECKOUT_SESSION_ID}',
    cancel_url: DOMAIN + '?payment=cancelled',
    payment_intent_data: {
      description: 'Tesla Owners UK Shop Order',
    },
    customer_email: email,
  })

  res.json({ session })
}

export default getStripePayment
