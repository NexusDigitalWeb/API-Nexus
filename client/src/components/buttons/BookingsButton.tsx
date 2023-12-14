import Link from 'next/link'
import React from 'react'

const BookingsButton = (): React.ReactElement => {
  return (
    <Link href='/nexus-bookings' target='_blank' className='w-[280px] h-[68px] flex items-center justify-center rounded-[14px] text-center text-white bg-[#191A23]'>Reserva una consulta</Link>
  )
}

export default BookingsButton