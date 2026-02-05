import React from 'react';
import Subscribe from "../components/subscribe";
import { ChevronDown, ChevronLeft, ChevronRight, Heart, Menu, Search, ShoppingCart, Star } from 'lucide-react';

const Category = () => {
  return (
    <>
    <main className='bg-[var(--backgroundColor)] text-black'>

        <section>
          <div className='grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 mx-5 py-10'>

            <div className='hidden md:sticky md:top-6 md:block h-fit'>
            <div className=' border border-gray-200 rounded-2xl'>
                <span className='flex justify-between bg-gray-100 p-5'>
                <h4 className='font-semibold text-xl'>Filters</h4>
                <button className='text-md font-semibold text-teal-700 hover:underline cursor-pointer'>
                    Clear All</button>
                </span>
            
                <span className='flex justify-between p-5'>
                    <h4 className='text-lg font-semibold'>Category</h4>
                    <p className='text-gray-600 text-md hover:text-teal-700 hover:underline cursor-pointer'>
                        Reset
                    </p>
                </span>

               <span className='flex border border-gray-200 rounded-full p-2 mx-4'>
                <Search/>
                <input 
                type="search" 
                placeholder='Search'
                className='outline-none '/>
                </span>

                <div className='space-y-4 max-h-45 overflow-y-auto py-5 mx-1'>
                    {[
                        {cat: "Thermometers", amount: 29},
                        {cat: "Oximeters", amount: 5},
                        {cat: "BP Monitors", amount: 1},
                        {cat: "Personal Care", amount: 1},
                        {cat: "Personal Care", amount: 1},
                        {cat: "Personal Care", amount: 1},
                        {cat: "Personal Care", amount: 1},
                        {cat: "Personal Care", amount: 1},
                    ].map((item, index) => {
                        return(
                        <div key={index}
                        className='flex gap-4 mx-7'>
                            <input 
                            type="checkbox"
                            className='cursor-pointer' />
                            <span className='hover:text-teal-700 text-gray-600 cursor-pointer flex justify-between w-full'>
                            <h6 className='text-md'>{item.cat}</h6>
                            <p className='translate-x-6'>({item.amount})</p>
                            </span>
                        </div>
                        )
                    })}
                </div>
                
                <div className='border-t border-gray-300 '>
                    <span className='flex justify-between p-5 '>
                    <h4 className='text-lg font-semibold'>Rating</h4>
                    <p className='text-gray-600 text-md hover:text-teal-700 hover:underline cursor-pointer'>
                        Reset
                    </p>
                </span>

                <span className='grid md:grid-cols-3 gap-3 px-5 pb-8'>
                    <p className='border border-gray-300 rounded-full py-2 px-6 hover:bg-gray-100 cursor-pointer'>
                        5 <Star size={22}
                        className='text-amber-300 fill-amber-300 inline-block pb-1'/>
                    </p>
                    <p className='border border-gray-300 rounded-full py-2 px-6 hover:bg-gray-100 cursor-pointer'>
                        4 <Star size={22}
                        className='text-amber-300 fill-amber-300 inline-block pb-1'/>
                    </p>
                    <p className='border border-gray-300 rounded-full py-2 px-6 hover:bg-gray-100 cursor-pointer'>
                        3 <Star size={22}
                        className='text-amber-300 fill-amber-300 inline-block pb-1'/>
                    </p>
                    <p className='border border-gray-300 rounded-full py-2 px-6 hover:bg-gray-100 cursor-pointer'>
                        2 <Star size={22}
                        className='text-amber-300 fill-amber-300 inline-block pb-1'/>
                    </p>
                    <p className='border border-gray-300 rounded-full py-2 px-6 hover:bg-gray-100 cursor-pointer'>
                        1 <Star size={22}
                        className='text-amber-300 fill-amber-300 inline-block pb-1'/>
                    </p>
                </span>
                </div>

                <div className='border-t border-gray-300 '>
                    <span className='flex justify-between p-5 '>
                    <h4 className='text-lg font-semibold'>Size</h4>
                    <p className='text-gray-600 text-md hover:text-teal-700 hover:underline cursor-pointer'>
                        Reset
                    </p>
                </span>

                <span className='grid md:grid-cols-4 gap-3 px-5 pb-7 text-center'>
                    <p className='border border-gray-300 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                        S 
                    </p>
                    <p className='border border-gray-300 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                        M 
                    </p>
                    <p className='border border-gray-300 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                        L 
                    </p>
                    <p className='border border-gray-300 rounded-full p-2  hover:bg-gray-100 cursor-pointer'>
                        XL 
                    </p>
                    <p className='border border-gray-300 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                        XXL 
                    </p>
                    <p className='border border-gray-300 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                        XXXL 
                    </p>
                </span>
                </div>

                <div className='border-t border-gray-300 p-5'>
                    <span className='flex justify-between px-2'>
                    <h4 className='text-lg font-semibold'>Discount</h4>
                    <p className='text-gray-600 text-md hover:text-teal-700 hover:underline cursor-pointer'>
                        Reset
                    </p>
                </span>
                <div className='space-y-4 mx-6 py-5'>
                    {[
                        {cat: "Upto 5%", amount: 10},
                        {cat: "5% - 10%", amount: 8},
                        {cat: "10% - 15%", amount: 32},
                        {cat: "15% - 25%", amount: 12},
                        {cat: "More than 25%", amount: 12},
                    ].map((item, index) => {
                        return(
                        <div key={index}
                        className='flex gap-4'>
                            <input 
                            type="checkbox"
                            className='cursor-pointer' />
                            <span className='hover:text-teal-700 text-gray-600 cursor-pointer flex justify-between w-full'>
                            <h6 className='text-md max-w-32'>{item.cat}</h6>
                            <p className='translate-x-6'>({item.amount})</p>
                            </span>
                        </div>
                        )
                    })}
                </div>
                </div>

                 <div className='border-t border-gray-300 py-5'>
                    <span className='flex justify-between px-7 '>
                    <h4 className='text-lg font-semibold'>Brand</h4>
                    <p className='text-gray-600 text-md hover:text-teal-700 hover:underline cursor-pointer'>
                        Reset
                    </p>
                </span>
                <div className='space-y-4 max-h-45 overflow-y-auto py-5 mx-2'>
                    {[
                        {cat: "Mediguard", amount: 8},
                        {cat: "HealthPlus", amount: 7},
                        {cat: "BioCare", amount: 3},
                        {cat: "SmartAid", amount: 1},
                        {cat: "Personal Care", amount: 1},
                        {cat: "SmartAid", amount: 3},
                        {cat: "Personal Care", amount: 1},
                    ].map((item, index) => {
                        return(
                        <div key={index}
                        className='flex gap-4 mx-7'>
                            <input 
                            type="checkbox"
                            className='cursor-pointer' />
                            <span className='hover:text-teal-700 text-gray-600 cursor-pointer flex justify-between w-full'>
                            <h6 className='text-md'>{item.cat}</h6>
                            <p className='translate-x-6'>({item.amount})</p>
                            </span>
                        </div>
                        )
                    })}
                </div>
                </div>

                 <div className='border-t border-gray-300 p-5'>
                    <span className='flex justify-between px-2'>
                    <h4 className='text-lg font-semibold'>Pack Size</h4>
                    <p className='text-gray-600 text-md hover:text-teal-700 hover:underline cursor-pointer'>
                        Reset
                    </p>
                </span>
                <div className='space-y-4 mx-6 py-5'>
                    {[
                        {cat: "400 to 500 g", amount: 40},
                        {cat: "500 to 700 g", amount: 20},
                        {cat: "700 to 1 kg", amount: 32},
                        {cat: "120 - 150 g each vacuum", amount: 20},
                        {cat: "1pc", amount: 9},
                    ].map((item, index) => {
                        return(
                        <div key={index}
                        className='flex gap-4'>
                            <input 
                            type="checkbox"
                            className='cursor-pointer' />
                            <span className='hover:text-teal-700 text-gray-600 cursor-pointer flex justify-between w-full'>
                            <h6 className='text-md max-w-32'>{item.cat}</h6>
                            <p className='translate-x-6'>({item.amount})</p>
                            </span>
                        </div>
                        )
                    })}
                </div>
                </div>
            </div>
            </div>

            <div>
                <div className='flex justify-between'>
                    <span className='flex items-center gap-3'>
                    <Menu size={40} 
                    className='border border-gray-300 rounded-full p-2 hover:bg-gray-100 cursor-pointer'/>
                   <p className='text-gray-600 '>Showing 1-12 of 16 results</p>
                    </span>

                    <span className='flex gap-5 text-gray-400 border border-gray-300 rounded-full items-center px-2 cursor-pointer'>
                        <button className='text-md '>Sorting</button>
                        <ChevronDown size={24} className='pt-1'/>
                    </span>
                </div>

                <section className='pt-5'>
                
               <div className='grid grid-cols-1 md:grid-cols-3 py-10 space-y-5'>
                {[
                    {
                        img: "/sellzy-imgs/catimg1.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$29.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg2.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg3.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg4.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg5.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg6.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg7.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg8.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg9.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg10.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg11.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg12.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg13.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg14.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg15.png",
                        title: "VitaLife Omega-3 Softgels Heart Support Max Strength",
                        price: "$39.99",
                        saleprice: "$27.49",
                        sold: 4,
                        rating: 189,
                    },
                    {
                        img: "/sellzy-imgs/catimg16.png",
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
                        className='md:w-60 w-110 h-65 object-cover rounded-xl mx-auto cursor-pointer bg-gray-100'/>

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
                            className='bg-[var(--hoverColor)] text-white text-xs md:text-sm rounded-4xl hover:bg-teal-800 px-5 md:px-10 py-2 cursor-pointer'>
                                <ShoppingCart size={25}
                                className='inline-block pr-1'/> Add to Cart</button>
                           </div>
                        </div>

                       </div>
                    </div>
                    )
                )}

               
            </div>
             <div className='flex items-center justify-center gap-2'>
                    <ChevronLeft size={40}
                    className='border border-gray-300 hover:border-teal-700 hover:text-teal-700 hover:bg-teal-50 rounded-full  p-2 cursor-pointer'/>
                    <p className='border border-gray-300 hover:border-teal-700 hover:text-teal-700 hover:bg-teal-50 rounded-full px-4 py-2 cursor-pointer'>1</p>
                    <p className='border border-gray-300 hover:border-teal-700 hover:text-teal-700 hover:bg-teal-50 rounded-full px-4 py-2 cursor-pointer'>2</p>
                    <p className='border border-gray-300 hover:border-teal-700 hover:text-teal-700 hover:bg-teal-50 rounded-full px-4 py-2 cursor-pointer'>3</p>
                    <p className='border border-gray-300 hover:border-teal-700 hover:text-teal-700 hover:bg-teal-50 rounded-full px-4 py-2 cursor-pointer'>4</p>
                    <p className='border border-gray-300 hover:border-teal-700 hover:text-teal-700 hover:bg-teal-50 rounded-full px-4 py-2 cursor-pointer'>5</p>
                    <p className='px-3 pb-2'>...</p>
                    <ChevronRight size={40}
                     className='border border-gray-300 hover:border-teal-700 hover:text-teal-700 hover:bg-teal-50 rounded-full  p-2 cursor-pointer'/>
                </div>
        </section>
            </div>

          </div>
        </section>

        <Subscribe/>
    </main>
    </>
    )
}

export default Category