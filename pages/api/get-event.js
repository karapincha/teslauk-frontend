export const getEvent = async slug => {
  const response = await fetch(`https://api.tito.io/v3/teslaownersuk/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=secret_5QtsRs7a-vgDW4LQ9JDi',
    },
  })

  const event = await response.json()

  return { event: event?.event }
}

export default getEvent
