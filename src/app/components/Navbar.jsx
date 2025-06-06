import Link from 'next/link';
import Image from 'next/image'; 


const Navbar = () => {
  return (
    <nav className=" text-white py-6 px-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={180}
          height={180}
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
        <Link href="/solutions" className="hover:text-gray-300">Solutions</Link>
        <Link href="/industries" className="hover:text-gray-300">Industries</Link>
        <Link href="/resources" className="hover:text-gray-300">Resources</Link>
        <Link href="/blog" className="hover:text-gray-300">Blog</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </div>

      {/* Login/Signup Button */}
      <div>
        <Link href="/login">
          <button style={{background: 'linear-gradient(90deg, #331C9C 0%, #9066FB 51%, #331C9C 100%)'}} className="text-white text-sm font-normal py-2 px-6 rounded-full">
            Login/Signup
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;