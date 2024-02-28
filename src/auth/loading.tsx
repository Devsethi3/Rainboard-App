import Image from 'next/image'
import React from 'react'

const Loading = () => {
    return (
        <div className='h-screen w-screen bg-white dark:bg-black flex items-center justify-center'>
            <Image src="/images/logo.svg" className='animate-pulse' width={120} height={120} alt="logo" />
        </div>
    )
}

export default Loading