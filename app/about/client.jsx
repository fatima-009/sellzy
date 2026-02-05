import React from 'react';
import { 
    BadgeCheckIcon,
    Check,
    ChevronLeft,
    ChevronRight,
    Facebook,
    Headphones, 
    Instagram, 
    LinkedinIcon, 
    Package2, 
    Star, 
    Truck, 
    Twitter
} from 'lucide-react';

const About = () => {
  return (
    <>
    <main className='bg-[var(--backgroundColor)] text-black'>
        <section>
            <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">

                <div>
                  <h1 className="text-4xl md:text-5xl font-bold min-w-xl text-gray-900 leading-tight">
                    Empowering Better Health at Home
                  </h1>
            
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Our Mission
                    </h3>
                    <p className="mt-3 text-gray-600 text-lg leading-relaxed">
                      To make quality healthcare products accessible, affordable, and
                      reliable for every household. We are committed to helping
                      individuals and families take control of their health with ease,
                      confidence, and care—right from the comfort of home.
                    </p>
                  </div>
            
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Our Vision
                    </h3>
                    <p className="mt-3 text-gray-600 text-lg leading-relaxed">
                      To become a trusted name in home healthcare by simplifying the
                      way people care for themselves and their loved ones—empowering
                      healthier lives through innovation, compassion, and convenience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
            
                  <div className="rounded-2xl overflow-hidden h-70 w-100">
                    <img
                      src="/sellzy-imgs/about1.jpg"
                      alt="About top"
                      className="w-full h-full object-cover"
                    />
                  </div>
            
                  <div className="rounded-2xl overflow-hidden h-[520px]">
                    <img
                      src="/sellzy-imgs/about2.jpg"
                      alt="About bottom"
                      className="w-full h-full object-cover"
                    />
                  </div>
            
                </div>
           </div>

                <div className="my-15 border border-gray-200 rounded-2xl px-3 py-12 mx-15">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
              
                    <div className="md:border-r border-gray-200 px-4">
                      <h2 className="text-3xl font-bold text-gray-900">120+</h2>
                      <p className="mt-2 text-gray-600">Years of Experience</p>
                    </div>
              
                    <div className="md:border-r border-gray-200 px-4 mt-8 md:mt-0">
                      <h2 className="text-3xl font-bold text-gray-900">100M</h2>
                      <p className="mt-2 text-gray-600">Orders Delivered Safely</p>
                    </div>
              
                    <div className="md:border-r border-gray-200 px-4 mt-8 md:mt-0">
                      <h2 className="text-3xl font-bold text-gray-900">100K+</h2>
                      <p className="mt-2 text-gray-600">Verified 5-Star Reviews</p>
                    </div>
              
                    <div className="px-4 mt-8 md:mt-0">
                      <h2 className="text-3xl font-bold text-gray-900">99%</h2>
                      <p className="mt-2 text-gray-600">Customer Satisfaction Rate</p>
                    </div>
                  </div>
               </div>
         </div>
      </section>

        <section className='py-2'>
            <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl'> Quality is our priority</h2>
            <p className='text-gray-600 py-3'>Because you deserve nothing less than the best.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#FFD6EF] rounded-4xl mt-3 py-12 px-5'>
                <div className='bg-[var(--backgroundColor)] p-6 flex flex-col items-center justify-center rounded-3xl'>
                    <Truck size={60}
                    className='bg-[#fff7cd] rounded-full p-4'/>
                    <h4 className='text-xl pt-4'>Free Shipping</h4>
                    <p className='text-gray-600 text-center text-md pt-1'>
                        Enjoy the Convenience of Free Shipping on Every Order
                    </p>
                </div>

                <div className='bg-[var(--backgroundColor)] p-6 flex flex-col items-center justify-center rounded-3xl'>
                    <Headphones size={60}
                    className='bg-[#fff7cd] rounded-full p-4'/>
                    <h4 className='text-xl pt-4'>24x7 Support</h4>
                    <p className='text-gray-600 text-center max-w-xs text-md pt-1'>
                        Round-the-Clock Assistance, Anytime You Need It</p>
                </div>
                <div className='bg-[var(--backgroundColor)] p-6 flex flex-col items-center justify-center rounded-3xl'>
                    <Package2 size={60}
                    className='bg-[#fff7cd] rounded-full p-4'/>
                    <h4 className='text-xl pt-4'>30 Days Return</h4>
                    <p className='text-gray-600 text-center max-w-xs text-md pt-1'>
                        Your Satisfaction is Our Priority: Return Any Product Within 30 Days
                   </p>
                </div>
            </div>
        </section>

        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-24 max-w-7xl mx-auto px-6 py-16'>
                <div>
                    <span className='text-teal-700 bg-teal-100 text-lg px-4 py-1 rounded-2xl'>
                      Features
                    </span>
                    <h2 className='text-3xl pt-8'>Faster Free Delivery</h2>
                    <p className='text-gray-600 pt-10'>
                      Experience the ultimate convenience with our Faster Free Delivery
                      service—designed to bring your orders to your doorstep quickly and
                      without any extra cost. Whether you're ordering essentials or
                      gifts, we make sure you get them faster than ever. Why You'll Love
                      It:
                    </p>

                    <span className='flex py-4'>
                        <Check size={23}
                        className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600 text-start'> 
                      Absolutely Free: No delivery fees, no hidden charges—just
                      fast, reliable service.
                    </p>
                    </span>

                    <span className='flex'>
                        <Check size={23}
                        className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                    <p className='text-gray-600'>
                      Real-Time Tracking: Stay updated every step of the way with
                      live order tracking.
                    </p>
                    </span>

                    <span className='flex py-4'>
                        <Check size={23}
                        className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600'> 
                      Reliable Delivery Partners: We've partnered with trusted
                      couriers to ensure your packages
                    </p>
                    </span>

                    <span className='flex pb-5'>
                        <Check size={23}
                        className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600'> 
                      Weekend & Evening Delivery: Get your items when it's most
                      convenient for you.
                    </p>
                    </span>

                    <span className='text-gray-600 '>
                      Say goodbye to long waits and shipping fees. With Faster Free
                      Delivery, we're raising the standard—fast, seamless, and 100%
                      free.
                    </span>
                </div>

                <div>
                    <img src="/sellzy-imgs/about3.jpg" 
                    alt=""
                    className='w-130 h-150 object-cover rounded-2xl' />
                </div>
            </div>
        </section>

         <section className='py-2'>
            <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl'>  Trusted by Customers</h2>
            <p className='text-gray-600 py-3'>
             Join thousands of happy customers around the globe.
            </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#a0e2e0] rounded-4xl mt-3 py-15 px-25'>
                <div className='bg-[var(--backgroundColor)] p-12 rounded-3xl'>
                    <div className='flex gap-4'>
                        <img 
                        src="/sellzy-imgs/dp.png" 
                        alt="" 
                        className='w-10 h-10 object-cover rounded-full'/>
                        <span >
                            <p className=''>Robert Fox</p>
                            <p className='text-gray-600'>12:40PM, 14 Nov,2026</p>
                        </span>
                    </div>

                    <div className="flex text-sm py-4 items-center">
                        <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={13} className="fill-gray-300 text-gray-300"/>
                        <span className='px-2'>4.5</span>
                              
                        <span className="text-teal-700 ml-1 border-l border-gray-300 px-2 ">
                            <BadgeCheckIcon className='inline-block fill-teal-700 text-white pr-1'/>Verified purchase
                        </span>
                    </div>

                    <p className='text-gray-600'>
                  I was honestly surprised at how fast the delivery was. The
                  product came well-packaged and exactly as described. Great
                  quality, and the free fast shipping made the experience even
                  better!
                </p>
                </div>

                <div className='bg-[var(--backgroundColor)] p-12 rounded-3xl'>
                    <div className='flex gap-4'>
                        <img 
                        src="/sellzy-imgs/dp.png" 
                        alt="" 
                        className='w-10 h-10 object-cover rounded-full'/>
                        <span >
                            <p className=''>James Smith</p>
                            <p className='text-gray-600'>12:40PM, 14 Nov,2026</p>
                        </span>
                    </div>

                    <div className="flex text-sm py-4 items-center">
                        <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={13} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={13} className="fill-gray-300 text-gray-300"/>
                        <span className='px-2'>4.5</span>
                              
                        <span className="text-teal-700 ml-1 border-l border-gray-300 px-2 ">
                            <BadgeCheckIcon className='inline-block fill-teal-700 text-white pr-1'/>Verified purchase
                        </span>
                    </div>

                    <p className='text-gray-600'>
                     From browsing to checkout, everything was super easy. Loved
                     how I didn't have to pay anything extra for shipping, and
                     my item arrived the next day. Highly recommend!
                    </p>
                </div>
               
            <div className='flex translate-x-119 gap-6 pt-5'>
                <ChevronLeft size={50}
                className='bg-gray-100 rounded-full p-4 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
                <ChevronRight size={50}
                className='bg-gray-100 rounded-full p-4 hover:bg-[var(--hoverColor)] hover:text-white cursor-pointer'/>
            </div>
            </div>

        </section>

         <section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto px-6 py-16'>
                
                <div>
                    <img src="/sellzy-imgs/about5.jpg" 
                    alt=""
                    className='w-150 h-150 object-cover rounded-2xl' />
                </div>

                <div className='pt-5'>
                    <span className='text-teal-700 bg-teal-100 text-lg px-4 py-1 rounded-2xl'>
                      Features
                    </span>
                    <h2 className='text-3xl pt-8'>Focus on Customer Satisfaction</h2>
                    <p className='text-gray-600 pt-10'>
                      Experience the ultimate convenience with our Faster Free Delivery
                      service—designed to bring your orders to your doorstep quickly and
                      without any extra cost. Whether you're ordering essentials or
                      gifts, we make sure you get them faster than ever. Why You'll Love
                      It:
                    </p>

                    <span className='flex py-4'>
                        <Check size={23}
                        className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600 text-start'> 
                      Absolutely Free: No delivery fees, no hidden charges—just
                      fast, reliable service.
                    </p>
                    </span>

                    <span className='flex'>
                        <Check size={23}
                        className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/> 
                    <p className='text-gray-600'>
                      Real-Time Tracking: Stay updated every step of the way with
                      live order tracking.
                    </p>
                    </span>

                    <span className='flex py-4'>
                        <Check size={23}
                        className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600'> 
                      Reliable Delivery Partners: We've partnered with trusted
                      couriers to ensure your packages
                    </p>
                    </span>

                    <span className='flex pb-5'>
                        <Check size={23}
                        className='bg-teal-700 text-white rounded-full inline-block mr-4 p-1'/>
                    <p className='text-gray-600'> 
                      Weekend & Evening Delivery: Get your items when it's most
                      convenient for you.
                    </p>
                    </span>

                    <span className='text-gray-600 '>
                      Say goodbye to long waits and shipping fees. With Faster Free
                      Delivery, we're raising the standard—fast, seamless, and 100%
                      free.
                    </span>
                </div>

            </div>
        </section>

        <section className='pb-10'>
            <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl'>  Meet Our Team</h2>
            <p className='text-gray-600 py-3'>
             Join thousands of happy customers around the globe.
            </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 pt-6'>
                {[
                    {
                        img: "/sellzy-imgs/team1.png",
                        name: "Jenny Wilson",
                        role: "Managing Director",
                    },
                    {
                        img: "/sellzy-imgs/team2.png",
                        name: "Jenny Wilson",
                        role: "Managing Director",
                    },
                    {
                        img: "/sellzy-imgs/team3.png",
                        name: "Jenny Wilson",
                        role: "Managing Director",
                    },
                    {
                        img: "/sellzy-imgs/about5.jpg",
                        name: "Jenny Wilson",
                        role: "Managing Director",
                    },
                ].map((item, index) => (
                    <div key={index} className='mx-3 py-3 bg-white rounded-2xl border border-gray-300'>
                        <div>
                        <img 
                        src={item.img} 
                        alt="" 
                        className='w-50 md:w-65 h-70 object-cover rounded-xl mx-auto cursor-pointer bg-pink-100'/>
                        </div>

                        <div className='px-5 pt-4 text-center'>

                        <h3 className=' text-md md:text-xl font-semibold hover:text-[var(--hoverColor)] cursor-pointer'>
                            {item.name}
                        </h3>
                        <p className='text-md text-gray-600'>{item.role}</p>

                        <div className='flex gap-3 justify-center pt-6 text-white'>
                            <LinkedinIcon size={40}
                            className='bg-teal-700 hover:bg-teal-800 rounded-full p-2 cursor-pointer'/>
                            <Facebook size={40}
                            className='bg-teal-700 hover:bg-teal-800 rounded-full p-2 cursor-pointer'/>
                            <Instagram size={40}
                            className='bg-teal-700 hover:bg-teal-800 rounded-full p-2 cursor-pointer'/>
                            <Twitter size={40}
                            className='bg-teal-700 hover:bg-teal-800 rounded-full p-2 cursor-pointer'/>
                        </div>
                       </div>
                       </div>
                ))}
            </div>
        </section>

        <section className="py-10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
               <h2 className="text-3xl font-bold mb-3">
                 Subscribe to our newsletter
               </h2>
               <p className="text-sm text-gray-400 mb-8">
                 Stay updated! Subscribe to our mailing list for news, updates, and exclusive offers.
               </p>

                 <div className="flex flex-col sm:flex-row items-center gap-16 mx-auto max-w-lg
                   border border-gray-200 rounded-full  focus-within:border-black focus-within:ring-1">
                     <input
                       type="email"
                       placeholder="Enter your email"
                       className=" w-full sm:w-80 px-5 py-3 rounded-full text-gray-800 outline-none bg-transparent"
                     />
         
                     <button
                       className="
                         px-6 py-2 rounded-full
                         bg-teal-600 hover:bg-teal-700
                         text-white transition font-medium cursor-pointer
                       "
                     >
                       Subscribe
                     </button>
                 </div>

            </div>
       </section>
    </main>
    </>
  )
}

export default About