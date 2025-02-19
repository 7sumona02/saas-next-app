import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import {
    LoginLink,
    RegisterLink,
    getKindeServerSession,
  } from '@kinde-oss/kinde-auth-nextjs/server'
  

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transitional-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Link href='/' className='flex z-40 font-semibold'>
                <span>quil.</span>
            </Link>

            {/* mobile navbar */}

            <div className='hidden items-center space-x-4 sm:flex'>
                <>
                <Link href='/pricing' className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm'
                })}>Pricing</Link>
                <RegisterLink href='' className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm'
                })}>Sign in</RegisterLink>
                <LoginLink href='' className={buttonVariants({
                    size: 'sm'
                })}>Get Started <ArrowRight className='ml-1.5 h-5' /></LoginLink>
                </>
            </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
