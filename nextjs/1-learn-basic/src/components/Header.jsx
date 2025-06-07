import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <h1>My Shop</h1>
<div className='flex gap-4'>
<Link href={"/products"}>Products</Link>
        <Link href={"/about-us"}>About</Link>
        <Link href={'/contact-us'}>Contact</Link>
        <Link href={'faq'}>FAQ</Link>
</div>
    </header>
  )
}

export default Header