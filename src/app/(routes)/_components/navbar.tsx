import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex items-center gap-x-4 p-5 bg-teal-600'>
                <UserButton />
            </div>
        </>
    )
}

export default Navbar