export const getEvents = async (req, res) => {
  const upcoming = await fetch('https://api.tito.io/v3/teslaownersuk/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=secret_5QtsRs7a-vgDW4LQ9JDi',
    },
  })

  const past = await fetch('https://api.tito.io/v3/teslaownersuk/events/past', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token token=secret_5QtsRs7a-vgDW4LQ9JDi',
    },
  })

  const upcomingEvents = await upcoming.json()
  const pastEvents = await past.json()

  return { upcoming: upcomingEvents?.events, past: pastEvents?.events }
}

export default getEvents
