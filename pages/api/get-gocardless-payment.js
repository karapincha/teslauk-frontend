const DOMAIN = `${process.env.FRONTEND_DOMAIN}/shop/checkout`
const constants = require('gocardless-nodejs/constants')
const gocardless = require('gocardless-nodejs')
const client = gocardless(
  process.env.NEXT_PUBLIC_GOCARDLESS_ACCESS_TOKEN,
  constants.Environments.Sandbox
)

async function getGoCardLessPayment(req, res) {
  const { cart, email } = req.body
  const totalAmount = cart?.total?.substring(1)

  const billingRequest = await client.billingRequests.create({
    payment_request: {
      description: `Tesla Owners UK Shop Order - ${email}`,
      amount: totalAmount * 100,
      currency: 'GBP',
    },
  })

  const billingRequestFlow = await client.billingRequestFlows.create({
    redirect_uri:
      DOMAIN + `?payment=success&gocardless_session_id=${billingRequest?.links?.payment_request}`,
    exit_uri: DOMAIN + '?payment=cancelled',
    links: {
      billing_request: billingRequest?.id,
    },
  })

  res.json(billingRequestFlow?.authorisation_url)
}

export default getGoCardLessPayment
