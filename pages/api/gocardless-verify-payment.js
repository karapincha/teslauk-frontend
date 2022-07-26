import { format } from 'date-fns'

const DOMAIN = `${process.env.FRONTEND_DOMAIN}/membership/supporter`
const constants = require('gocardless-nodejs/constants')
const gocardless = require('gocardless-nodejs')
const client = gocardless(
  process.env.NEXT_PUBLIC_GOCARDLESS_ACCESS_TOKEN,
  constants.Environments.Sandbox
)

async function verifyPayment(req, res) {
  const { customerId, paymentRequest } = req.body

  const customer = await client.customers.find(customerId)
  const mandates = await client.mandates.list({ customer: customerId })
  const events = await client.events.list({
    include: 'payment',
    resource_type: 'payments',
  })

  const payment =
    (await events?.linked?.payments.filter(item => {
      if (item.reference === paymentRequest) {
        return item
      }
    })[0]) || {}

  res.json({ payment })
}

export default verifyPayment
