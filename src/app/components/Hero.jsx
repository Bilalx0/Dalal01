import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center  text-white overflow-hidden mt-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect x=%220%22 y=%220%22 width=%22100%22 height=%22100%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%220.5%22/%3E%3C/svg%3E')] opacity-20"></div>
        {/* Glowing Orb 1 */}
        <div className="absolute top-10 left-10 w-10 h-10 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
        {/* Glowing Orb 2 */}
        <div className="absolute top-5 right-20 w-5 h-5 bg-blue-500 rounded-full blur-xl opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight font-lexend-deca">
          Best Accounting Software in <br />
          <span className="bg-[linear-gradient(0deg,#2A2355_0%,#FFFFFF_100%)] bg-clip-text text-transparent ">
            India, tech Startup
          </span>
        </h1>

        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
                      src="/asset.png"
                      alt="Logo"
                      width={100}
                      height={100}
                    />
        </span>

        {/* Subheading */}
        <p className="mt-24 text-lg text-[#8F9BB7] font-normal">
          Changing how India does its hisabkitab
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/trial">
            <button
              style={{
                background:
                  "linear-gradient(90deg, #331C9C 0%, #9066FB 51%, #331C9C 100%)",
              }}
              className="text-white font-normal py-3 px-10 rounded-full"
            >
              Start a Free Trial
            </button>
          </Link>
          <Link href="/pricing">
            <button className="border-[#282D45] border text-white font-normal py-3 px-10 rounded-full">
              View Pricing
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
