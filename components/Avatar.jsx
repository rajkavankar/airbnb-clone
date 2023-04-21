"use client"

import React from "react"
import Image from "next/image"

const Avatar = () => {
  return (
    <Image
      src='/images/placeholder.jpg'
      alt='avatar'
      className='rounded-full'
      width='30'
      height='30'
    />
  )
}

export default Avatar
