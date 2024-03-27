'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavButton = ({path,children}) => {
    const pathname = usePathname()
    console.log(pathname)
    const active =pathname===path ? 'text-blue-500' : ''
  return (
    <Link href={path}  className={`${active} hover:border-b border-black block h-6 box-border mt-4`}>{children}</Link>
  )
}

export default NavButton