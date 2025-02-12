import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='text-white flex flex-col justify-center container'>
        <h1 className='text-3xl font-bold my-5'>About Us | Cookie & Cake Recipes</h1>
        <div className='my-5'>
            <h2 className='text-2xl font-bold'>Why Choose CookiesCut?</h2>
            <ul className='flex flex-col gap-3'>
                <li>
                    <span>🍪 Best Cookie Recipes - </span>
                    <span>From classic chocolate chip cookies to gluten-free and vegan options.</span>
                </li>
                <li>
                    <span>🎂 Delicious Cake Recipes - </span>
                    <span>Perfect for birthdays, celebrations, and everyday treats.</span>
                </li>
                <li>
                    <span>🥐 Baking Tips & Tricks - </span>
                    <span>Learn how to bake like a pro with our expert guides.</span>
                </li>
                <li>
                    <span>📖 Step-by-Step Instructions - </span>
                    <span>Easy-to-follow recipes with clear measurements and techniques.</span>
                </li>
            </ul>
        </div>
        <div className='my-5'>
            <h2 className='text-2xl font-bold'>Our Mission</h2>
            <p>
            At CookiesCut, we believe that baking should be fun, simple, and accessible to everyone. Our goal is to provide high-quality, tested recipes that guarantee success every time you bake. Whether you're craving chewy cookies, moist cakes, or festive desserts, you'll find everything you need right here.
            </p>
        </div>
        <div>
            <h2 className='text-2xl font-bold'>Join Our Community</h2>
            <Link 
                href="https://www.youtube.com/channel/UCc9DXHwVfF-7Sz6DKqX7mBw?sub_confirmation=1" 
                className="text-lg md:text-xl font-bold bg-red-600 text-white py-2 px-4 rounded-full flex justify-center items-center mt-5 mx-5">
                Subscribe For Cookie 
            </Link>
        </div>
    </div>
  )
}
