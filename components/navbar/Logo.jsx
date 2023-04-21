"use client"
import React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Logo = () => {
  const router = useRouter()
  return (
    <Image
      src='/images/logo.png'
      className='hidden md:block cursor-pointer'
      alt='Logo'
      height='100'
      width='100'
    />
  )
}

export default Logo
