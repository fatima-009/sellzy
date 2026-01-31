import {
  Facebook,
  Instagram,
  Linkedin,
  LoaderPinwheel,
  Dribbble,
  MapPin,
  Phone,
  Mail,
  Printer,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f5c63] to-[#0b4e54] text-[#c7f3e0] pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-12">

        <div>
          <img 
          src="/sellzy-imgs/footer-logo.svg" 
          alt="" 
          />
          <p className="text-md leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-3 mb-6">
            {[Facebook, Instagram, Linkedin, LoaderPinwheel, Dribbble].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-300 hover:text-black text-white cursor-pointer transition"
                >
                  <Icon size={18} />
                </div>
              )
            )}
          </div>

          <p className="mb-3 font-semibold">Download Our App:</p>
          <div className="flex gap-3">
            <img
              src="/sellzy-imgs/google-play.png"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
            <img
              src="/sellzy-imgs/apple-store.png"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>

        <FooterColumn
          title="About"
          items={[
            "About Us",
            "Terms & Conditions",
            "Careers",
            "Latest News",
            "Contact Us",
            "Privacy Policy",
          ]}
        />

        <FooterColumn
          title="My Account"
          items={[
            "Your Account",
            "Return Policies",
            "Become a Vendor",
            "Wishlist",
            "Affiliate Program",
            "FAQs",
          ]}
        />

        <FooterColumn
          title="Categories"
          items={[
            "Healthcare",
            "Fashion",
            "Organic",
            "Beauty",
            "Groceries",
            "Fashion",
          ]}
        />

        <div>
          <h3 className="text-xl font-semibold mb-6 pb-5 border-b border-gray-500">Contact Information's</h3>
          <ul className="space-y-4 text-md">
            <li className="flex gap-3">
              <MapPin size={30}/> 2715 Ash Dr. San Jose, South Dakota 83475
            </li>
            <li className="flex gap-3">
              <Phone size={20}/> Call Us: (239) 555-0108
            </li>
            <li className="flex gap-3">
              <Mail size={20}/> sara.cruz@example.com
            </li>
            <li className="flex gap-3">
              <Printer size={20}/> sara.cruz@example.com
            </li>
          </ul>

          <img 
          src="/sellzy-imgs/payment-methods.png" 
          alt="" 
          className="w-full pt-5"/>
        </div>
      </div>

      <div className="mt-14 border-t border-white/20 py-6 text-center text-sm">
        © 2026 Copyright By Themeforest Powered By Createuiux
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-semibold mb-6 pb-5 border-b border-gray-500">{title}</h3>
    <ul className="space-y-5 text-md">
      {items.map((item, i) => (
        <li
          key={i}
          className=" cursor-pointer hover:underline"
        >
          <ChevronRight size={17} className="inline-block"/> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
