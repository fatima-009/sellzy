"use client";
import React, { useState } from 'react'
import Subscribe from '../components/subscribe';
import { 
    Check,
    ChevronDown,
    ChevronLeft, 
    ChevronRight, 
    Headphones, 
    Heart, 
    LucideBadgeDollarSign, 
    LucideGitCompareArrows, 
    Minus, 
    Package2, 
    Plus, 
    Share, 
    ShoppingCart, 
    Star,
    Truck, 
 } from 'lucide-react';

const DetailPage = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
    <main className='bg-[var(--backgroundColor)] text-black'>

        <section>
            <div className='mx-5 py-10'>
                <h1 className='text-4xl'>VitaLife Omega-3 Softgels Heart</h1>
                <div className='flex gap-5 pt-10'>
                 <div className='flex gap-1 border-r border-gray-300 pr-6'>
                    <Star size={20} className='fill-amber-300 text-amber-300'/>
                    <Star size={20} className='fill-amber-300 text-amber-300'/>
                    <Star size={20} className='fill-amber-300 text-amber-300'/>
                    <Star size={20} className='fill-amber-300 text-amber-300'/>
                    <Star size={20} className='fill-gray-300 text-gray-300'/>

                    <span className='text-gray-600'>(11.78k reviews)</span>
                </div>

                <span className='border-r border-gray-300 pr-6'>Sold: 389</span>
                <span className='text-blue-500 hover:underline cursor-pointer border-r border-gray-300 pr-6'>
                    View Store</span>
                <span className='text-blue-500 hover:underline cursor-pointer border-r border-gray-300 pr-6'>
                    <Heart size={20}
                    className='inline-block pb-1'/> Add to Wishlist</span>
                <span className='text-blue-500 hover:underline cursor-pointer border-r border-gray-300 pr-6'>
                    <Share size={20}
                    className='inline-block pb-1'/> Share</span>
                <span className='text-blue-500 hover:underline cursor-pointer'>
                    <LucideGitCompareArrows size={20}
                    className='inline-block pb-1'/> Compare</span>
                </div>
            </div>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-2 mx-5'>
            <div className='py-8'>
             <img src="/sellzy-imgs/deal1.png" 
             alt="" 
             className='w-170 h-120 object-cover border border-gray-300 rounded-2xl '/>

             <div className='flex gap-2 pt-3'>
                <img 
                src="sellzy-imgs/offer1.png" 
                alt="" 
                className='w-32 h-30 object-cover border border-gray-300 rounded-2xl cursor-pointer'
                />
                <img 
                src="sellzy-imgs/offer2.png" 
                alt="" 
                className='w-32 h-30 object-cover border border-gray-300 rounded-2xl cursor-pointer'
                />
                <img 
                src="sellzy-imgs/offer3.png" 
                alt="" 
                className='w-32 h-30 object-cover border border-gray-300 rounded-2xl cursor-pointer'
                />
                <img 
                src="sellzy-imgs/offer4.png" 
                alt="" 
                className='w-32 h-30 object-cover border border-gray-300 rounded-2xl cursor-pointer'
                />
                <img 
                src="sellzy-imgs/offer5.png" 
                alt="" 
                className='w-32 h-30 object-cover border border-gray-300 rounded-2xl cursor-pointer'
                />
             </div>
            </div>

            <div className=' flex flex-col items-start border border-gray-300 rounded-2xl p-5 mt-8 max-w-5xl'>
              <p className='uppercase bg-red-600 text-white px-2'>sales</p>
                <h5 className='py-5 text-md md:text-2xl'>
                 $62.97 <span className='text-gray-400 line-through px-1'>
                  $39.99</span> <span className='bg-yellow-400 text-sm px-1 py-1'>15% OFF</span>
                </h5>

                <p className='text-gray-600 text-md pb-3'>
                  Stay connected and in control with the SmartLife Pro X7. Track
                  your fitness, monitor your health, and receive real-time
                  notifications — all from your wrist. With a sleek design and
                  all-day battery life, it’s the perfect companion for your
                  modern lifestyle.
                </p>

                <span className='flex py-4'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600 text-start'> 
                        Compatible with iOS and Android
                    </p>
                </span> 
                <span className='flex py-4'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600 text-start'> 
                        Heart rate, sleep, and activity tracking
                    </p>
                </span> 
                <span className='flex py-4'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600 text-start'> 
                        Instant call, SMS, and app notifications
                    </p>
                </span> 

                <div className='border-t border-gray-200 pt-4'>
                    <h4 className='font-semibold'>Pack Size: <span>250 ML</span></h4>
                    <div className='grid md:grid-cols-4 gap-3 pt-3'>
                        <span className='border border-gray-200 py-2 px-6 rounded-full bg-teal-700 text-white cursor-pointer'>
                            60 ML
                        </span>
                        <span className='border border-gray-200 py-2 px-5 rounded-full hover:bg-gray-200 cursor-pointer'>
                            120 ML
                        </span>
                        <span className='border border-gray-200 py-2 px-5 rounded-full hover:bg-gray-200 cursor-pointer'>
                            220 ML
                        </span>
                        <span className='border border-gray-200 py-2 px-5 rounded-full hover:bg-gray-200 cursor-pointer'>
                            250 ML
                        </span>
                        <span className='border border-gray-200 py-2 px-5 rounded-full hover:bg-gray-200 cursor-pointer'>
                            300 ML
                        </span>
                        <span className='border border-gray-200 py-2 px-5 rounded-full hover:bg-gray-200 cursor-pointer'>
                            500 ML
                        </span>
                    </div>
                </div>

                <div className='py-4'>
                    <h3 className='text-lg '>Quantity:</h3>
                    <div className='flex pt-4 gap-3'>
                        <span className='border border-gray-200 py-3 px-6 rounded-full text-lg '>
                            <Minus 
                            className='inline-block cursor-pointer pr-2'/> 1 <Plus 
                            className='inline-block cursor-pointer pl-2'/>
                        </span>

                        <button className='bg-yellow-400 hover:bg-yellow-500 hover:text-white text-black py-3 px-7  rounded-full cursor-pointer'>Buy Now</button>
                        <button className='bg-teal-700 hover:bg-teal-800 text-white py-3 px-7 rounded-full cursor-pointer'>
                            <ShoppingCart className='inline-block'/> Add to Cart</button>
                    </div>
                </div>

                <div className='text-md leading-12 pt-4 border-t border-gray-200'>
                    <h6>Free Shipping: <span className='text-gray-600'>
                        Estimated Delivery Time 5-7 Days</span></h6>
                    <h6>SKU: <span className='text-gray-600'>SKU-001</span></h6>
                    <h6>Categories: <span className='text-gray-600'>
                        Electronics, Computers, Accessories</span></h6>
                    <h6>Tags: <span className='text-gray-600'>
                        Smartwatch, Fitness Tracker, Wearable</span></h6>
                <span className='flex'>
                   <h6 className='leading-8'> Payment Methods:</h6>
                    <img 
                    src="/sellzy-imgs/paymentmethods.png" 
                    alt="" 
                    className='w-80 h-15 pt-4 '/>
                </span>
                </div>
            </div>
        </section>

        <section className='py-6'>
            <div className='flex justify-between mx-5 px-6 py-4 rounded-2xl bg-gray-100'>
                <h3 className='text-lg'>Description </h3>
                <button 
                className='cursor-pointer'
                onClick={() => setOpen(!open)}
                >
                    <ChevronDown className={`transition-transform duration-300 
                        ${ open ? "rotate-180" : ""}`}/>
                </button>
            </div>

             <div
             className={`overflow-hidden transition-all duration-500 ${
                open ? "max-h-[6000px]" : "max-h-0" }`} >

            <div className='border-r border-l border-b border-gray-300 rounded-2xl mx-6 p-8 text-md leading-relaxed'>
                <p className='text-gray-600 '>
                To begin, carefully unpack the product and ensure all necessary
                components are included. Place the product on a clean, flat
                surface before use. If the device requires power, insert the
                batteries or connect it to a power source as indicated in the
                manual. Press the power button to activate the product, and
                refer to the control panel or app interface to adjust the
                settings according to your preference. Use the product as
                recommended, following all safety guidelines provided. After
                use, turn off the device and disconnect it from the power
                source. Clean and store the product in a cool, dry place to
                maintain its condition for future use.
              </p>

              <p className='text-gray-600 py-6'>
                To begin, carefully unpack the product and ensure all necessary
                components are included. Place the product on a clean, flat
                surface before use. If the device requires power, insert the
                batteries or connect it to a power source as indicated in the
                manual. Press the power button to activate the product, and
                refer to the control panel or app interface to adjust the
                settings according to your preference. Use the product as
                recommended, following all safety guidelines provided. After
                use, turn off the device and disconnect it from the power
                source. Clean and store the product in a cool, dry place to
                maintain its condition for future use.
              </p>
 
             <div className='grid grid-cols-1 md:grid-cols-2 gap-5'> 
                <span className='flex'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                    <p className='text-gray-600'>
                        Real-time shipping rates, tracking, and delivery
                        management
                    </p>
                </span>

                <span className='flex'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                    <p className='text-gray-600'>
                        Real-time stock tracking and alerts for low inventory
                    </p>
                </span>

                <span className='flex'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                    <p className='text-gray-600'>
                        Support for multiple payment options like credit cards,
                        PayPal, Stripe.
                    </p>
                </span>
                <span className='flex'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                    <p className='text-gray-600'>
                      Real-time shipping rates, tracking, and delivery
                        management
                    </p>
                </span>
                <span className='flex'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                    <p className='text-gray-600'>
                      Real-time stock tracking and alerts for low inventory
                    </p>
                </span>
                <span className='flex'>
                    <Check size={23}
                    className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                    <p className='text-gray-600'>
                      upport for multiple payment options like credit cards,
                        PayPal, Stripe.
                    </p>
                </span>
             </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto px-6 py-16'>
                    <div>
                        <img src="/sellzy-imgs/about3.jpg" 
                        alt=""
                        className='w-150 h-150 object-cover rounded-2xl' />
                    </div>
             
                    <div className='pt-5'>
                                 
                        <h2 className='text-3xl pt-8'>🛒 eCommerce Platform Features</h2>
                        <p className='text-gray-600 pt-10'>
                          Launch, manage, and grow your online store with our
                          all-in-one eCommerce solution. Whether you're a small
                          business or a growing brand, our platform is designed to
                          simplify the selling process and enhance your customers’
                          shopping experience. From product listings to secure
                          payments and seamless shipping, everything you need is built
                          right in.
                        </p>
             
                        <span className='flex py-4'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600 text-start'> 
                          Real-time shipping rates, tracking, and delivery
                          management
                        </p>
                        </span>
             
                        <span className='flex'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                        <p className='text-gray-600'>
                           Real-time stock tracking and alerts for low inventory
                        </p>
                        </span>
             
                        <span className='flex py-4'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600'> 
                          Support for multiple payment options like credit cards,
                          PayPal, Stripe,
                        </p>
                        </span>
             
                        <span className='flex pb-5'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600'> 
                          Seamless experience across smartphones, tablets, and
                          desktops
                        </p>
                        </span>

                        <span className='flex pb-5'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600'> 
                           Track sales, traffic, conversion rates, and customer
                           behavior
                        </p>
                        </span>

                        <span className='flex pb-5'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600'> 
                          Allow customers to track orders, reorder, and manage
                          profiles
                        </p>
                        </span>
             
                    </div>
             
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 max-w-7xl mx-auto px-6 py-6'>
                    <div>
                                 
                        <h2 className='text-3xl pt-3'>Easy to Customization</h2>
                        <p className='text-gray-600 pt-10 pb-4'>
                          Launch, manage, and grow your online store with our
                          all-in-one eCommerce solution. Whether you're a small
                          business or a growing brand, our platform is designed to
                          simplify the selling process and enhance your customers’
                          shopping experience. From product listings to secure
                          payments and seamless shipping, everything you need is built
                          right in.
                        </p>
             
                        <span className='flex py-4'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600 text-start'> 
                          Real-time shipping rates, tracking, and delivery
                          management
                        </p>
                        </span>
             
                        <span className='flex'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                        <p className='text-gray-600'>
                           Real-time stock tracking and alerts for low inventory
                        </p>
                        </span>
             
                        <span className='flex py-4'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600'> 
                          Support for multiple payment options like credit cards,
                          PayPal, Stripe,
                        </p>
                        </span>
             
                        <span className='flex pb-5'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600'> 
                          Seamless experience across smartphones, tablets, and
                          desktops
                        </p>
                        </span>

                        <span className='flex pb-5'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600'> 
                           Track sales, traffic, conversion rates, and customer
                           behavior
                        </p>
                        </span>

                        <span className='flex pb-5'>
                            <Check size={23}
                            className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                        <p className='text-gray-600'> 
                          Allow customers to track orders, reorder, and manage
                          profiles
                        </p>
                        </span>
                    </div>
                    <div>
                        <img src="/sellzy-imgs/team2.png" 
                        alt=""
                        className='w-150 h-130 object-cover rounded-2xl' />
                    </div>

                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-3 py-7 px-5'>
                <div className='bg-[var(--backgroundColor)] p-6 flex flex-col items-center justify-center border border-gray-300 rounded-3xl'>
                    <Truck size={60}
                    className='bg-[#fff7cd] rounded-full p-4'/>
                    <h4 className='text-xl pt-4'>Free Shipping</h4>
                    <p className='text-gray-600 text-center text-md pt-1'>
                        Enjoy the Convenience of Free Shipping on Every Order
                    </p>
                </div>

                <div className='bg-[var(--backgroundColor)] p-6 flex flex-col items-center justify-center border border-gray-300 rounded-3xl'>
                    <Headphones size={60}
                    className='bg-[#fff7cd] rounded-full p-4'/>
                    <h4 className='text-xl pt-4'>24x7 Support</h4>
                    <p className='text-gray-600 text-center max-w-xs text-md pt-1'>
                        Round-the-Clock Assistance, Anytime You Need It</p>
                </div>
                <div className='bg-[var(--backgroundColor)] p-6 flex flex-col items-center justify-center border border-gray-300 rounded-3xl'>
                    <Package2 size={60}
                    className='bg-[#fff7cd] rounded-full p-4'/>
                    <h4 className='text-xl pt-4'>30 Days Return</h4>
                    <p className='text-gray-600 text-center max-w-xs text-md pt-1'>
                        Your Satisfaction is Our Priority: Return Any Product Within 30 Days
                   </p>
                </div>
                <div className='bg-[var(--backgroundColor)] p-6 flex flex-col items-center justify-center border border-gray-300 rounded-3xl'>
                    <LucideBadgeDollarSign size={60}
                    className='bg-[#fff7cd] rounded-full p-4'/>
                    <h4 className='text-xl pt-4'>Secure Payment</h4>
                    <p className='text-gray-600 text-center max-w-xs text-md pt-1'>
                      Seamless Shopping Backed by Safe and Secure Payment Options
                   </p>
                </div>
            </div>

            <p className='text-gray-600 py-1'>
                To begin, carefully unpack the product and ensure all necessary
                components are included. Place the product on a clean, flat
                surface before use. If the device requires power, insert the
                batteries or connect it to a power source as indicated in the
                manual. Press the power button to activate the product, and
                refer to the control panel or app interface to adjust the
                settings according to your preference. Use the product as
                recommended, following all safety guidelines provided. After
                use, turn off the device and disconnect it from the power
                source. Clean and store the product in a cool, dry place to
                maintain its condition for future use.
              </p>
      
            </div>
            </div>
        </section>

        <section>
            <div className='flex justify-between md:mx-10 mx-3'>
                <div>
                <h3 className='font-semibold text-3xl'>Related Products</h3>
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
    <Subscribe/>
    </main>
    </>
  )
}

export default DetailPage