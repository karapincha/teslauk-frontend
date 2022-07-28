const API_URL = process.env.WORDPRESS_API_URL || ''

export async function fetchAPI(query: any, { variables }: any = {}) {
  const headers: any = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    // throw new Error(json.errors)
  }

  return json.data
}
