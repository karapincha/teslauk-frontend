const DOMAIN = `${process.env.FRONTEND_DOMAIN}/membership/supporter`
const constants = require('gocardless-nodejs/constants')
const gocardless = require('gocardless-nodejs')
const client = gocardless(
  process.env.NEXT_PUBLIC_GOCARDLESS_ACCESS_TOKEN,
  constants.Environments.Sandbox
)

async function CreateBillingRequest(req, res) {
  const { isWelcomePackIncluded } = req.body

  const lineItem =
    isWelcomePackIncluded === true
      ? {
          description: 'TeslaOwners UK Supporter Membership First Year Fee + Welcome Pack',
          amount: '5000',
        }
      : {
          description: 'TeslaOwners UK Supporter Membership First Year Fee',
          amount: '3500',
        }

  const billingRequest = await client.billingRequests.create({
    payment_request: {
      ...lineItem,
      currency: 'GBP',
    },
    mandate_request: {
      scheme: 'bacs',
    },
  })

  const billingRequestFlow = await client.billingRequestFlows.create({
    redirect_uri: `${DOMAIN}?status=success&ref=GoCardLess&customerId=${billingRequest?.links?.customer}&billingRequest=${billingRequest?.id}&paymentRequest=${billingRequest?.links?.payment_request}`,
    exit_uri: `${DOMAIN}?status=cancelled&ref=GoCardLess&customerId=${billingRequest?.links?.customer}&billingRequest=${billingRequest?.id}&paymentRequest=${billingRequest?.links?.payment_request}`,
    links: {
      billing_request: billingRequest?.id,
    },
  })

  res.json({ billingRequest, billingRequestFlow })
}

export default CreateBillingRequest
