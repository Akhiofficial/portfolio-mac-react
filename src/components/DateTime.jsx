import React, { useEffect, useState } from 'react'

function formatMacStyle(date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const dayNum = date.getDate()

  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours === 0 ? 12 : hours
  const mm = minutes < 10 ? `0${minutes}` : minutes

  return `${day} ${month} ${dayNum} ${hours}:${mm} ${ampm}`
}

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const tick = () => setNow(new Date())
    // update every second so minutes flip immediately when needed
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <time dateTime={now.toISOString()}>{formatMacStyle(now)}</time>
  )
}

export default DateTime