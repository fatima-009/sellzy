import { 
    Search, 
    User, 
    ShoppingCart, 
    ChevronDown, 
    Headphones 
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b">
      
      <div className="bg-teal-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
    
          <div className="flex flex-wrap items-center gap-6">
      
            <div className="flex items-center gap-3">
              <Headphones size={16} />
              <span>Need Support?</span>
              <p className=" font-medium">
                Call Us <span 
                className="bg-yellow-400 text-black px-1 py-1 rounded-full text-xs cursor-pointer"> 
                (480) 555-0103 </span>
              </p>
            </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 cursor-pointer border-l border-white/30 pl-4">
          <span>English</span>
          <ChevronDown size={14} />
        </div>

        <div className="flex items-center gap-1 cursor-pointer border-l border-white/30 pl-4">
          <span>USD</span>
          <ChevronDown size={14} />
        </div>

        {/* <span className="bg-yellow-400 text-black px-2 py-0.5 rounded font-semibold ml-2">
          25% OFF Today
        </span> */}
      </div>
    </div>

    <div className="hidden md:flex items-center">
      <span className="px-3 cursor-pointer">
        About us
      </span>
      <span className="px-3 border-l border-white/30 cursor-pointer">
        My Account
      </span>
      <span className="px-3 border-l border-white/30 cursor-pointer">
        My Wishlist
      </span>
      <span className="px-3 border-l border-white/30 cursor-pointer">
        Order Tracking
      </span>
    </div>

  </div>
      </div>


      <div className="bg-white">
         <div className="max-w-7xl mx-auto px-7 py-4 flex items-center justify-between">
    
            <div className="w-43 h-15">
              <img
                src="/sellzy-imgs/logo.png"
                alt="Sellzy Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden md:flex flex-1 justify-center px-8">
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search for the items"
                  className="w-full border border-gray-300 rounded-full py-3 pl-5 pr-12 text-sm placeholder:text-gray-400 focus:outline-none"
                />
                <Search
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

         <div className="flex items-center gap-6">
      
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center">
                <User size={18} />
              </div>
              <div className="hidden sm:block text-sm leading-tight">
                <p className="text-gray-500">Account</p>
                <p className="font-medium text-gray-800">Login</p>
              </div>
              <ChevronDown size={17} className="text-black"/>
            </div>

            <div className="flex items-center gap-2 cursor-pointer relative">
              <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center">
                <ShoppingCart size={18} />
              </div>
              <div className="hidden sm:block text-sm leading-tight">
                <p className="text-gray-500">Cart</p>
                <p className="font-medium text-gray-800">0 Items</p>
              </div>

             {/* <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] px-1.5 rounded-full">
               0
             </span> */}
           </div>
          </div>

         </div>
      </div>


      <nav className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-7 py-3 flex items-center justify-between">
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer">
            Explore All Categories <ChevronDown size={16} />
          </button>

          <ul className="hidden lg:flex items-center gap-8 text-sm text-black">
            <li className="text-teal-700"><a href="/">Home</a> <ChevronDown 
            size={15} className="inline-block"/></li>
            <li className="hover:text-teal-700 cursor-pointer"><a href="/about">About Us</a></li>
            <li className="hover:text-teal-700 cursor-pointer">Shop <ChevronDown 
            size={15} className="inline-block"/></li>
            <li className="hover:text-teal-700 cursor-pointer">Sellers <ChevronDown 
            size={15} className="inline-block"/></li>
            <li className="hover:text-teal-700 cursor-pointer">Mega Menu <ChevronDown 
            size={15} className="inline-block"/></li>
            <li className="hover:text-teal-700 cursor-pointer">Blog <ChevronDown 
            size={15} className="inline-block"/></li>
            <li className="hover:text-teal-700 cursor-pointer">
              <a href="/product-detail">Product Detail</a> <ChevronDown 
            size={15} className="inline-block"/></li>
            <li className="hover:text-teal-700 cursor-pointer">Contact</li>
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <Headphones size={40}
            className="text-gray-800 bg-gray-100 rounded-full p-3"/>
            <div>
              <p className="text-xs text-gray-700">24/7 Support</p>
              <p className="text-sm text-gray-700">888-777-999</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
