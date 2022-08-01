const DOMAIN = `${process.env.FRONTEND_DOMAIN}/shop/checkout`
const constants = require('gocardless-nodejs/constants')
const gocardless = require('gocardless-nodejs')
const client = gocardless(
  process.env.NEXT_PUBLIC_GOCARDLESS_ACCESS_TOKEN,
  constants.Environments.Sandbox
)

async function verifyGoCardLessPayment(req, res) {
  const { sessionId } = req.body

  const events = await client.events.list({
    include: 'payment',
    resource_type: 'payments',
  })

  const payment =
    (await events?.linked?.payments.filter(item => {
      if (item.reference === sessionId) {
        return item
      }
    })[0]) || {}

  return res.json({ status: payment?.status, payment })
}

export default verifyGoCardLessPayment
