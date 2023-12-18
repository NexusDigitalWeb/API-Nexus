"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const ServicePage = () => {
    const { id } = useParams();
    console.log(id)
  return (
    <div>
        
    </div>
  )
}

export default ServicePage