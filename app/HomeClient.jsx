"use client";
import Subscribe from '@/app/components/subscribe';
import React, { useState } from 'react';
import { 
    ArrowRightIcon,
    ArrowUpRight,
    CalendarDaysIcon,
    ChevronLeft, 
    ChevronRight, 
    Heart, 
    IndentIcon, 
    MessageCircle, 
    ShoppingCart, 
    Star 
} from 'lucide-react';
import Image from "next/image";

const categories =[
    "All Products",
    "Moisturizers",
    "Sunscreens",
    "Foundations",
    "Lipsticks & Lip Glosses",
    "Eyeshadows",
];

const topRateProducts = 
[
  {
    id: 1,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    price: 27.49,
    oldPrice: 39.99,
    rating: 4,
    reviews: 189,
    image: "/sellzy-imgs/product6.png",
  },
  {
    id: 2,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    price: 27.49,
    oldPrice: 39.99,
    rating: 4,
    reviews: 189,
    image: "/sellzy-imgs/product3.png",
  },
  {
    id: 3,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    price: 27.49,
    oldPrice: 39.99,
    rating: 4,
    reviews: 189,
    image: "/sellzy-imgs/product11.png",
  },
];

const topItemsProducts = 
[
  {
    id: 4,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    price: 27.49,
    oldPrice: 39.99,
    rating: 4,
    reviews: 189,
    image: "/sellzy-imgs/product4.png",
  },
  {
    id: 5,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    price: 27.49,
    oldPrice: 39.99,
    rating: 4,
    reviews: 189,
    image: "/sellzy-imgs/product9.png",
  },
  {
    id: 6,
    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
    price: 27.49,
    oldPrice: 39.99,
    rating: 4,
    reviews: 189,
    image: "/sellzy-imgs/product8.png",
  },
];

const blogs = [
{
  id: 1,
  title: "The Future of Industrial Design",
  desc: "So you have heard about this site or you have been to it, but you cannot figure out.",
  date: "09 Feb 2027",
  comments: "10",
  image: "/sellzy-imgs/offer3.png",
},
{
  id: 2,
  title: "The Future of Industrial Design",
  desc: "So you have heard about this site or you have been to it, but you cannot figure out.",
  date: "09 Feb 2027",
  comments: "10",
  image: "/sellzy-imgs/offer1.png",
},
{
  id: 3,
  title: "The Future of Industrial Design",
  desc: "So you have heard about this site or you have been to it, but you cannot figure out.",
  date: "09 Feb 2027",
  comments: "10",
  image: "/sellzy-imgs/offer5.png",
},
{
  id: 4,
  title: "The Future of Industrial Design",
  desc: "So you have heard about this site or you have been to it, but you cannot figure out.",
  date: "09 Feb 2027",
  comments: "10",
  image: "/sellzy-imgs/offer4.png",
},
];


const Home = () => {
const [active, setActive] = useState("All Products");

  return (
    <>
    <main className='bg-[var(--backgroundColor)] text-black'>

    <section className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-6">

      <div className=" relative lg:col-span-2 p-10 flex flex-col lg:flex-row items-center h-130">
         <div className='absolute inset-0 bg-[url("/sellzy-imgs/offer4.png")] rounded-3xl bg-no-repeat bg-cover bg-center'></div>
          
        <div className="flex-1 absolute">
            <div className="flex gap-2">
             <span className="bg-green-300 text-green-800 px-2 py-1 rounded-full text-xs mb-4">
              25% OFF 
             </span>
             <p className="font-bold">Exclusive offer</p>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Your Everyday <br /> Shopping. Simplified
          </h1>

          <p className="text-gray-600 mb-6">
            Enjoy a seamless shopping experience with fast delivery and unbeatable prices.
          </p>

          <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-5 py-2 rounded-full text-md font-semibold">
            Shop Now
            <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
               <ArrowRightIcon size={15}/>
            </span>
          </button>
        </div>

      </div>

      <div className="flex flex-col gap-6">
        <div className="relative bg-white h-62 w-90 p-6 ">
            <div className='absolute inset-0 bg-[url("/sellzy-imgs/offer1.png")] rounded-3xl bg-no-repeat bg-cover bg-center'></div>
          <div className="absolute mt-3">
            <h3 className="text-3xl font-semibold">Your Daily Store.</h3>
            <p className="text-gray-800 text-md pt-1">Essentials, deals, and more.</p>
            <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-5 py-2 mt-6 rounded-full text-md font-semibold">
            Shop Now
            <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
               <ArrowRightIcon size={15}/>
            </span>
          </button>
          </div>

        </div>

        <div className="relative bg-white h-62 w-90 p-6 ">
             <div className='absolute inset-0 bg-[url("/sellzy-imgs/offer3.png")] rounded-3xl bg-no-repeat bg-cover bg-center'></div>
          <div className="absolute mt-3">
            <h3 className="text-3xl font-semibold">Click. Shop. Smile.</h3>
            <p className="text-gray-800 text-md pt-1">Easy shopping for every lifestyle.</p>
             <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-5 py-2 mt-6 rounded-full text-md font-semibold">
            Shop Now
            <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
               <ArrowRightIcon size={15}/>
            </span>
          </button>
          </div>
        </div>

      </div>
    </section>

    <section className='mx-5 py-10'>
        <div className='flex justify-between'>
            <div>
            <h3 className='font-semibold text-3xl'>Shop by Category</h3>
            <p className='text-gray-600 pt-4 text-lg'>
                Up to 69% discount for limited time 🔥</p>
            </div>
            <div className='flex gap-5'>
                <ChevronLeft size={45}
                className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                <ChevronRight size={45}
                className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
            {[
                {
                    img:"/sellzy-imgs/cat1.png",
                    title:"Foundations",
                },
                {
                    img:"/sellzy-imgs/cat2.png",
                    title:"Blush & Bronzers",
                },
                {
                    img:"/sellzy-imgs/cat3.png",
                    title:"Lipsticks & Lip Glosses",
                },
                {
                    img:"/sellzy-imgs/cat4.png",
                    title:"Hair Oils & Serums",
                },
                {
                    img:"/sellzy-imgs/cat5.png",
                    title:"Highlighters",
                },
            ].map((item, index) => (
                <div key={index}>
                    <img 
                    src={item.img} 
                    alt="" 
                    className='w-55 h-55 object-cover rounded-full my-7 cursor-pointer'
                    />
                    <h4 className='text-md font-semibold text-center hover:text-[var(--hoverColor)] cursor-pointer'>
                        {item.title}</h4>
                </div>
            )
           ) }
        </div>
    </section>

        <section className='py-10'>
            <div className='flex justify-between md:mx-10 mx-3'>
                <div>
                <h3 className='font-semibold text-3xl'>Today's Top Offer</h3>
                <p className='text-gray-600 pt-4 text-lg'>
                    Up to 69% discount for limited time 🔥</p>
                </div>
                <div className='flex gap-5'>
                    <ChevronLeft size={45}
                    className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                    <ChevronRight size={45}
                    className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                </div>
            </div>

                <div className='grid grid-cols-2 md:grid-cols-5 py-10 my-6 bg-pink-200 rounded-4xl space-y-2'>
                    {[
                        {
                            img: "/sellzy-imgs/offer1.png",
                            cat: 'Store Name/Category',
                            title: "Nebulizer Ultracare",
                            price: "$29.56",
                            saleprice: "$28.56",
                            sold: 4,
                            rating: 118,
                            available: 200,
                        },
                        {
                            img: "/sellzy-imgs/offer2.png",
                            cat: 'Store Name/Category',
                            title: "Nebulizer Ultracare",
                            price: "$29.56",
                            saleprice: "$28.56",
                            sold: 4,
                            rating: 118,
                            available: 200,
                        },
                        {
                            img: "/sellzy-imgs/offer3.png",
                            cat: 'Store Name/Category',
                            title: "Nebulizer Ultracare",
                            price: "$29.56",
                            saleprice: "$28.56",
                            sold: 4,
                            rating: 118,
                            available: 200,
                        },
                        {
                            img: "/sellzy-imgs/offer4.png",
                            cat: 'Store Name/Category',
                            title: "Nebulizer Ultracare",
                            price: "$29.56",
                            saleprice: "$28.56",
                            sold: 4,
                            rating: 118,
                            available: 200,
                        },
                        {
                            img: "/sellzy-imgs/offer5.png",
                            cat: 'Store Name/Category',
                            title: "Nebulizer Ultracare",
                            price: "$29.56",
                            saleprice: "$28.56",
                            sold: 4,
                            rating: 118,
                            available: 200,
                        },
                    ].map((item, index) => (
                       <div key={index} className='mx-3 py-3 bg-white rounded-2xl'>
                        <img 
                        src={item.img} 
                        alt="" 
                        className='w-50 h-80 object-cover rounded-xl mx-auto cursor-pointer'/>

                        <div className='px-5 pt-4'>

                        <span className='bg-red-600 text-white p-1 text-sm'>SALES</span>
                        <p className='text-gray-600 text-sm py-2'>{item.cat}</p>
                        <h3 className='text-lg font-semibold hover:text-[var(--hoverColor)] cursor-pointer'>{item.title}</h3>
                        <p className='py-2 '>{item.saleprice} <span className='text-gray-500 text-sm line-through px-1'>
                            {item.price}</span> <span className='text-red-600 text-sm'>10% OFF</span>
                        </p>

                        <div className='flex gap-1 py-1'>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-gray-300 text-gray-300'/>

                            <span className='text-gray-600'>({item.rating})</span>
                        </div>

                        <div className='flex gap-9 text-sm md:text-md'>
                            <span>Sold: {item.sold}</span>
                            <span>Available: {item.available}</span>
                        </div>

                        <div className='flex gap-4 py-2'>
                           <div className='border rounded-full p-2 border-gray-300 hover:bg-gray-100  text-gray-600 cursor-pointer'>
                            <Heart size={20}/>
                           </div>

                           <div>
                            <button 
                            className='bg-[var(--hoverColor)] text-white text-xs md:text-sm rounded-4xl px-4 py-2 cursor-pointer'>
                                <ShoppingCart size={25}
                                className='inline-block pr-1'/> Add to Cart</button>
                           </div>
                        </div>

                       </div>
                       </div>
                    )
                    )}
                    
                </div>

        </section>

        <section>
            <div className='flex justify-between md:mx-10 mx-3'>
                <div>
                <h3 className='font-semibold text-3xl'>Most Loved Products</h3>
                </div>
                <div className='flex gap-5'>
                    <ChevronLeft size={45}
                    className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                    <ChevronRight size={45}
                    className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 py-10 space-y-2'>
              {[
                {
                    img: "/sellzy-imgs/product1.png",
                    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                    price: "$29.99",
                    saleprice: "$27.49",
                    sold: 4,
                    rating: 189,
                },
                {
                    img: "/sellzy-imgs/product2.png",
                    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                    price: "$29.99",
                    saleprice: "$27.49",
                    sold: 4,
                    rating: 189,
                },
                {
                    img: "/sellzy-imgs/product3.png",
                    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                    price: "$29.99",
                    saleprice: "$27.49",
                    sold: 4,
                    rating: 189,
                },
                {
                    img: "/sellzy-imgs/product4.png",
                    title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                    price: "$29.99",
                    saleprice: "$27.49",
                    sold: 4,
                    rating: 189,
                },
                ].map((item, index) => (
                  <div key={index} className='mx-3 py-3 bg-white rounded-2xl border border-gray-300'>
                        <img 
                        src={item.img} 
                        alt="" 
                        className='w-50 md:w-65 h-60 object-cover rounded-xl mx-auto cursor-pointer bg-pink-100'/>

                        <div className='px-5 pt-4'>

                        <h3 className=' text-md md:text-lg hover:text-[var(--hoverColor)] cursor-pointer'>
                            {item.title}
                        </h3>

                        <div className='flex gap-1 pt-4'>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-gray-300 text-gray-300'/>

                            <span className='text-gray-600'>({item.rating})</span>
                        </div>

                        <h5 className='py-4 text-sm md:text-lg'>
                            {item.saleprice} <span className='text-gray-500 line-through px-1'>
                            {item.price}</span> <span className='text-red-600'>10% OFF</span>
                        </h5>

                        <div className='flex gap-3 py-2'>
                           <div className='border rounded-full p-2 border-gray-300 hover:bg-gray-100  text-gray-600 cursor-pointer'>
                            <Heart size={20}/>
                           </div>

                           <div>
                            <button 
                            className='bg-[var(--hoverColor)] md:font-semibold text-white text-xs md:text-sm rounded-4xl px-5 md:px-12 py-2 cursor-pointer'>
                                <ShoppingCart size={25}
                                className='inline-block pr-1'/> Add to Cart</button>
                           </div>
                        </div>

                       </div>
                       </div>
                    )
                    )}
                    
                </div>
        </section>

        <section>
            <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/sellzy-imgs/offer1.png"
                alt=""
                className="w-full h-150 object-cover"
              />
      
              <div className="absolute bottom-5 left-5 right-5 bg-[#9ee872] rounded-2xl p-6">
                <span className="inline-block bg-yellow-300 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Enjoy 20% savings
                </span>
      
                <h2 className="text-3xl font-bold mb-2">
                  Your Daily Store.
                </h2>
      
                <p className="text-md mb-4">
                  Essentials, deals, and more.
                </p>
      
                <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 text-white px-5 py-2 rounded-full text-sm font-semibold cursor-pointer">
                  Shop Now
                  <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
                    <ArrowRightIcon size={15}/>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/sellzy-imgs/cat3.png"
                alt=""
                className="w-full h-150 object-cover"
              />
      
              <div className="absolute bottom-5 left-5 right-5 bg-[#ffd6ef] rounded-2xl p-6">
                <span className="inline-block bg-yellow-300 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Enjoy 20% savings
                </span>
      
                <h2 className="text-3xl font-bold mb-2">
                  Everyday Made Simple.
                </h2>
      
                <p className="text-md mb-4">
                  Quick, easy, and effortless.
                </p>
      
                <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-5 py-2 rounded-full text-sm font-semibold">
                  Shop Now
                  <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
                     <ArrowRightIcon size={15}/>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
             <img
               src="/sellzy-imgs/offer3.png"
               alt=""
               className="w-full h-150 object-cover"
             />
     
             <div className="absolute bottom-5 left-5 right-5 bg-[#a0e2e0] rounded-2xl p-6">
               <span className="inline-block bg-yellow-300 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                 Enjoy 20% savings
               </span>
     
               <h2 className="text-3xl font-bold mb-2">
                 Your Cart. Your Way.
               </h2>
     
               <p className="text-md mb-4">
                 All your favorites, in one click.
               </p>
     
               <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-5 py-2 rounded-full text-sm font-semibold">
                 Shop Now
                 <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
                    <ArrowRightIcon size={15}/>
                 </span>
               </button>
             </div>
            </div>

        </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-6 mx-12 gap-12 py-7 translate-x-6">
            <div>
                <img 
                src="/sellzy-imgs/spa-logo.png" 
                alt="" 
                className="md:w-25 md:h-25 w-25 h-25 object-cover"/>
            </div>
            <div>
                <img 
                src="/sellzy-imgs/cosmetic-logo.png" 
                alt="" 
                className="md:w-25 md:h-25 w-25 h-25 object-cover"/>
            </div>
            <div>
                <img 
                src="/sellzy-imgs/beauty-logo.png" 
                alt="" 
                className="md:w-25 md:h-25 w-25 h-25 object-cover"/>
            </div>
            <div>
                <img 
                src="/sellzy-imgs/salon-logo.png" 
                alt="" 
                className="md:w-25 md:h-25 w-25 h-25 object-cover"/>
            </div>
            <div>
                <img 
                src="/sellzy-imgs/boutique-logo.png" 
                alt="" 
                className="md:w-25 md:h-25 w-25 h-25 object-cover"/>
            </div>
            <div>
                <img 
                src="/sellzy-imgs/therapy-logo.png" 
                alt="" 
                className="md:w-25 md:h-25 w-25 h-25 object-cover"/>
            </div>
           
        </section>

        <section>
            <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/sellzy-imgs/offer1.png"
                alt=""
                className="w-full h-150 object-cover"
              />
      
              <div className="absolute bottom-5 left-5 right-5 bg-[#ffc091] rounded-2xl p-6">
                <span className="inline-block bg-yellow-300 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Enjoy 20% savings
                </span>
      
                <h2 className="text-3xl font-bold mb-2">
                  Unveil Your Natural Glow
                </h2>
      
                <p className="text-md mb-4">
                  Transform your skincare ritual with our exclusive collection
                    for radiant results.
                </p>
      
                <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 text-white px-5 py-2 rounded-full text-sm font-semibold cursor-pointer">
                  View All Products
                  <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
                    <ArrowRightIcon size={15}/>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/sellzy-imgs/cat1.png"
                alt=""
                className="w-full h-150 object-cover"
              />
      
              <div className="absolute bottom-5 left-5 right-5 bg-[#a4f7cc] rounded-2xl p-6">
                <span className="inline-block bg-yellow-300 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Enjoy 20% savings
                </span>
      
                <h2 className="text-3xl font-bold mb-2">
                  Premium Luxury Glow
                </h2>
      
                <p className="text-md mb-4">
                  Upgrade your routine with our premium skincare and beauty
                    essentials.
                </p>
      
                <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-5 py-2 rounded-full text-sm font-semibold">
                  Shop Now
                  <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
                     <ArrowRightIcon size={15}/>
                  </span>
                </button>
              </div>
            </div>

        </div>
        </section>

         <section>
            <div className='flex justify-between md:mx-10 mx-3 pt-8'>
                <div>
                <h3 className='font-semibold text-3xl'>Newly Lunch Products</h3>
                <p className='text-gray-600 pt-4 text-lg'>
                    Up to 69% discount for limited time 🔥
                </p>
                </div>

                <div className='flex gap-5'>
                    <ChevronLeft size={45}
                    className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                    <ChevronRight size={45}
                    className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 py-10 my-6 space-y-2 bg-[#ffeb69] rounded-4xl'>
                {[
                    {
                        img: "/sellzy-imgs/lunchprod1.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/lunchprod2.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/lunchprod3.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/lunchprod4.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                       
                ].map((item, index) => (
                       <div key={index} className='mx-3 py-3 bg-white rounded-2xl'>
                        <div className='relative'>
                            <span className='absolute top-4 left-4 bg-green-300 text-xs px-2 py-1 z-10'>NEW</span>
                        <img 
                        src={item.img} 
                        alt="" 
                        className='w-50 md:w-65 h-65 object-cover rounded-xl mx-auto cursor-pointer bg-pink-100'/>
                        </div>

                        <div className='px-5 pt-4'>

                        <h3 className=' text-md md:text-lg font-semibold hover:text-[var(--hoverColor)] cursor-pointer'>
                            {item.title}
                        </h3>

                        <div className='flex gap-1 pt-4'>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-gray-300 text-gray-300'/>

                            <span className='text-gray-600'>({item.rating})</span>
                        </div>

                        <p className='py-4 text-sm md:text-lg'>
                            {item.saleprice} <span className='text-gray-500 line-through px-1'>
                            {item.price}</span> <span className='text-red-600'>10% OFF</span>
                        </p>

                        <div className='flex gap-3 py-2'>
                           <div className='border rounded-full p-2 border-gray-300 hover:bg-gray-100  text-gray-600 cursor-pointer'>
                            <Heart size={20}/>
                           </div>

                           <div>
                            <button 
                            className='bg-[var(--hoverColor)] md:font-semibold text-white text-xs md:text-sm rounded-4xl px-5 md:px-12 py-2 cursor-pointer'>
                                <ShoppingCart size={25}
                                className='inline-block pr-1'/> Add to Cart</button>
                           </div>
                        </div>

                       </div>
                       </div>
                    )
                )}
                    
                </div>
        </section>

         <section className='pt-15'>
            <h3 className='font-semibold text-3xl text-center'>Our Products</h3>

            <div className=' flex md:grid grid-cols-6 gap-2 md:gap-0 mx-4 md:mx-17 py-5 overflow-x-auto md:overflow-visible scrollbar-thin'>
                {categories.map((item, index) => (
                <button 
                key={index}
                onClick={() => setActive(item)}
                className={` flex-shrink-0 border border-gray-300 h-13 w-45 rounded-full cursor-pointer text-md
                    ${ active === item ? "bg-[var(--hoverColor)] text-white" : "bg-white text-black" }`}
                >
                    {item}
                </button>
                ))}
            </div>
                
            <div className='grid grid-cols-1 md:grid-cols-4 py-10 space-y-2'>
                {[
                    {
                        img: "/sellzy-imgs/product5.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$29.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product6.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product7.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product8.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product9.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product10.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/lunchprod3.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product11.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product12.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product4.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                       
                ].map((item, index) => (
                    <div key={index} className='mx-3 py-3 bg-white rounded-2xl border border-gray-300'>
                        <img 
                        src={item.img} 
                        alt="" 
                        className='md:w-65 w-110 h-65 object-cover rounded-xl mx-auto cursor-pointer bg-pink-100'/>

                        <div className='px-5 pt-4'>

                        <h3 className=' text-md md:text-lg font-semibold hover:text-[var(--hoverColor)] cursor-pointer'>
                            {item.title}
                        </h3>

                        <div className='flex gap-1 pt-4'>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-gray-300 text-gray-300'/>

                            <span className='text-gray-600'>({item.rating})</span>
                        </div>

                        <h5 className='py-4 text-sm md:text-lg'>
                            {item.saleprice} <span className='text-gray-500 line-through px-1'>
                            {item.price}</span> <span className='text-red-600'>10% OFF</span>
                        </h5>

                        <div className='flex gap-3 py-2'>
                           <div className='border rounded-full p-2 border-gray-300 hover:bg-gray-100  text-gray-600 cursor-pointer'>
                            <Heart size={20}/>
                           </div>

                           <div>
                            <button 
                            className='bg-[var(--hoverColor)] md:font-semibold text-white text-xs md:text-sm rounded-4xl px-5 md:px-12 py-2 cursor-pointer'>
                                <ShoppingCart size={25}
                                className='inline-block pr-1'/> Add to Cart</button>
                           </div>
                        </div>

                       </div>
                    </div>
                    )
                )}
            </div>
        </section>

        <section>
            <div>

                <div className="flex justify-between items-center mb-6 md:mx-7 mx-3">
                  <div>
                    <h2 className="text-2xl font-bold">Limited Time Deals</h2>
                    <p className="text-sm text-gray-600 pt-2">
                        Up to 69% discount for limited time 🔥
                    </p>
                  </div>
          
                  <button className="bg-white px-5 py-2 border border-gray-300 rounded-full shadow-sm flex items-center gap-2 cursor-pointer">
                    View All Products
                    <span className="w-7 h-7 text-white bg-teal-700 rounded-full flex items-center justify-center">
                       <ArrowRightIcon size={15}/>
                    </span>
                  </button>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#92bdf5] py-15 px-5 mb-12 rounded-3xl">

                    <div className="bg-white rounded-3xl text-center ">
                      <img 
                      src="/sellzy-imgs/deal1.png" 
                      className="w-80 h-70 mx-auto" />

                        <div className="flex flex-col justify-center items-center">
                          <h3 className="text-2xl font-bold mt-2">
                            Stay Fit. Stay Healthy.
                          </h3>
              
                          <p className="text-gray-600 text-md mt-2 mx-3">
                            Discover Vitamins, Supplements, Skincare & Immunity Boosters - All in one Place.
                          </p>
                          <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-5 py-2 mt-6 rounded-full text-md">
                            Explore Wellness
                            <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
                               <ArrowRightIcon size={15}/>
                            </span>
                          </button>
                        </div>
                   </div>

               <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-lg">Top Rate</h3>
                      <div className="flex gap-2">
                        <button className="bg-white/50 hover:bg-white p-2 rounded-full cursor-pointer">
                          <ChevronLeft size={18} />
                        </button>
                        <button className="bg-white/50 hover:bg-white p-2 rounded-full cursor-pointer">
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {topRateProducts.map((item) => (
                      <div key={item.id} 
                        className="bg-white rounded-xl p-4 shadow flex gap-4">
                        <img 
                        src={item.image} 
                        className="w-25 h-30 object-contain bg-pink-50 rounded-lg p-2" 
                        />

                        <div className="flex-1">
                            <h4 className="text-md hover:text-teal-700 cursor-pointer">
                                {item.title}
                            </h4>

                            <div className="flex text-sm pt-4">
                                <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                                <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                                <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                                <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                                <Star size={13} className="fill-gray-300 text-gray-300"/>
                              
                              <span className="text-gray-400 ml-1">({item.reviews})</span>
                            </div>

                            <div className="flex justify-between items-center mt-1">
                              <div>
                                <span className="font-bold text-sm">${item.price}</span>
                                <span className="line-through text-gray-400 text-xs ml-2">
                                  ${item.oldPrice}
                                </span>
                              </div>
          
                              <button className="bg-teal-700 hover:bg-teal-800 text-white text-sm px-3 py-2 rounded-full cursor-pointer">
                                <ShoppingCart size={20} className="inline-block pr-1 pb-1"/>
                                Add
                              </button>
                            </div>
                        </div>
                       </div>
                       ))}
                     </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-lg">Top Items</h3>
                      <div className="flex gap-2">
                        <button className="bg-white/50 hover:bg-white p-2 rounded-full cursor-pointer">
                          <ChevronLeft size={18} />
                        </button>
                        <button className="bg-white/50 hover:bg-white p-2 rounded-full cursor-pointer">
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
          
                    <div className="space-y-4">
                      {topItemsProducts.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl p-4 shadow flex gap-4">
                          <img 
                          src={item.image} 
                          className="w-25 h-30 object-contain bg-pink-50 rounded-lg p-2" />
          
                          <div className="flex-1">
                              <h4 className="text-md hover:text-teal-700 cursor-pointer">
                                  {item.title}
                              </h4>
          
                                <div className="flex text-sm pt-4">
                                    <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                                    <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                                    <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                                    <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                                    <Star size={13} className="fill-gray-300 text-gray-300"/>
                                  
                                  <span className="text-gray-400 ml-1">({item.reviews})</span>
                                </div>
          
                                <div className="flex justify-between items-center mt-1">
                                  <div>
                                    <span className=" text-sm">${item.price}</span>
                                    <span className="line-through text-gray-400 text-xs ml-2">
                                      ${item.oldPrice}
                                    </span>
                                  </div>
                    
                                  <button className="bg-teal-700 hover:bg-teal-800 text-white text-sm px-3 py-2 rounded-full cursor-pointer">
                                    <ShoppingCart size={20} className="inline-block pr-1 pb-1"/>
                                    Add
                                  </button>
                                </div>
                            </div>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
            </div>
        </section>

        <section>
            <h2 className='text-center text-3xl'>Shop By Brands</h2>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-5 mx-5 py-10'>
                {[
                    { img: "/sellzy-imgs/brand1.png"},
                    { img: "/sellzy-imgs/brand2.png"},
                    { img: "/sellzy-imgs/brand3.png"},
                    { img: "/sellzy-imgs/brand4.png"},
                    { img: "/sellzy-imgs/brand1.png"},
                    { img: "/sellzy-imgs/brand3.png"},
                    { img: "/sellzy-imgs/brand3.png"},
                    { img: "/sellzy-imgs/brand4.png"},
                    { img: "/sellzy-imgs/brand1.png"},
                    { img: "/sellzy-imgs/brand3.png"},
                    { img: "/sellzy-imgs/brand4.png"},
                    { img: "/sellzy-imgs/brand2.png"},
                ].map((item, index) => (
                    <div key={index} className='border border-gray-200 rounded-2xl flex justify-center p-10'>
                        <img 
                        src={item.img} 
                        alt="" 
                        className='w-21 h-5 object-cover'/>
                    </div>
                ))}
            </div>
        </section>

        <section className='py-4'>
            <div className='flex justify-between md:mx-10 mx-3'>
                <div>
                <h3 className='font-semibold text-3xl'>Beauty Care Products</h3>
                <p className='text-gray-600 pt-4 text-lg'>
                    Up to 69% discount for limited time 🔥
                </p>
                </div>

                <div className='flex gap-5'>
                    <ChevronLeft size={45}
                    className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                    <ChevronRight size={45}
                    className='bg-gray-100 rounded-full p-3 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 py-10 my-6 space-y-2 bg-[#9fdedd] rounded-4xl'>
                {[
                    {
                        img: "/sellzy-imgs/lunchprod3.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product2.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/product3.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/lunchprod1.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                       
                ].map((item, index) => (
                       <div key={index} className='mx-3 py-3 bg-white rounded-2xl'>
                        <div className='relative'>
                            <span className='absolute top-4 left-4 bg-green-300 text-xs px-2 py-1 z-10'>NEW</span>
                        <img 
                        src={item.img} 
                        alt="" 
                        className='w-50 md:w-65 h-65 object-cover rounded-xl mx-auto cursor-pointer bg-pink-100'/>
                        </div>

                        <div className='px-5 pt-4'>

                        <h3 className=' text-md md:text-lg font-semibold hover:text-[var(--hoverColor)] cursor-pointer'>
                            {item.title}
                        </h3>

                        <div className='flex gap-1 pt-4'>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-amber-300 text-amber-300'/>
                            <Star size={20} className='fill-gray-300 text-gray-300'/>

                            <span className='text-gray-600'>({item.rating})</span>
                        </div>

                        <p className='py-4 text-sm md:text-lg'>
                            {item.saleprice} <span className='text-gray-500 line-through px-1'>
                            {item.price}</span> <span className='text-red-600'>10% OFF</span>
                        </p>

                        <div className='flex gap-3 py-2'>
                           <div className='border rounded-full p-2 border-gray-300 hover:bg-gray-100  text-gray-600 cursor-pointer'>
                            <Heart size={20}/>
                           </div>

                           <div>
                            <button 
                            className='bg-[var(--hoverColor)] md:font-semibold text-white text-xs md:text-sm rounded-4xl px-5 md:px-12 py-2 cursor-pointer'>
                                <ShoppingCart size={25}
                                className='inline-block pr-1'/> Add to Cart</button>
                           </div>
                        </div>

                       </div>
                       </div>
                    )
                )}
                    
            </div>
        </section>

        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8 md:mx-5 mx-3">
              <h2 className="text-3xl font-bold">Latest Blog</h2>
              <button className="text-lg font-bold text-black hover:underline cursor-pointer">
                View All  
              </button>
            </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="px-3 py-3 bg-white rounded-2xl border border-gray-300 overflow-hidden transform transition-all duration-300 
            hover:-translate-y-1 hover:shadow-xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-50 object-cover rounded-2xl cursor-pointer"
            />

            <div className="p-5">
              <span className="inline-block text-xs px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full mb-3 cursor-pointer">
                Category Name
              </span>

              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span>
                    <CalendarDaysIcon size={12}
                    className="inline-block mb-1"/> {blog.date}</span>
                <span>
                    <MessageCircle size={12}
                    className="inline-block mb-1"/> Comment ({blog.comments})</span>
              </div>

              <h3 className="font-semibold text-lg hover:text-teal-700 mb-2 cursor-pointer">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {blog.desc}
              </p>

              <button className="flex items-center gap-3 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-5 py-2 rounded-full text-md font-semibold">
            Shop Now
            <span className="w-7 h-7 bg-white text-teal-700 rounded-full flex items-center justify-center">
               <ArrowRightIcon size={15}/>
            </span>
          </button>
            </div>
          </div>
        ))}
      </div>
       </section>

        <Subscribe/>
    </main>

    </>
  )
}

export default Home