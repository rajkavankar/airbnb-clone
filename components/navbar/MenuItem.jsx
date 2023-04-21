"use client"
import React from "react"

const MenuItem = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='px-4 py-3 hover:bg-neutral-100 transistion font-semibold'>
      {label}
    </div>
  )
}

export default MenuItem
