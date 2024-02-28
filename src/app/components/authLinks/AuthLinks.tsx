import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const AuthLinks = () => {
  return (
    <div className='flex items-center gap-12'>
      <UserButton />
      <Link href="/sign-up" className='py-3 text-sm pt-[1rem] rounded-full px-8 text-white bg-[#4F46E5]'>Login</Link>
    </div>
  )
}

export default AuthLinks