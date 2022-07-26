import { format } from 'date-fns'

const DOMAIN = `${process.env.FRONTEND_DOMAIN}/membership/supporter`
const constants = require('gocardless-nodejs/constants')
const gocardless = require('gocardless-nodejs')
const client = gocardless(
  process.env.NEXT_PUBLIC_GOCARDLESS_ACCESS_TOKEN,
  constants.Environments.Sandbox
)

async function CreateSubscription(req, res) {
  const { name, isWelcomePackIncluded, email, clientRef, customerId, mandate, product } = req.body

  const customer = await client.customers.find(customerId)
  const mandates = await client.mandates.list({ customer: customerId })
  const subscriptions = await client.subscriptions.list({ customer: customerId })

  if (subscriptions?.subscriptions?.length) {
    res.json({ customer, subscription: subscriptions?.subscriptions[0] })
  } else {
    const subscription = await client.subscriptions.create({
      amount: 3500,
      currency: 'GBP',
      name: 'TeslaOwners UK Supporter Membership Renewal',
      interval_unit: 'yearly',
      start_date: format(
        new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        'yyyy-MM-dd'
      ),
      links: {
        mandate: mandates?.mandates?.[0]?.id,
      },
    })

    res.json({ customer, subscription })
  }

  res.json({ customer, subscription: { status: false } })
}

export default CreateSubscription
